import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import Header from "./components/Header";
import Form from "./components/Form";

const page = () => {
  return (
    <main className="bg-gray-200 min-h-screen w-screen">
      <div className="max-w-screen-2xl m-auto bg-white">
        <Navbar />

        <div className="border-0 border-t border-solid border-gray-300 h-screen">
          <div className="py-9 m-auto w-3/5">
            <Header />

            <Form />
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
