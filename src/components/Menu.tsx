import MenuSection from "./MenuSection";
import { menuData } from "@/data/menuData";

const Menu = () => {
  return (
    <section id="menu" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our range of healthy and delicious options, prepared fresh daily
          </p>
        </div>

        {menuData.map((category) => (
          <MenuSection key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Menu;
