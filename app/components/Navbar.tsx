"use client";

import Link from "next/link";
import Modal from "./Modal";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import useAuth from "@/hooks/useAuth";
import avatar from "./../../public/icons/avatar.png";
import Image from "next/image";

const Navbar = () => {
  const { data } = useContext(AuthContext);
  const { signOut } = useAuth();
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: any) => {
      if (!profileRef.current) {
        return;
      }
      if (!profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const profileItems = [
    {
      text: "My Profile",
      link: "",
    },
    {
      text: "My Dining History",
      link: "",
    },
    {
      text: " My Saved Restaurants",
      link: "",
    },
  ];

  return (
    <nav className="bg-white py-3 px-5 flex justify-between items-center container mx-auto">
      <Link
        href="/"
        className="font-bold text-gray-700 text-2xl md:text-3xl select-none"
      >
        AddaKhana
      </Link>

      <>
        {data ? (
          <div className="relative" ref={profileRef}>
            <button
              className="w-10 h-10 bg-gray-100 rounded-full grid place-items-center border-primary"
              onClick={() => setProfileOpen((prev) => !prev)}
            >
              <Image src={avatar} alt="" className="w-8 h-8" />
            </button>

            {/* <!-- Dropdown menu --> */}
            <div
              className={`z-10 absolute top-12 right-0 bg-white divide-y divide-solid divide-x-0 divide-gray-100 rounded-lg shadow w-56 border-primary ${
                profileOpen ? "block" : "hidden"
              }`}
            >
              <div className="px-4 py-3 text-sm text-gray-900">
                <div className="truncate">Hello, {data.first_name}!</div>
                <div className="font-medium truncate">{data.email}</div>
              </div>
              <ul className="py-2 text-sm text-gray-700">
                {profileItems?.map((item, i) => (
                  <li key={i} onClick={() => setProfileOpen(false)}>
                    <Link
                      href={item.link}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="py-2">
                <li
                  className="block px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                  onClick={() => {
                    signOut();
                    setProfileOpen(false);
                  }}
                >
                  Sign out
                </li>
              </div>
            </div>
          </div>
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
