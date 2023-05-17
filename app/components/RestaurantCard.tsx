import Link from "next/link";
import { RestaurantCardType } from "../page";
import Price from "./Price";
import Ratting from "./Ratting";

interface Props {
  restaurant: RestaurantCardType;
}

const RestaurantCard = ({ restaurant }: Props) => {
  return (
    <Link
      href={`/restaurant/${restaurant.slug}`}
      className="w-64 h-82 m-3 rounded-sm overflow-hidden border border-solid border-gray-400 cursor-pointer shadow-md"
    >
      <img
        src={restaurant.mainImage}
        alt=""
        className="w-full h-44 object-cover object-center"
      />

      <div className="p-2">
        <h3 className="font-bold text-2xl mb-2">{restaurant.name}</h3>

        <div className="flex items-center">
          <Ratting reviews={restaurant.reviews} />
        </div>

        <div className="flex capitalize space-x-3">
          <p>{restaurant.cuisine.name}</p>
          <Price price={restaurant.price} />
          <p>{restaurant.location.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
