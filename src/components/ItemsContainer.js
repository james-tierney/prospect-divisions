import Item from "./Item";
import { MENU, CONTACT, FOLLOW } from "./Menus";
import { Icons } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-3  gap-6 sm:px-8 bg-black text-white px-5 py-16">
      <Item Links={MENU} title="MENU" />
      <Item Links={CONTACT} title="CONTACT US" />
      <Item Links={FOLLOW} title="FOLLOW US" />
    </div>
  );
};

export default ItemsContainer;
