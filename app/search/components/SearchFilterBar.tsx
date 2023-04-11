import { Cuisine, Location } from "@prisma/client";

const SearchFilterBar = ({
  locations,
  cuisines,
}: {
  locations: Location[];
  cuisines: Cuisine[];
}) => {
  return (
    <div className="w-1/5">
      {/* SEARCH FILTER */}
      {/* Region */}
      <div className="border-bottom pb-4">
        <h1 className="mb-2 font-medium">Region</h1>
        {locations.map((location) => (
          <p
            className="font-light hover:underline cursor-pointer capitalize"
            key={location.id}
          >
            {location.name}
          </p>
        ))}
      </div>
      {/* Region */}

      {/* Cuisine */}

      <div className="border-bottom pb-4 mt-3">
        <h1 className="mb-2 font-medium">Cuisine</h1>
        {cuisines.map((cuisine) => (
          <p
            className="font-light hover:underline cursor-pointer capitalize"
            key={cuisine.id}
          >
            {cuisine.name}
          </p>
        ))}
      </div>
      {/* Cuisine */}

      {/* PRICE */}
      <div className="mt-3 pb-4 font-medium">
        <div className="mb-2 font-medium">Price</div>

        <div className="flex border-primary rounded-sm">
          <button className="w-full p-2 border-0 border-r border-solid border-inherit">
            $
          </button>
          <button className="w-full p-2 border-0 border-r border-solid border-inherit">
            $$
          </button>
          <button className="w-full p-2">$$$</button>
        </div>
      </div>
      {/* Cuisine */}
      {/* SEARCH FILTER */}
    </div>
  );
};

export default SearchFilterBar;
