export interface MenuItem {
  name: string;
  description?: string;
  price: number;
  variant?: string;
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

import mexicanMushroomBowl from "@/assets/mexican-mushroom-rice-bowl.jpg";
import mexicanPeriPeriBowl from "@/assets/mexican-peri-peri-potato-rice-bowl.jpg";
import mexicanPaneerBowl from "@/assets/mexican-paneer-rice-bowl.jpg";
import mexicanPattyBowl from "@/assets/mexican-patty-rice-bowl.jpg";
import mexicanFalafelBowl from "@/assets/mexican-falafel-rice-bowl.jpg";
import falafelHummusSaladBowl from "@/assets/falafel-hummus-salad-bowl.jpg";
import paneerTikkaSaladBowl from "@/assets/roasted-chickpeas-paneer-tikka-salad-bowl.png";
import mexicanNachosSaladBowl from "@/assets/mexican-nachos-salad-bowl.jpg";

export const menuData: MenuCategory[] = [
  {
    id: "rice-bowls",
    name: "Rice Bowls",
    items: [
      { name: "Mexican Mushroom Rice Bowl", price: 399, image: mexicanMushroomBowl },
      { name: "Mexican Peri Peri Potato Rice Bowl", price: 329, image: mexicanPeriPeriBowl },
      { name: "Mexican Paneer Rice Bowl with Nachos", price: 280, image: mexicanPaneerBowl },
      { name: "Mexican Patty Rice Bowl with Nachos", price: 250, image: mexicanPattyBowl },
      { name: "Mexican Falafel Rice Bowl with Nachos", price: 250, image: mexicanFalafelBowl },
    ],
  },
  {
    id: "salad-bowls",
    name: "Salad Bowls",
    items: [
      { name: "Falafel Hummus Salad Bowl", price: 329, image: falafelHummusSaladBowl },
      { name: "Roasted Chickpeas & Paneer Tikka Salad Bowl", price: 329, image: paneerTikkaSaladBowl },
      { name: "Mexican Nachos Salad Bowl", price: 329, image: mexicanNachosSaladBowl },
    ],
  },
  {
    id: "yogurt-bowls",
    name: "Yogurt & Fruit Bowls",
    items: [
      { name: "Fresh Fruit Bowl", price: 299 },
      { name: "Chocolate Bowl", price: 329 },
      { name: "Protein Bowl", price: 549 },
      { name: "Yogurt Bowl", price: 299 },
    ],
  },
  {
    id: "wraps",
    name: "Wraps",
    items: [
      { name: "Paneer Tikka Wrap", price: 250 },
      { name: "Peri Peri Potato Wrap", price: 250 },
      { name: "Mexican Wrap (Veg)", price: 280 },
      { name: "Mexican Wrap (Non-Veg)", price: 329 },
    ],
  },
  {
    id: "sides",
    name: "Sides & Bites",
    items: [
      { name: "Peri Peri Potato Bites", price: 249 },
    ],
  },
  {
    id: "beverages",
    name: "Beverages",
    items: [
      { name: "Fresh Orange Juice", price: 149 },
      { name: "Watermelon Juice", price: 129 },
      { name: "Mixed Fruit Juice", price: 149 },
      { name: "Mango Shake", price: 169 },
      { name: "Strawberry Shake", price: 169 },
      { name: "Chocolate Shake", price: 169 },
      { name: "Cold Coffee", price: 149 },
      { name: "Iced Tea", price: 99 },
      { name: "Lemonade", price: 79 },
      { name: "Soda", price: 40 },
      { name: "Mojito", price: 129 },
      { name: "Blue Lagoon", price: 149 },
      { name: "Virgin Pina Colada", price: 169 },
      { name: "Oreo Shake", price: 199 },
      { name: "Brownie Shake", price: 249 },
    ],
  },
  {
    id: "dips",
    name: "Dips & Extras",
    items: [
      { name: "Guacamole", price: 129 },
      { name: "Salsa", price: 99 },
      { name: "Sour Cream", price: 99 },
      { name: "Tzatziki", price: 99 },
      { name: "Corn Salsa", price: 99 },
      { name: "Hummus", price: 129 },
      { name: "Cheese Dip", price: 129 },
      { name: "Jalapeno Dip", price: 99 },
      { name: "Guacamole (Large)", price: 299 },
      { name: "Hummus (Large)", price: 299 },
      { name: "Salsa (Large)", price: 199 },
      { name: "Party Pack (All Dips)", price: 599 },
    ],
  },
];
