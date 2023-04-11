import Header from "./components/Header";
import SearchFilterBar from "./components/SearchFilterBar";
import RestaurantCard from "./components/RestaurantCard";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchRestaurants = (city: string) => {
  const select = {
    id: true,
    name: true,
    mainImage: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  };

  if (!city) return prisma.restaurant.findMany({ select });

  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLowerCase(),
        },
      },
    },
    select,
  });
};

const page = async ({ searchParams }: { searchParams: { city: string } }) => {
  const restaurants = await fetchRestaurants(searchParams.city);
  return (
    <>
      <Header />
      <div className="flex gap-5 py-4 m-auto w-2/3 justify-between items-start">
        <SearchFilterBar />
        {/* ITEMS */}
        <div className="w-5/6">
          {restaurants.length ? (
            <>
              {restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </>
          ) : (
            <p className="text-4xl font-medium text-center">
              Sorry , We found no restaurants in this area
            </p>
          )}
        </div>
        {/* ITEMS */}
      </div>
    </>
  );
};

export default page;
