const Header = ({ image }: { image: string }) => {
  return (
    <div className="h-[50vh] aspect-w-1 aspect-h-1 relative">
      {/* HEADER */}
      {/*  eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover object-center"
      />

      <button className="absolute top-8 right-12 py-3 px-5 bg-white rounded-md flex gap-2 items-center hover:bg-gray-100 active:scale-95 transition-all duration-300 ease-in-out font-medium">
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/bookmark-white.png" alt="" className="w-6 h-6" />
        Save the restaurant
      </button>
      {/* HEADER */}
    </div>
  );
};

export default Header;
