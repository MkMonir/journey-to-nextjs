import { AuthContext } from '@/app/context/AuthContext';
import axios from 'axios';
import { useContext } from 'react';

const useAuth = () => {
  const { loading, error, data, setAuthState } = useContext(AuthContext);

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
  const signUp = async () => {};

  return { signIn, signUp };
};

export default useAuth;
