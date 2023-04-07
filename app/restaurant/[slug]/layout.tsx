import Header from "./components/Header";

const RestaurantLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="flex justify-between m-auto w-2/3 -mt-14">{children}</div>
    </>
  );
};

export default RestaurantLayout;
