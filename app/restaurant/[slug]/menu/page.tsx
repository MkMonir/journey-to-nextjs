import Header from "@/app/components/Header";
import RestaurantNavbar from "../components/RestaurantNavbar";
import MenuCard from "../components/MenuCard";

const page = () => {
  return (
    <>
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
    </>
  );
};

export default page;
