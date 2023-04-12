import Image from "next/image";

const Header = ({ image }: { image: string }) => {
  return (
    <div className="h-[50vh] aspect-w-1 aspect-h-1">
      {/* HEADER */}
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover object-center"
      />
      {/* HEADER */}
    </div>
  );
};

export default Header;
