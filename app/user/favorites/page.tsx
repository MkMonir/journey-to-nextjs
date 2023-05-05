import Image from "next/image";
import bookmark from "./../../../public/icons/bookmark.png";

const page = () => {
  return (
    <div className="bg-white rounded p-5 w-[80%] shadow-sm">
      <div className="pb-5 mb-5 border-bottom">
        <h4 className="text-2xl font-medium">Saved Restaurants</h4>
      </div>

      <div>
        <div className="flex gap-4 items-center">
          <img
            src="https://images.otstatic.com/prod1/31924439/1/medium.jpg"
            alt=""
            className="w-20 h-20 rounded-md"
          />

          <div className="space-y-2 w-[65%]">
            <h4 className="font-medium">Fugazzi Bar & Dining Room</h4>

            {/* RESTAURANT RATTING */}

            <button className="flex gap-1 text-sm">
              <Image src={bookmark} alt="" className="w-5 h-5" />
              <p>Remove from saved restaurants</p>
            </button>
          </div>

          <button className="block py-2 px-5 bg-teal-500 text-teal-50 text-sm hover:bg-teal-600 active:scale-95 transition-all duration-300 ease-in-out rounded-md">
            Reserve now
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
