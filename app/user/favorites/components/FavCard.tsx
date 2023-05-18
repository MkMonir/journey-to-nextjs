"use client";

import Image from "next/image";
import bookmark from "./../../../../public/icons/bookmark.png";
import { useContext } from "react";
import { FavContext } from "@/app/context/FavContext";
import Link from "next/link";
const FavCard = () => {
  const { favData, addToFavData } = useContext(FavContext);

  return (
    <>
      <div className="pb-5 mb-5 border-bottom">
        <h4 className="text-2xl font-medium">Saved Restaurants</h4>
      </div>

      <div className="space-y-4">
        {favData.length &&
          favData.map((data) => (
            <div className="flex gap-4 items-center" key={data.id}>
              <Image
                src={data.main_image}
                alt=""
                width={200}
                height={200}
                className="w-20 h-20 rounded-md object-cover"
              />

              <div className="space-y-2 w-[65%]">
                <h4 className="font-medium">{data.name}</h4>

                {/* RESTAURANT RATTING */}

                <button
                  className="flex gap-1 text-sm"
                  onClick={() => addToFavData(data)}
                >
                  <Image src={bookmark} alt="" className="w-5 h-5" />
                  <p>Remove from saved restaurants</p>
                </button>
              </div>

              <Link
                href={`/restaurant/${data.slug}`}
                className="block py-2 px-5 bg-teal-500 text-teal-50 text-sm hover:bg-teal-600 active:scale-95 transition-all duration-300 ease-in-out rounded-md"
              >
                Reserve now
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default FavCard;
