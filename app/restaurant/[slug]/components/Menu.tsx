import MenuCard from "./MenuCard";

const Menu = () => {
  return (
    <section id="menu" className="bg-white mt-10">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-3xl">Menu</h1>
        </div>

        <div className="flex flex-wrap justify-between">
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
      </div>
    </section>
  );
};

export default Menu;
