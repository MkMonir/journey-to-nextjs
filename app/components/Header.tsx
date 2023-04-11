import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div>
      {/* Header */}
      <header className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-white text-3xl lg:text-5xl font-bold mb-2">
            Find your table for any occasion
          </h1>

          <SearchBar />
        </div>
      </header>
      {/* Header */}
    </div>
  );
};

export default Header;
