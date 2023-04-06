import Navbar from "@/app/components/Navbar";
import Link from "next/link";

const page = () => {
  return (
    <main className="bg-gray-200 min-h-screen w-screen">
      <div className="max-w-screen-2xl m-auto bg-white">
        <Navbar />

        <div className="border-0 border-t border-solid border-gray-300 h-screen">
          <div className="py-9 m-auto w-3/5">
            {/* HEADER */}
            <div>
              <h3 className="font-bold">You are alomost done</h3>

              <div className="mt-5 flex">
                <img
                  src="https://resizer.otstatic.com/v2/photos/legacy/2/42341018.png"
                  alt=""
                  className="w-32 h-18 rounded-sm"
                />

                <div className="ml-4">
                  <h1 className="text-3xl font-bold">Areyyo</h1>

                  <div className="flex mt-3">
                    <p className="mr-6">Tues, 22, 2023</p>
                    <p className="mr-6">7:30 PM</p>
                    <p className="mr-6">3 Peaple</p>
                  </div>
                </div>
              </div>
            </div>
            {/* HEADER */}

            {/* FORM */}
            <div className="mt-10 flex gap-5 flex-wrap justify-between w-[660px]">
              <input
                type="text"
                placeholder="First Name"
                className="border-primary w-80 p-3 rounded-sm"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border-primary w-80 p-3 rounded-sm"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border-primary w-80 p-3 rounded-sm"
              />
              <input
                type="text"
                placeholder="Email Address"
                className="border-primary w-80 p-3 rounded-sm"
              />
              <input
                type="text"
                placeholder="Occasion (Optional)"
                className="border-primary w-80 p-3 rounded-sm"
              />
              <input
                type="text"
                placeholder="Requests"
                className="border-primary w-80 p-3 rounded-sm"
              />

              <button className="bg-red-600 w-full p-3 text-white font-medium rounded disabled:bg-gray-300">
                Complete Reservation
              </button>
            </div>
            {/* FORM */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
