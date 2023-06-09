'use client';

import Link from 'next/link';
import Modal from './Modal';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import useAuth from '@/hooks/useAuth';
import Image from 'next/image';
import Header from './Header';
import { BookingContext } from '../context/BookingContext';
import { Spinner } from './Loading';
import Alert from './Alert';

const Navbar = () => {
  const { data } = useContext(AuthContext);
  const { signOut } = useAuth();
  const [profileOpen, setProfileOpen] = useState(false);
  const [reserveOpen, setReserveOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const reserveRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const { bookings, cancelBooking, error, isLoading, fetchBookings } =
    useContext(BookingContext);

  useEffect(() => {
    fetchBookings();
  }, [data]);

  const isValidDate = () => {
    return bookings
      .filter((booking) => {
        const compareDate = new Date(booking.booking_time);
        const presentDate = new Date();

        if (compareDate < presentDate) {
          return false;
        } else if (compareDate > presentDate) {
          return true;
        } else {
          return true;
        }
      })
      .filter((booking) => booking.booker_email === data?.email);
  };

  // Body CLick
  useEffect(() => {
    const handler = (e: any) => {
      if (!profileRef.current || !reserveRef.current || !searchRef.current) {
        return;
      }
      if (!profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }

      if (!reserveRef.current.contains(e.target)) {
        setReserveOpen(false);
      }

      if (!searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  // Profile Items Array
  const profileItems = [
    {
      text: 'My Profile',
      link: '/user/dining-dashboard',
    },
    {
      text: 'My Dining History',
      link: '/user/dining-dashboard',
    },
    {
      text: ' My Saved Restaurants',
      link: '/user/favorites',
    },
  ];

  // Search Bar Modal CLose
  useEffect(() => {
    const current = searchRef.current;

    const child = current?.getElementsByTagName('form')[0];
    const input = current?.getElementsByTagName('input')[0];

    child?.addEventListener('submit', () => {
      if (input?.value !== '') {
        setSearchOpen(false);
      }
    });
  }, []);

  return (
    <nav className='bg-white py-3 px-5 flex justify-between items-center container mx-auto'>
      {/*================================================= LOGO ===================================================*/}
      <Link
        href='/'
        className='font-bold text-gray-700 text-2xl md:text-3xl select-none'
      >
        AddaKhana
      </Link>
      {/*================================================= LOGO END ===================================================*/}

      <div className='flex items-center gap-4'>
        {data ? (
          <div className='flex items-center gap-4'>
            {/*================================================= Profile START ===================================================*/}
            <div className='relative' ref={profileRef}>
              {/* Profile Button Start */}
              <button
                className='w-10 h-10 bg-gray-100 rounded-full grid place-items-center border-primary'
                onClick={() => {
                  setProfileOpen((prev) => !prev);
                  setReserveOpen(false);
                }}
              >
                <Image
                  src='/icons/avatar.png'
                  alt=''
                  width={20}
                  height={20}
                  className='w-8 h-8'
                />
              </button>
              {/* Profile Button ENd */}

              {/* <!-- Dropdown menu start--> */}
              <div
                className={`z-10 absolute top-12 right-0 bg-white divide-y divide-solid divide-x-0 divide-gray-100 rounded-lg shadow w-56 border-primary ${
                  profileOpen ? 'block' : 'hidden'
                }`}
              >
                <div className='px-4 py-3 text-sm text-gray-900'>
                  <div className='truncate'>Hello, {data.first_name}!</div>
                  <div className='font-medium truncate'>{data.email}</div>
                </div>
                <ul className='py-2 text-sm text-gray-700'>
                  {profileItems?.map((item, i) => (
                    <li key={i} onClick={() => setProfileOpen(false)}>
                      <Link
                        href={item.link}
                        className='block px-4 py-2 hover:bg-gray-100'
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className='py-2'>
                  <li
                    className='block px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500'
                    onClick={() => {
                      signOut();
                      setProfileOpen(false);
                    }}
                  >
                    Sign out
                  </li>
                </div>
              </div>
              {/* <!-- Dropdown menu  End--> */}
            </div>
            {/*================================================= Profile END ===================================================*/}

            {/*=============================================== Reservations Start ==================================================*/}
            <div className='relative' ref={reserveRef}>
              <button
                className='block'
                onClick={() => {
                  setReserveOpen((prev) => !prev);
                  setProfileOpen(false);
                }}
              >
                <Image
                  src='/icons/calender.png'
                  alt=''
                  width={20}
                  height={20}
                  className='w-7 h-7'
                />
              </button>
              <div
                className={`z-10 absolute top-12 -right-2 bg-white divide-y divide-solid divide-x-0 divide-gray-100 rounded-lg shadow w-96 p-3 text-gray-800 border-primary ${
                  reserveOpen ? 'block' : 'hidden'
                }`}
                ref={reserveRef}
              >
                <h4 className='font-medium pb-2 text-xl'>
                  Upcoming reservations
                </h4>

                {/* Reservations Start */}
                {isLoading ? (
                  <div className='grid w-full place-items-center'>
                    <Spinner />
                  </div>
                ) : (
                  <div className='flex flex-col gap-5 divide-y divide-solid divide-x-0 divide-gray-100 py-3 max-h-[60vh] overflow-y-scroll'>
                    {error && !data ? (
                      <Alert text={error} />
                    ) : (
                      <>
                        {bookings.length !== 0 && isValidDate().length > 0 ? (
                          <>
                            {isValidDate().map((booking, i) => (
                              <ul className='space-y-1 pt-3' key={i}>
                                <li className='flex gap-3'>
                                  <div className='bg-gray-800 w-10 h-10 rounded-full grid place-items-center'>
                                    <Image
                                      src='/icons/exterior.png'
                                      alt=''
                                      width={20}
                                      height={20}
                                      className='w-6 h-6'
                                    />
                                  </div>

                                  <ul className='space-y-1'>
                                    <li className='truncate font-medium'>
                                      <Link
                                        href={`/restaurant/${booking.restaurant.slug}`}
                                        onClick={() => setReserveOpen(false)}
                                      >
                                        {booking.restaurant.name}
                                      </Link>
                                    </li>
                                    <li className='flex gap-1'>
                                      <Image
                                        src='/icons/avatar.png'
                                        alt=''
                                        width={20}
                                        height={20}
                                        className='w-6 h-6'
                                      />
                                      <p>
                                        Table for {booking.number_of_people}{' '}
                                        {booking.number_of_people === 1
                                          ? 'person'
                                          : 'people'}
                                      </p>
                                    </li>
                                    <li className='flex gap-1'>
                                      <Image
                                        src='/icons/calender.png'
                                        width={20}
                                        height={20}
                                        alt=''
                                      />

                                      <p>
                                        {new Date(booking.booking_time)
                                          .toUTCString()
                                          .split(' ')
                                          .slice(0, -1)
                                          .join(' ')}{' '}
                                        at
                                      </p>
                                    </li>

                                    {/* <!-- Cancel Reserve BTN Start --> */}
                                    <button
                                      className='text-red-600 pt-2'
                                      onClick={() => cancelBooking(booking.id)}
                                    >
                                      Cancel
                                    </button>
                                    {/* <!-- Cancel Reserve BTN End --> */}
                                  </ul>
                                </li>
                              </ul>
                            ))}
                          </>
                        ) : (
                          <div>
                            <h4>You have no upcoming reservations</h4>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                )}
                {/* Reservations END */}
                <Link
                  href='/user/dining-dashboard'
                  className='block text-center mt-2 py-2 w-full  text-lg font-medium'
                  onClick={() => setReserveOpen(false)}
                >
                  See All Bookings
                </Link>
              </div>
            </div>
            {/*================================================= Reservations END ===================================================*/}
          </div>
        ) : (
          <div className='flex gap-2'>
            <Modal isSignin={false} />
            <Modal isSignin={true} />
          </div>
        )}

        {/*========================================================= Search Bar Start ====================================================*/}
        <div>
          <button
            className='pl-3 border-l border-0 border-gray-300 border-solid'
            onClick={() => {
              setSearchOpen(true);
              setReserveOpen(false);
              setProfileOpen(false);
            }}
          >
            <Image
              src='/icons/search.png'
              alt=''
              width={20}
              height={20}
              className='w-7 h-7'
            />
          </button>

          <div
            className={`fixed inset-0 w-full h-full bg-gray-600 bg-opacity-60 z-50 ${
              searchOpen ? 'grid' : 'hidden'
            } place-items-center`}
          >
            <div className='w-3/5 relative' ref={searchRef}>
              <button
                className='absolute right-3 top-3'
                onClick={() => setSearchOpen(false)}
              >
                <Image
                  src='/icons/close.png'
                  alt=''
                  width={20}
                  height={20}
                  className='w-7 h-7'
                />
              </button>
              <Header />
            </div>
          </div>
        </div>
        {/*========================================================= Search Bar End ====================================================*/}
      </div>
    </nav>
  );
};

export default Navbar;
