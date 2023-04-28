import Header from './components/Header';
import Form from './components/Form';
import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';

const prisma = new PrismaClient();

const fetchRestaurantBySlug = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
  });

  if (!restaurant) {
    notFound();
  }
  return restaurant;
};

const page = async ({
  params,
  searchParams,
}: {
  params: { name: string };
  searchParams: { date: string; partySize: string };
}) => {
  const restaurant = await fetchRestaurantBySlug(params.name);

  return (
    <div className="border-0 border-t border-solid border-gray-300 h-screen">
      <div className="py-9 m-auto w-3/5">
        <Header
          image={restaurant.mainImage}
          name={restaurant.name}
          date={searchParams.date}
          partySize={searchParams.partySize}
        />
        <Form partySize={searchParams.partySize} date={searchParams.date} slug={params.name} />
      </div>
    </div>
  );
};

export default page;
