const Header = () => {
  return (
    <header className="p-3 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] ">
      {/* HEADER */}
      {/* SEARCH Bar */}
      <div className="text-left py-3 m-auto flex justify-center">
        <input
          type="text"
          placeholder="State, city or town"
          className="rounded-sm text-lg mr-3 p-2 w-[450px]"
        />
        <button className="px-9 py-2 text-gray-50 bg-red-600 rounded-sm active:scale-90 transition-all duration-200">
          Let&apos;s go
        </button>
      </div>
      {/* SEARCH Bar */}
      {/* HEADER */}
    </header>
  );
};

export default Header;
