'use client';

import Link from 'next/link';
import Modal from './Modal';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import useAuth from '@/hooks/useAuth';

const Navbar = () => {
  const { data, loading } = useContext(AuthContext);
  const { signOut } = useAuth();
  return (
    <nav className="bg-white py-3 px-5 flex justify-between items-center container mx-auto">
      <Link href="/" className="font-bold text-gray-700 text-2xl md:text-3xl select-none">
        AddaKhana
      </Link>

      <>
        {data ? (
          <button
            className="active:scale-95 transition-all duration-200 px-4 py-1.5 rounded bg-teal-400 text-teal-50 border-primary"
            onClick={signOut}
          >
            Sign out
          </button>
        ) : (
          <div className="flex gap-2">
            <Modal isSignin={false} />
            <Modal isSignin={true} />
          </div>
        )}
      </>
    </nav>
  );
};

export default Navbar;
