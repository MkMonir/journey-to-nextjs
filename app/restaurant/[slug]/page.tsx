import Ratting from "@/app/components/Ratting";
import Title from "./components/Title";
import RestaurantNavbar from "./components/RestaurantNavbar";
import Gallary from "./components/Gallary";
import ReviewCard from "./components/ReviewCard";
import ReserveCard from "./components/ReserveCard";
import Menu from "./components/Menu";
import { Booking, Item, PrismaClient, Review } from "@prisma/client";
import Header from "./components/Header";
import { notFound } from "next/navigation";
import RatingModal from "./components/RatingModal";

const prisma = new PrismaClient();

export interface Restaurant {
  id: number;
  name: string;
  description: string;
  images: string[];
  slug: string;
  mainImage: string;
  items: Item[];
  reviews: Review[];
  open_time: string;
  close_time: string;
  bookings: Booking[];
}

const fetchRestaurant = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      description: true,
      images: true,
      slug: true,
      mainImage: true,
      items: true,
      reviews: true,
      open_time: true,
      close_time: true,
      bookings: true,
    },
  });

  if (!restaurant) notFound();

  return restaurant;
};

const page = async ({ params }: { params: { slug: string } }) => {
  const restaurant = await fetchRestaurant(params.slug);

  return (
    <>
      <Header restaurant={restaurant} />
      <div className="flex flex-col-reverse gap-5 lg:flex-row justify-between m-auto w-2/3 -mt-14">
        {/* DESCRIPTION */}
        <section
          id="overview"
          className="bg-white rounded rounded-b-none w-full lg:w-[70%] p-3 pt-0 mb-10"
        >
          <RestaurantNavbar />
          <Title name={restaurant.name} />
          <Ratting reviews={restaurant.reviews} />

          {/* DESC */}
          <div className="mt-4">
            <p className="text-gray-600">{restaurant.description}</p>
          </div>
          {/* DESC */}

          <Gallary images={restaurant.images} />

          <Menu items={restaurant.items} />

          {/* REVIEWS */}
          <section
            id="review"
            className="flex items-center justify-between border-bottom mb-7 pb-5 mt-10"
          >
            {restaurant.reviews.length ? (
              <h3 className="font-bold text-3xl">
                What {restaurant.reviews.length}{" "}
                {restaurant.reviews.length === 1 ? "Person" : "people"} are
                saying
              </h3>
            ) : (
              <h3 className="font-bold text-3xl">
                Be the first to review this restaurant
              </h3>
            )}

            <div>
              <RatingModal
                restaurantId={restaurant.id}
                restaurantSlug={restaurant.slug}
                bookings={restaurant.bookings}
              />
            </div>
          </section>

          <ReviewCard
            restaurant_id={restaurant.id}
            restaurantName={restaurant.name}
          />

          {/* REVIEWS */}
        </section>
        {/* DESCRIPTION */}

        <ReserveCard
          openTime={restaurant.open_time}
          closeTime={restaurant.close_time}
          slug={restaurant.slug}
        />
      </div>
    </>
  );
};

export default page;
