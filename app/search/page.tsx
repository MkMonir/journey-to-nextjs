import Link from "next/link";
import Navbar from "../components/Navbar";
import Ratting from "../components/Ratting";
import Header from "./components/Header";
import SearchFilterBar from "./components/SearchFilterBar";
import RestaurantCard from "./components/RestaurantCard";

const page = () => {
  return (
    <main className="bg-gray-200 min-h-screen w-screen">
      <div className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <Header />

        <div className="flex gap-5 py-4 m-auto w-2/3 justofy-between items-start">
          <SearchFilterBar />
          {/* ITEMS */}
          <div className="w-5/6">
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
          </div>
          {/* ITEMS */}
        </div>
      </div>
    </main>
  );
};

export default page;
