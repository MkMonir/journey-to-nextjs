import Card from "./components/RestaurantCard";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
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
    </>
  );
}
