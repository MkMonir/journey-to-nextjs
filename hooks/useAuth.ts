import { useContext } from 'react';
import { AuthContext } from '@/app/context/AuthContext';
import axios from 'axios';
import { removeCookies } from 'cookies-next';

const useAuth = () => {
  const { setAuthState } = useContext(AuthContext);

  const signIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setAuthState({ loading: true, error: null, data: null });
    try {
      const res = await axios.post(
        'https://addakhana.vercel.app/api/auth/signin',
        {
          email,
          password,
        }
      );
      setAuthState({ loading: false, error: null, data: res.data.data });
    } catch (err: any) {
      setAuthState({
        loading: false,
        error: err.response.data.message,
        data: null,
      });
    }
  };
  const signUp = async ({
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
  }) => {
    try {
      setAuthState({ loading: true, error: null, data: null });

      const res = await axios.post(
        'https://addakhana.vercel.app//api/auth/signup',
        {
          email,
          password,
          first_name,
          last_name,
          city,
          phone,
        }
      );
      setAuthState({ loading: false, error: null, data: res.data.data });
    } catch (err: any) {
      setAuthState({
        loading: false,
        error: err.response.data.message,
        data: null,
      });
    }
  };

  const updateUser = async ({
    id,
    email,
    first_name,
    last_name,
    city,
    phone,
  }: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    city: string;
    phone: string;
  }) => {
    try {
      setAuthState({ loading: true, error: null, data: null });

      const res = await axios.patch(
        'https://addakhana.vercel.app/api/users/update_user',
        {
          email,
          first_name,
          last_name,
          city,
          phone,
          id,
        }
      );
      setAuthState({
        loading: false,
        error: null,
        data: res.data.data.updateUser,
      });
    } catch (err: any) {
      setAuthState({
        loading: false,
        error: err.response.data.message,
        data: null,
      });
    }
  };

  const signOut = () => {
    removeCookies('jwt');
    setAuthState({ loading: false, error: null, data: null });
  };

  return { signIn, signUp, signOut, updateUser };
};

export default useAuth;
