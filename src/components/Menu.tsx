import MenuSection from "./MenuSection";
import { menuData } from "@/data/menuData";
const Menu = () => {
  return <section id="menu" className="py-12 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {menuData.map(category => <MenuSection key={category.id} category={category} />)}
      </div>
    </section>;
};
export default Menu;