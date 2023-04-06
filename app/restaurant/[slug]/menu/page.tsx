import Navbar from "@/app/components/Navbar";
import Link from "next/link";

const page = () => {
  return (
    <main className="bg-gray-200 min-h-screen w-screen">
      <div className="max-w-screen-2xl m-auto bg-white">
        <Navbar />

        {/* HEADER */}
        <div className="h-[50vh] aspect-w-1 aspect-h-1">
          <img
            src="https://resizer.otstatic.com/v2/photos/wide-huge/2/42341018.png"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        {/* HEADER */}

        <div className="flex justify-between m-auto w-2/3 -mt-14">
          {/* DESCRIPTION */}
          <div className="bg-white rounded rounded-b-none w-full p-3">
            {/* RESTAURANT NAVBAR */}
            <nav className="flex font-medium border-bottom">
              <Link
                href="/"
                className="p-4 pt-1 border-b-2 border-0 border-solid border-red-500 text-red-500 hover:text-red-700"
              >
                Overview
              </Link>
              <Link href="/" className="p-4 pt-1">
                Menu
              </Link>
            </nav>
            {/* RESTAURANT NAVBAR */}

            {/* MENU */}
            <div className="bg-white mt-5">
              <div>
                <div className="mt-4 pb-1 mb-1">
                  <h1 className="font-bold text-4xl">Menu</h1>
                </div>

                <div className="flex flex-wrap justify-between">
                  {/* MENU CARD */}
                  <div className="border border-solid border-gray-200 rounded p-3 w-[49%] mb-3">
                    <div className="flex justify-between font-medium text-lg">
                      <h3>Cheesed off Karen</h3>
                      <p>$20</p>
                    </div>
                    <p className="font-light mt-1 text-sm">
                      Double Egg, Halloumi and Fried Halloumi Chips on a Tomato
                      Relished Milk Bun
                    </p>
                  </div>
                  {/* MENU CARD */}
                  {/* MENU CARD */}
                  <div className="border border-solid border-gray-200 rounded p-3 w-[49%] mb-3">
                    <div className="flex justify-between font-medium text-lg">
                      <h3>Cheesed off Karen</h3>
                      <p>$20</p>
                    </div>
                    <p className="font-light mt-1 text-sm">
                      Double Egg, Halloumi and Fried Halloumi Chips on a Tomato
                      Relished Milk Bun
                    </p>
                  </div>
                  {/* MENU CARD */}
                  {/* MENU CARD */}
                  <div className="border border-solid border-gray-200 rounded p-3 w-[49%] mb-3">
                    <div className="flex justify-between font-medium text-lg">
                      <h3>Cheesed off Karen</h3>
                      <p>$20</p>
                    </div>
                    <p className="font-light mt-1 text-sm">
                      Double Egg, Halloumi and Fried Halloumi Chips on a Tomato
                      Relished Milk Bun
                    </p>
                  </div>
                  {/* MENU CARD */}
                </div>
              </div>
            </div>
            {/* MENU */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
