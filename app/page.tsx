import Navbar from "./components/Navbar";
import Card from "./components/RestaurantCard";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="bg-gray-200 min-h-screen w-screen">
      <div className="max-w-screen-2xl m-auto bg-white">
        <Navbar />

        <Header />

        {/* CARDS */}
        <div className="py-3 lg:px-36 md:px-24 px-16 mt-10 flex flex-wrap justify-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        {/* CARDS */}
      </div>
    </main>
  );
}
