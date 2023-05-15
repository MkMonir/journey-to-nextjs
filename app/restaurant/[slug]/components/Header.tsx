"use client";

import { FavContext } from "@/app/context/FavContext";
import { Restaurant } from "@prisma/client";
import { useContext, useEffect, useState } from "react";

const Header = ({ restaurant }: { restaurant: Restaurant }) => {
  const { addToFavData, favData } = useContext(FavContext);
  const [isFav, setIsFav] = useState(false);

  const handleAddFav = () => {
    addToFavData({
      id: restaurant.id,
      main_image: restaurant.mainImage,
      name: restaurant.name,
      slug: restaurant.slug,
    });
  };

  useEffect(() => {
    if (favData) {
      const existed_item = favData.findIndex(
        (item) => item?.id === restaurant?.id
      );

      if (existed_item !== -1) {
        return setIsFav(true);
      } else {
        setIsFav(false);
      }
    }
  }, [favData, restaurant.id]);

  return (
    <div className="h-[50vh] aspect-w-1 aspect-h-1 relative">
      {/* HEADER */}
      {/*  eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={restaurant.mainImage}
        alt=""
        className="w-full h-full object-cover object-center"
      />

      <button
        className="absolute top-8 right-12 py-3 px-5 bg-white rounded-md flex gap-2 items-center hover:bg-gray-100 active:scale-95 transition-all duration-300 ease-in-out font-medium"
        onClick={handleAddFav}
      >
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        {isFav ? (
          <img src="/icons/bookmark-red.png" alt="" className="w-7 h-7" />
        ) : (
          <img src="/icons/bookmark-white.png" alt="" className="w-6 h-6" />
        )}
        {isFav ? "Restaurant saved" : "Save the restaurant"}
      </button>
      {/* HEADER */}
    </div>
  );
};

export default Header;
