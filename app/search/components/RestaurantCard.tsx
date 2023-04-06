import Ratting from "@/app/components/Ratting";
import Link from "next/link";

const RestaurantCard = () => {
  return (
    <div className="border-bottom py-5 flex ">
      {/* RESTAURANT CARD */}
      <img
        src="https://resizer.otstatic.com/v2/photos/legacy/2/42341018.png"
        alt=""
        className="w-44 rounded-sm"
      />

      <div className="pl-5">
        <h2 className="text-3xl">Aroyee</h2>
        <div className="flex mb-2 items-center">
          <Ratting />
          <p className="ml-2 text-sm">Awesome</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex gap-4">
            <p>$$$</p>
            <p>Mexican</p>
            <p>Ottawa</p>
          </div>
        </div>

        <Link href="/restaurant/aroyee" className="text-red-600">
          View more information
        </Link>
      </div>
      {/* RESTAURANT CARD */}
    </div>
  );
};

export default RestaurantCard;
