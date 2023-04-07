import Link from "next/link";

const RestaurantNavbar = () => {
  return (
    <nav className="flex font-medium border-bottom">
      {/* RESTAURANT NAVBAR */}
      <Link
        href="/restaurant/sultan"
        className="p-4 pt-1 border-b-2 border-0 border-solid border-red-500 text-red-500 hover:text-red-700"
      >
        Overview
      </Link>
      <Link href="/restaurant/sultan/menu" className="p-4 pt-1">
        Menu
      </Link>
      {/* RESTAURANT NAVBAR */}
    </nav>
  );
};

export default RestaurantNavbar;
