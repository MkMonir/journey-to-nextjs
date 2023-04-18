import Link from 'next/link';
import Modal from './Modal';

const Navbar = () => {
  return (
    <nav className="bg-white py-3 px-5 flex justify-between items-center container mx-auto">
      <Link href="/" className="font-bold text-gray-700 text-2xl md:text-3xl select-none">
        AddaKhana
      </Link>

      <div className="flex gap-2">
        <Modal isSignin={false} />
        <Modal isSignin={true} />
      </div>
    </nav>
  );
};

export default Navbar;
