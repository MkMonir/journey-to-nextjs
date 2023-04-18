import { AuthContext } from '@/app/context/AuthContext';
import axios from 'axios';
import { useContext } from 'react';

const useAuth = () => {
  const { setAuthState } = useContext(AuthContext);

  const signIn = async (
    { email, password }: { email: string; password: string },
    handleClose: (e: any) => void
  ) => {
    try {
      setAuthState({ loading: true, error: null, data: null });
      const res = await axios.post('http://localhost:3000/api/auth/signin', { email, password });
      setAuthState({ loading: false, error: null, data: res.data.data });
      handleClose('success');
    } catch (err: any) {
      setAuthState({ loading: false, error: err.response.data.message, data: null });
    }
  };
  const signUp = async (
    {
      email,
      password,
      first_name,
      last_name,
      city,
      phone,
    }: {
      email: string;
      password: string;
      first_name: string;
      last_name: string;
      city: string;
      phone: string;
    },
    handleClose: (e: any) => void
  ) => {
    try {
      setAuthState({ loading: true, error: null, data: null });
      const res = await axios.post('http://localhost:3000/api/auth/signup', {
        email,
        password,
        first_name,
        last_name,
        city,
        phone,
      });
      setAuthState({ loading: false, error: null, data: res.data.data });
      handleClose('success');
    } catch (err: any) {
      setAuthState({ loading: false, error: err.response.data.message, data: null });
    }
  };

  return { signIn, signUp };
};

export default useAuth;
