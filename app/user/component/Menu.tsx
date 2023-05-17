"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
  const profileItems = [
    {
      text: "Dining Dashboard",
      link: "/user/dining-dashboard",
    },
    {
      text: "Favorites",
      link: "/user/favorites",
    },
    {
      text: "Profile",
      link: "/user/profile",
    },
    {
      text: "Payment Methods",
      link: "/user/payment-methods",
    },
  ];

  const currentPage = usePathname();

  return (
    <div>
      <ul>
        {profileItems?.map((item, i) => (
          <li key={i}>
            <Link
              href={item.link}
              className={`block my-4 text-gray-600 ${
                currentPage?.split("/")[2] ===
                item.text.toLocaleLowerCase().split(" ").join("-")
                  ? "text-gray-800 font-bold"
                  : ""
              }`}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
