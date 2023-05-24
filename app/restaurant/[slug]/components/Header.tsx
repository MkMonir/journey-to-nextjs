'use client';

import { FavContext } from '@/app/context/FavContext';
import { useContext, useEffect, useState } from 'react';
import { Restaurant } from '../page';
import Image from 'next/image';
import { AuthContext } from '@/app/context/AuthContext';

const Header = ({ restaurant }: { restaurant: Restaurant }) => {
  const { addToFavData, favData } = useContext(FavContext);
  const { data } = useContext(AuthContext);
  const [isFav, setIsFav] = useState(false);

  const handleAddFav = () => {
    addToFavData({
      id: restaurant.id,
      main_image: restaurant.mainImage,
      name: restaurant.name,
      slug: restaurant.slug,
      email: data?.email,
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
    <div className='h-[50vh] aspect-w-1 aspect-h-1 relative'>
      {/* HEADER */}
      <Image
        src={restaurant.mainImage}
        alt=''
        width={2000}
        height={800}
        className='w-full h-full object-cover object-center'
        priority
      />

      {data && (
        <button
          className='absolute top-8 right-12 py-3 px-5 bg-white rounded-md flex gap-2 items-center hover:bg-gray-100 active:scale-95 transition-all duration-300 ease-in-out font-medium'
          onClick={handleAddFav}
        >
          {isFav ? (
            <Image
              src='/icons/bookmark-red.png'
              alt=''
              width={20}
              height={20}
              className='w-7 h-7'
            />
          ) : (
            <Image
              src='/icons/bookmark-white.png'
              alt=''
              width={20}
              height={20}
              className='w-6 h-6'
            />
          )}
          {isFav ? 'Restaurant saved' : 'Save the restaurant'}
        </button>
      )}
      {/* HEADER */}
    </div>
  );
};

export default Header;
