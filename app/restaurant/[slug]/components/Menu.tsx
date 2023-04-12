import { Item } from "@prisma/client";
import MenuCard from "./MenuCard";

const Menu = ({ items }: { items: Item[] }) => {
  return (
    <section id="menu" className="bg-white mt-10">
      <div>
        <div className="pb-3 my-5 border-bottom">
          <h1 className="font-bold text-3xl">Menu</h1>
        </div>

        <div className="flex flex-wrap justify-between">
          {items.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
