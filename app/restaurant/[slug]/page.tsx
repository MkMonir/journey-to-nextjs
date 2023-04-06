import Navbar from "@/app/components/Navbar";
import Ratting from "@/app/components/Ratting";
import Header from "./components/Header";
import RestaurantCard from "@/app/search/components/RestaurantCard";
import Title from "./components/Title";
import RestaurantNavbar from "./components/RestaurantNavbar";
import Gallary from "./components/Gallary";
import ReviewCard from "./components/ReviewCard";
import ReserveCard from "./components/ReserveCard";

const page = () => {
  return (
    <main className="bg-gray-200 min-h-screen w-screen">
      <div className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <Header />

        <div className="flex justify-between m-auto w-2/3 -mt-14">
          {/* DESCRIPTION */}
          <div className="bg-white rounded rounded-b-none  w-[70%] p-3">
            <RestaurantNavbar />
            <Title />
            <Ratting />

            {/* DESC */}
            <div className="mt-4">
              <p className="text-gray-600">
                Aroyee is fine dining in the comfort of your home. It is perfect
                for those wanting It’s a fusion of the best Thai cuisine, exotic
                ingredients from the Chittagong Hill Tracts, and a western
                dining service. Our chefs and servers come to your home and
                cater to your every need.
              </p>
            </div>
            {/* DESC */}

            <Gallary />

            {/* REVIEWS */}
            <div>
              <h3 className="font-bold text-3xl mt-10 mb-7 border-b border-solid border-0 border-gray-300 pb-5">
                What 2 people are saying
              </h3>
            </div>

            <ReviewCard />
            <ReviewCard />
            {/* REVIEWS */}
          </div>
          {/* DESCRIPTION */}

          <ReserveCard />
        </div>
      </div>
    </main>
  );
};

export default page;
