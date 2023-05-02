import RestaurantCard from "./components/RestaurantCard";
import Header from "./components/Header";
import {
  Cuisine,
  Location,
  PRICE,
  PrismaClient,
  Review,
  Booking,
} from "@prisma/client";

export interface RestaurantCardType {
  id: number;
  name: string;
  price: PRICE;
  mainImage: string;
  cuisine: Cuisine;
  location: Location;
  slug: string;
  reviews: Review[];
  bookings: Booking[];
}

const prisma = new PrismaClient();

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      mainImage: true,
      cuisine: true,
      location: true,
      slug: true,
      reviews: true,
      bookings: true,
    },
  });

  return restaurants;
};

export default async function Home() {
  const restaurants = await fetchRestaurants();

  return (
    <>
      <Header />
      {/* CARDS */}
      <div className="py-3 container mx-auto mt-10 flex flex-wrap justify-center">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
      {/* CARDS */}
    </>
  );
}
