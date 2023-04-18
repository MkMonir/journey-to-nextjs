'use client';

import { createContext, useState } from 'react';

interface User {
  id: number;
  firs_name: string;
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
  loading: false,
  error: null,
  data: null,
  setAuthState: () => {},
};

export const AuthContext = createContext<AuthState>(intialState);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [authState, setAuthState] = useState<State>(intialState);
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
