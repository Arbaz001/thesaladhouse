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
import orangeJuice from "@/assets/orange-juice.jpeg";
import bananaMilkshake from "@/assets/banana-milkshake.jpeg";
import appleJuice from "@/assets/apple-juice.jpeg";
import mexicanSalsa from "@/assets/mexican-salsa.jpeg";
import tzatziki from "@/assets/tzatziki.jpeg";
import sourCream from "@/assets/sour-cream.jpeg";
import guacamole from "@/assets/guacamole.jpeg";

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
      { 
        name: "Fresh Orange Juice (Zero added Sugar)", 
        description: "Freshly squeezed Valencia oranges, made to order with zero added sugar. Just the natural sweetness and slight tang of oranges, as they are. (300 Ml)",
        price: 249, 
        image: orangeJuice 
      },
      { 
        name: "Banana Milkshake (Zero added Sugar)", 
        description: "Bananas blended with toned milk, a very small hint of vanilla essence, and a light dusting of cinnamon. Naturally sweet, thick, creamy, and super healthy — with absolutely no added sugar (300 Ml).",
        price: 149, 
        image: bananaMilkshake 
      },
      { 
        name: "Apple Juice – Zero Added Sugar", 
        description: "Freshly squeezed apple juice made on every order. Naturally sweet with zero added sugar. (300 Ml)",
        price: 249, 
        image: appleJuice 
      },
      { name: "Coke Zero", price: 40 },
      { name: "Diet Coke", price: 40 },
    ],
  },
  {
    id: "dips",
    name: "Dips & Extras",
    items: [
      { 
        name: "Mexican Salsa", 
        description: "Fresh and zesty Mexican Salsa made with charred tomatoes, juicy onions, fresh coriander, and more — perfectly balanced with tang, spice, and a hint of heat. Net weight - 280Gms.",
        price: 99, 
        image: mexicanSalsa 
      },
      { 
        name: "Tzatziki", 
        description: "A refreshing dip made with hung curd, blended with grated cucumber, dill leaves, and a dash of lime juice. Finished with a drizzle of olive oil for a smooth, creamy texture and balanced flavour (280 Gms).",
        price: 199, 
        image: tzatziki 
      },
      { 
        name: "Sour Cream", 
        description: "Smooth, tangy, and creamy — our in-house sour cream is made with heavy cream and lemon for the perfect balance of richness and zest (280 Gms).",
        price: 449, 
        image: sourCream 
      },
      { 
        name: "Guacamole", 
        description: "Creamy, chunky and irresistibly fresh! Made with ripe avocados, zesty lemon juice, fresh tomatoes, onions, coriander and a hint of pepper & salt—this guacamole delivers the perfect balance of richness and tang. Blended in small batches with premium olive oil for a smooth dip. Perfect for nachos, salads, burritos, sandwiches or as a healthy spread (280 Gms).",
        price: 599, 
        image: guacamole 
      },
    ],
  },
];
