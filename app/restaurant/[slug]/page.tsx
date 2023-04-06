import Navbar from "@/app/components/Navbar";
import Ratting from "@/app/components/Ratting";
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
          <div className="bg-white rounded rounded-b-none  w-[70%] p-3">
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

            {/* Title */}
            <div className="py-6 border-bottom">
              <h1 className="font-bold text-6xl">Aroyee</h1>
            </div>
            {/* Title */}

            {/* Rattings */}

            <Ratting />

            {/* Rattings */}

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

            {/* GALLARY */}
            <div>
              <h1 className="font-medium text-3xl mt-10 mb-7 border-b border-solid border-0 border-gray-300 pb-5">
                6 photos
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://resizer.otstatic.com/v2/photos/xlarge/3/42779475.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://resizer.otstatic.com/v2/photos/xlarge/3/42779484.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://resizer.otstatic.com/v2/photos/xlarge/1/42341022.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://resizer.otstatic.com/v2/photos/xlarge/2/42341020.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://resizer.otstatic.com/v2/photos/xlarge/3/42779444.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://resizer.otstatic.com/v2/photos/xlarge/2/42779458.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* GALLARY */}

            {/* REVIEWS */}
            <div>
              <h3 className="font-bold text-3xl mt-10 mb-7 border-b border-solid border-0 border-gray-300 pb-5">
                What 2 people are saying
              </h3>

              {/* REVIEW CARD */}
              <div className="border-b border-solid border-0 border-gray-300 pb-7 mb-7">
                <div className="flex gap-5">
                  <div className="flex flex-col items-center w-[150px]">
                    <div className="rounded-full bg-teal-400 w-14 h-14 flex items-center justify-center text-white text-xl">
                      <h2>AR</h2>
                    </div>

                    <p>Ashiqur</p>
                  </div>

                  <div>
                    <div className="flex items-center">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Rating star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Rating star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Rating star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Rating star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Rating star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>

                    <p className="mt-4 text-gray-500 font-thin">
                      The food was fine but we didnt like the rude gimmick and
                      place was so noisy couldnt hear the insults anyway.. Suits
                      young demographic
                    </p>
                  </div>
                </div>
              </div>
              {/* REVIEW CARD */}
              {/* REVIEW CARD */}
              <div className="border-b border-solid border-0 border-gray-300 pb-7 mb-7">
                <div className="flex gap-5">
                  <div className="flex flex-col items-center w-[150px]">
                    <div className="rounded-full bg-teal-400 w-14 h-14 flex items-center justify-center text-white text-xl">
                      <h2>R</h2>
                    </div>

                    <p className="text-center">Riaz Uddin</p>
                  </div>

                  <div>
                    <div className="flex items-center">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Rating star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Rating star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Rating star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Rating star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Rating star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>

                    <p className="mt-4 text-gray-500 font-thin">
                      The food was fine but we didnt like the rude gimmick and
                      place was so noisy couldnt hear the insults anyway.. Suits
                      young demographic
                    </p>
                  </div>
                </div>
              </div>
              {/* REVIEW CARD */}
            </div>
            {/* REVIEWS */}
          </div>
          {/* DESCRIPTION */}

          {/* RESERVATION CARD */}
          <div className="w-[27%] relative">
            <div className="sticky top-0 w-full bg-white rounded-sm p-3 shadow-md">
              <div className="text-center border-b border-0 border-solid border-gray-300 pb-2 font-bold">
                <h4 className="mr-7 text-lg">Make a Reservation</h4>
              </div>
              <div className="my-3 flex flex-col">
                <label htmlFor="party">Party Size</label>
                <select
                  id="party"
                  className="py-3 border-b border-0 border-gray-300 border-solid font-light"
                >
                  <option value="1">1</option>
                  <option value="3">2</option>
                </select>
              </div>

              <div className="flex justify-between">
                <div className="flex flex-col w-[48%]">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    className="py-3 border-b border-0 border-gray-300 border-solid"
                  />
                </div>

                <div className="flex flex-col w-[48%]">
                  <label htmlFor="time">Time</label>
                  <select
                    id="time"
                    className="py-3 border-b border-0 border-gray-300 border-solid "
                  >
                    <option value="1">8</option>
                    <option value="3">9</option>
                  </select>
                </div>
              </div>

              <button className="p-3 w-full bg-red-400 rounded-sm text-xl text-red-50 active:scale-95 transition-all duration-200 mt-5">
                Find a team
              </button>
            </div>
          </div>
          {/* RESERVATION CARD */}
        </div>
      </div>
    </main>
  );
};

export default page;
