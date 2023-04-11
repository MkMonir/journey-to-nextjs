import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link";
import { SearchParams } from "../page";

const SearchFilterBar = ({
  locations,
  cuisines,
  searchParams,
}: {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: SearchParams;
}) => {
  const prices = [
    { price: PRICE.CHEAP, label: "$" },
    { price: PRICE.REGULAR, label: "$$" },
    { price: PRICE.EXPENSIVE, label: "$$$" },
  ];

  return (
    <div className="w-1/5">
      {/* SEARCH FILTER */}
      {/* Region */}
      <div className="border-bottom pb-4">
        <h1 className="mb-2 font-medium">Region</h1>
        {locations.map((location) => (
          <Link
            href={{
              pathname: "/search",
              query: { ...searchParams, city: location.name },
            }}
            className="font-light hover:underline cursor-pointer capitalize block"
            key={location.id}
          >
            {location.name}
          </Link>
        ))}
      </div>
      {/* Region */}

      {/* Cuisine */}

      <div className="border-bottom pb-4 mt-3">
        <h1 className="mb-2 font-medium">Cuisine</h1>
        {cuisines.map((cuisine) => (
          <Link
            href={{
              pathname: "/search",
              query: { ...searchParams, cuisine: cuisine.name },
            }}
            className="font-light hover:underline cursor-pointer capitalize block"
            key={cuisine.id}
          >
            {cuisine.name}
          </Link>
        ))}
      </div>
      {/* Cuisine */}

      {/* PRICE */}
      <div className="mt-3 pb-4 font-medium">
        <div className="mb-2 font-medium">Price</div>

        <div className="flex border-primary rounded-sm">
          {prices.map(({ price, label }, i) => (
            <Link
              href={{
                pathname: "/search",
                query: { ...searchParams, price },
              }}
              className="w-full p-2 border-0 border-r last:border-r-0 border-solid border-inherit text-center"
              key={i}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
      {/* Cuisine */}
      {/* SEARCH FILTER */}
    </div>
  );
};

export default SearchFilterBar;
