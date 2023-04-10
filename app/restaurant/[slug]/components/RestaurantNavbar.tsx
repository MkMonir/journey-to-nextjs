const RestaurantNavbar = () => {
  return (
    <nav className="flex font-medium border-bottom text-gray-500 sticky top-0 bg-white pt-3">
      {/* RESTAURANT NAVBAR */}
      <a
        href="#overview"
        className="p-4 pt-1 border-b-2 border-0 border-solid border-red-500 text-red-500 hover:text-red-700"
      >
        Overview
      </a>
      <a href="#photos" className="p-4 pt-1">
        Photos
      </a>
      <a href="#menu" className="p-4 pt-1">
        Menu
      </a>
      <a href="#review" className="p-4 pt-1">
        Review
      </a>
      {/* RESTAURANT NAVBAR */}
    </nav>
  );
};

export default RestaurantNavbar;
