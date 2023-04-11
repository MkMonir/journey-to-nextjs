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

const fetchLocations = () => {
  return prisma.location.findMany();
};
const fetchCuisines = () => {
  return prisma.cuisine.findMany();
};

const page = async ({ searchParams }: { searchParams: { city: string } }) => {
  const restaurants = await fetchRestaurants(searchParams.city);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();
  return (
    <>
      <Header />
      <div className="flex gap-5 py-4 m-auto w-2/3 justify-between items-start">
        <SearchFilterBar locations={locations} cuisines={cuisines} />
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
