import Link from "next/link";
import Modal from "./Modal";

const Navbar = () => {
  return (
    <nav className="bg-white py-2 px-5 flex justify-between">
      <Link href="/" className="font-bold text-gray-700 text-2xl">
        AddaKhana
      </Link>

      <div className="flex gap-2">
        {/* <button className="bg-teal-600 px-4 py-1.5 rounded text-teal-50 active:scale-95 transition-all duration-200">
          Sign up
        </button> */}
        <Modal isSignin={false} />
        <Modal isSignin={true} />
      </div>
    </nav>
  );
};

export default Navbar;
