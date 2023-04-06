import Header from "./components/Header";
import SearchFilterBar from "./components/SearchFilterBar";
import RestaurantCard from "./components/RestaurantCard";

const page = () => {
  return (
    <>
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
    </>
  );
};

export default page;
