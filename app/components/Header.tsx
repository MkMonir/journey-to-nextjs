import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div>
      {/* =========================================== Home Page Header Start ===================================*/}
      <header className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
        <div className="flex flex-col justify-center items-center h-full container mx-auto">
          <h1 className="text-white text-3xl lg:text-5xl font-bold mb-2 text-center">
            Find your table for any occasion
          </h1>
          <SearchBar />
        </div>
      </header>
      {/* =========================================== Home Page Header End ===================================*/}
    </div>
  );
};

export default Header;
