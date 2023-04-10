import Link from "next/link";
import { RestaurantCardType } from "../page";
import Image from "next/image";
import Price from "./Price";
import Ratting from "./Ratting";

interface Props {
  restaurant: RestaurantCardType;
}

const RestaurantCard = ({ restaurant }: Props) => {
  return (
    <Link
      href={`/restaurant/${restaurant.slug}`}
      className="w-64 h-72 m-3 rounded-sm overflow-hidden border border-solid border-gray-400 cursor-pointer shadow-md"
    >
      <img
        src={restaurant.mainImage}
        alt=""
        className="w-full h-36 object-cover"
      />

      <div className="p-2">
        <h3 className="font-bold text-2xl mb-2">{restaurant.name}</h3>

        <div className="flex items-center">
          <Ratting />
          <p className="ml-2">77 reviews</p>
        </div>

        <div className="flex capitalize space-x-3">
          <p>{restaurant.cuisine.name}</p>
          <Price price={restaurant.price} />
          <p>{restaurant.location.name}</p>
        </div>

        <p className="mt-1 text-sm font-medium">Books 3 times today</p>
      </div>
    </Link>
  );
};

export default RestaurantCard;
