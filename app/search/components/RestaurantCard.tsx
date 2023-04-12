import Price from "@/app/components/Price";
import Ratting from "@/app/components/Ratting";
import calculateReviewRatingAvg from "@/utils/calculateReviewRatingAvg";
import { Cuisine, Location, PRICE, Review } from "@prisma/client";
import Link from "next/link";

interface Restaurant {
  id: number;
  name: string;
  mainImage: string;
  price: PRICE;
  cuisine: Cuisine;
  location: Location;
  slug: string;
  reviews: Review[];
}

const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  const renderRattingText = () => {
    const rating = calculateReviewRatingAvg(restaurant.reviews);

    if (rating > 4) return "Awesome";
    else if (rating <= 4 && rating > 3) return "Good";
    else if (rating <= 3 && rating > 0) return "Average";
    else return "";
  };

  return (
    <div className="border-bottom py-5 flex">
      {/* RESTAURANT CARD */}
      <img src={restaurant.mainImage} alt="" className="w-48 h-44 rounded-md" />

      <div className="pl-5">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex mb-2 items-center">
          <Ratting reviews={restaurant.reviews} />
          <p className="ml-2 text-sm">{renderRattingText()}</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex gap-4">
            <Price price={restaurant.price} />
            <p className="capitalize">{restaurant.cuisine.name}</p>
            <p className="capitalize">{restaurant.location.name}</p>
          </div>
        </div>

        <Link href={`/restaurant/${restaurant.slug}`} className="text-red-600">
          View more information
        </Link>
      </div>
      {/* RESTAURANT CARD */}
    </div>
  );
};

export default RestaurantCard;
