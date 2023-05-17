"use client";

import { useState } from "react";

const RestaurantNavbar = () => {
  const [selectedItem, setSelectedItem] = useState("overview");

  const itemClass = (itemName: string) => {
    return `p-4 pt-1 ${
      selectedItem === itemName
        ? "border-b-2 border-0 border-solid border-teal-500 text-teal-500 hover:text-teal-700"
        : ""
    }`;
  };

  return (
    <nav className="flex font-medium border-bottom text-gray-500 sticky top-0 bg-white pt-3">
      {/* RESTAURANT NAVBAR */}
      <a
        href="#overview"
        className={itemClass("overview")}
        onClick={() => setSelectedItem("overview")}
      >
        Overview
      </a>
      <a
        href="#photos"
        className={itemClass("photos")}
        onClick={() => setSelectedItem("photos")}
      >
        Photos
      </a>
      <a
        href="#menu"
        className={itemClass("menu")}
        onClick={() => setSelectedItem("menu")}
      >
        Menu
      </a>
      <a
        href="#review"
        className={itemClass("review")}
        onClick={() => setSelectedItem("review")}
      >
        Review
      </a>
      {/* RESTAURANT NAVBAR */}
    </nav>
  );
};

export default RestaurantNavbar;
