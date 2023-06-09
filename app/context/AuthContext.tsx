'use client';

import { createContext, useEffect, useState } from 'react';
import { getCookie } from 'cookies-next';
import axios from 'axios';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  city: string;
  phone: string;
}

interface State {
  loading: boolean;
  error: string | null;
  data: User | null;
}

interface AuthState extends State {
  setAuthState: React.Dispatch<React.SetStateAction<State>>;
}

const intialState = {
  loading: true,
  error: null,
  data: null,
  setAuthState: () => {},
};

export const AuthContext = createContext<AuthState>(intialState);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [authState, setAuthState] = useState<State>(intialState);

  const fetchUser = async () => {
    try {
      setAuthState({ loading: true, error: null, data: null });
      const jwt = getCookie('jwt');

      if (!jwt) {
        return setAuthState({
          loading: false,
          error: null,
          data: null,
        });
      }

      const res = await axios.get('https://addakhana.vercel.app/api/auth/me', {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
      return setAuthState({ loading: false, error: null, data: res.data.data });
    } catch (err: any) {
      return setAuthState({
        loading: false,
        error: err.response.data.message,
        data: null,
      });
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        setAuthState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
