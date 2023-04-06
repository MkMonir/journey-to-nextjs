import Link from "next/link";
import Navbar from "../components/Navbar";
import Ratting from "../components/Ratting";

const page = () => {
  return (
    <main className="bg-gray-200 min-h-screen w-screen">
      <div className="max-w-screen-2xl m-auto bg-white">
        <Navbar />

        {/* HEADER */}
        <header className="p-3 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] ">
          {/* SEARCH Bar */}
          <div className="text-left py-3 m-auto flex justify-center">
            <input
              type="text"
              placeholder="State, city or town"
              className="rounded-sm text-lg mr-3 p-2 w-[450px]"
            />
            <button className="px-9 py-2 text-gray-50 bg-red-600 rounded-sm active:scale-90 transition-all duration-200">
              Let&apos;s go
            </button>
          </div>
          {/* SEARCH Bar */}
        </header>
        {/* HEADER */}

        <div className="flex gap-5 py-4 m-auto w-2/3 justofy-between items-start">
          {/* SEARCH FILTER */}
          <div className="w-1/5">
            {/* Region */}
            <div className="border-bottom pb-4">
              <h1 className="mb-2 font-medium">Region</h1>
              <p className="font-light hover:underline cursor-pointer">
                Torento
              </p>
              <p className="font-light hover:underline cursor-pointer">
                Ottawa
              </p>
              <p className="font-light hover:underline cursor-pointer">
                Montreal
              </p>
              <p className="font-light hover:underline cursor-pointer">
                Hamilton
              </p>
              <p className="font-light hover:underline cursor-pointer">
                Kingston
              </p>
              <p className="font-light hover:underline cursor-pointer">
                Niagara
              </p>
            </div>
            {/* Region */}

            {/* Cuisine */}

            <div className="border-bottom pb-4 mt-3">
              <h1 className="mb-2 font-medium">Cuisine</h1>
              <p className="font-light hover:underline cursor-pointer">
                Torento
              </p>
              <p className="font-light hover:underline cursor-pointer">
                Ottawa
              </p>
              <p className="font-light hover:underline cursor-pointer">
                Montreal
              </p>
              <p className="font-light hover:underline cursor-pointer">
                Hamilton
              </p>
              <p className="font-light hover:underline cursor-pointer">
                Kingston
              </p>
              <p className="font-light hover:underline cursor-pointer">
                Niagara
              </p>
            </div>
            {/* Cuisine */}

            {/* PRICE */}
            <div className="mt-3 pb-4">
              <div className="mb-2 font-medium">Price</div>
              <div className="flex border-primary rounded-sm">
                <button className="w-full font-light p-2 border-0 border-r border-solid border-inherit">
                  $
                </button>
                <button className="w-full font-light p-2 border-0 border-r border-solid border-inherit">
                  $$
                </button>
                <button className="w-full font-light p-2">$$$</button>
              </div>
            </div>
            {/* Cuisine */}
          </div>
          {/* SEARCH FILTER */}

          {/* ITEMS */}
          <div className="w-5/6">
            {/* RESTAURANT CARD */}
            <div className="border-bottom flex py-5">
              <img
                src="https://resizer.otstatic.com/v2/photos/legacy/2/42341018.png"
                alt=""
                className="w-44 rounded-sm"
              />

              <div className="pl-5">
                <h2 className="text-3xl">Aroyee</h2>
                <div className="flex mb-2 items-center">
                  <Ratting />
                  <p className="ml-2 text-sm">Awesome</p>
                </div>
                <div className="mb-9">
                  <div className="font-light flex gap-4">
                    <p>$$$</p>
                    <p>Mexican</p>
                    <p>Ottawa</p>
                  </div>
                </div>

                <Link href="" className="text-red-600">
                  View more information
                </Link>
              </div>
            </div>
            {/* RESTAURANT CARD */}
            {/* RESTAURANT CARD */}
            <div className="border-bottom flex py-5">
              <img
                src="https://resizer.otstatic.com/v2/photos/legacy/2/42341018.png"
                alt=""
                className="w-44 rounded-sm"
              />

              <div className="pl-5">
                <h2 className="text-3xl">Aroyee</h2>
                <div className="flex mb-2 items-center">
                  <Ratting />
                  <p className="ml-2 text-sm">Awesome</p>
                </div>
                <div className="mb-9">
                  <div className="font-light flex gap-4">
                    <p>$$$</p>
                    <p>Mexican</p>
                    <p>Ottawa</p>
                  </div>
                </div>

                <Link href="" className="text-red-600">
                  View more information
                </Link>
              </div>
            </div>
            {/* RESTAURANT CARD */}
            {/* RESTAURANT CARD */}
            <div className="border-bottom flex py-5">
              <img
                src="https://resizer.otstatic.com/v2/photos/legacy/2/42341018.png"
                alt=""
                className="w-44 rounded-sm"
              />

              <div className="pl-5">
                <h2 className="text-3xl">Aroyee</h2>
                <div className="flex mb-2 items-center">
                  <Ratting />
                  <p className="ml-2 text-sm">Awesome</p>
                </div>
                <div className="mb-9">
                  <div className="font-light flex gap-4">
                    <p>$$$</p>
                    <p>Mexican</p>
                    <p>Ottawa</p>
                  </div>
                </div>

                <Link href="" className="text-red-600">
                  View more information
                </Link>
              </div>
            </div>
            {/* RESTAURANT CARD */}
          </div>
          {/* ITEMS */}
        </div>
      </div>
    </main>
  );
};

export default page;
