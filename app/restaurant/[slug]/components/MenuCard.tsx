import { Item } from "@prisma/client";

const MenuCard = ({ item }: { item: Item }) => {
  return (
    <div className="border border-solid border-gray-200 rounded p-3 w-[49%] mb-3">
      {/* MENU CARD */}
      <div className="flex justify-between font-medium text-lg">
        <h3>{item.name}</h3>
        <p>{item.price}</p>
      </div>
      <p className="font-light mt-1 text-sm">{item.description}</p>
      {/* MENU CARD */}
    </div>
  );
};

export default MenuCard;
