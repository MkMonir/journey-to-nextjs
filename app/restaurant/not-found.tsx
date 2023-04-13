import Image from "next/image";
import errorMascot from "./../../public/icons/error.png";

const notFound = () => {
  return (
    <div className="h-[80vh] bg-gray-200 flex flex-col justify-center items-center">
      <Image src={errorMascot} alt="error" className="w-56 mb-8" />
      <div className="bg-white px-9 py-14 shadow rounded">
        <h3 className="text-3xl font-bold">Well, this is embarrassing</h3>
        <p className="text-reg font-bold">We could not find that restaurant</p>
        <p className="mt-6 text-sm font-light">Error Code: 400</p>
      </div>
    </div>
  );
};

export default notFound;
