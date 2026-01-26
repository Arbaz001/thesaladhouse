import MenuItem from "./MenuItem";
import type { MenuCategory } from "@/data/menuData";
interface MenuSectionProps {
  category: MenuCategory;
}
const MenuSection = ({
  category
}: MenuSectionProps) => {
  return <div className="mb-12">
      <h3 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary/20 text-primary">
        {category.name}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.items.map((item, index) => <MenuItem key={`${category.id}-${index}`} name={item.name} description={item.description} price={item.price} image={item.image} />)}
      </div>
    </div>;
};
export default MenuSection;