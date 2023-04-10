import RestaurantCard from "./components/RestaurantCard";
import Header from "./components/Header";
import { Cuisine, Location, PRICE, PrismaClient } from "@prisma/client";

export interface RestaurantCardType {
  id: number;
  name: string;
  price: PRICE;
  mainImage: string;
  cuisine: Cuisine;
  location: Location;
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
    },
  });

  return restaurants;
};

export default async function Home() {
  const restaurants = await fetchRestaurants();
  console.log(restaurants);

  return (
    <>
      <Header />
      {/* CARDS */}
      <div className="py-3 lg:px-36 md:px-24 px-16 mt-10 flex flex-wrap justify-center">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
      {/* CARDS */}
    </>
  );
}
