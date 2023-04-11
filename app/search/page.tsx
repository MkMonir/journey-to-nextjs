import Header from "./components/Header";
import SearchFilterBar from "./components/SearchFilterBar";
import RestaurantCard from "./components/RestaurantCard";
import { PRICE, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface SearchParams {
  city?: string;
  cuisine?: string;
  price?: PRICE;
}

const fetchRestaurants = (searchParams: SearchParams) => {
  const where: any = {};

  if (searchParams.city) {
    const location = {
      name: {
        equals: searchParams.city.toLowerCase(),
      },
    };
    where.location = location;
  }

  if (searchParams.cuisine) {
    const cuisine = {
      name: {
        equals: searchParams.cuisine.toLowerCase(),
      },
    };
    where.cuisine = cuisine;
  }

  if (searchParams.price) {
    const price = {
      equals: searchParams.price,
    };
    where.price = price;
  }

  const select = {
    id: true,
    name: true,
    mainImage: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  };

  // if (!city) return prisma.restaurant.findMany({ select });

  return prisma.restaurant.findMany({
    where,
    select,
  });
};

const fetchLocations = () => {
  return prisma.location.findMany();
};
const fetchCuisines = () => {
  return prisma.cuisine.findMany();
};

const page = async ({ searchParams }: { searchParams: SearchParams }) => {
  const restaurants = await fetchRestaurants(searchParams);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();
  return (
    <>
      <Header />
      <div className="flex gap-5 py-4 m-auto w-2/3 justify-between items-start min-h-[85vh]">
        <SearchFilterBar
          locations={locations}
          cuisines={cuisines}
          searchParams={searchParams}
        />
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
