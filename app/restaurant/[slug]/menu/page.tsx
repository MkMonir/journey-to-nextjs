import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import RestaurantNavbar from "../components/RestaurantNavbar";
import MenuCard from "../components/MenuCard";

const page = () => {
  return (
    <main className="bg-gray-200 min-h-screen w-screen">
      <div className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <Header />

        <div className="flex justify-between m-auto w-2/3 -mt-14">
          {/* DESCRIPTION */}
          <div className="bg-white rounded rounded-b-none w-full p-3">
            <RestaurantNavbar />

            {/* MENU */}
            <div className="bg-white mt-5">
              <div>
                <div className="mt-4 pb-1 mb-1">
                  <h1 className="font-bold text-4xl">Menu</h1>
                </div>

                <div className="flex flex-wrap justify-between">
                  <MenuCard />
                  <MenuCard />
                  <MenuCard />
                  <MenuCard />
                </div>
              </div>
            </div>
            {/* MENU */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
