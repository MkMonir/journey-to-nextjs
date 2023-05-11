import Ratting from "@/app/components/Ratting";
import Title from "./components/Title";
import RestaurantNavbar from "./components/RestaurantNavbar";
import Gallary from "./components/Gallary";
import ReviewCard from "./components/ReviewCard";
import ReserveCard from "./components/ReserveCard";
import Menu from "./components/Menu";
import { Item, PrismaClient, Review } from "@prisma/client";
import Header from "./components/Header";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

interface Restaurant {
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
    },
  });

  if (!restaurant) notFound();

  return restaurant;
};

const page = async ({ params }: { params: { slug: string } }) => {
  let restaurant: any;
  if (params.slug) {
    restaurant = await fetchRestaurant(params.slug);
  }

  return (
    <>
      <Header restaurant={restaurant} />
      <div className="flex flex-col-reverse gap-5 lg:flex-row justify-between m-auto w-2/3 -mt-14">
        {/* DESCRIPTION */}
        <section
          id="overview"
          className="bg-white rounded rounded-b-none w-full lg:w-[70%] p-3 pt-0"
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
          <section id="review">
            <h3 className="font-bold text-3xl mt-10 mb-7 border-b border-solid border-0 border-gray-300 pb-5">
              What {restaurant.reviews.length}{" "}
              {restaurant.reviews.length === 1 ? "Person" : "people"} are saying
            </h3>
          </section>

          {restaurant.reviews.map((review: any) => (
            <ReviewCard
              review={review}
              key={review.id}
              reviews={restaurant.reviews}
            />
          ))}
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
