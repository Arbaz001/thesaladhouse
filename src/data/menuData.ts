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
import freshFruitYogurtBowl from "@/assets/fresh-fruit-yogurt-bowl.jpeg";
import chocolateYogurtBowl from "@/assets/chocolate-yogurt-bowl.jpeg";
import mixedBerriesYogurtBowl from "@/assets/mixed-berries-yogurt-bowl.jpeg";
import orangeJuice from "@/assets/orange-juice.jpeg";
import bananaMilkshake from "@/assets/banana-milkshake.jpeg";
import appleJuice from "@/assets/apple-juice.jpeg";
import mexicanSalsa from "@/assets/mexican-salsa.jpeg";
import tzatziki from "@/assets/tzatziki.jpeg";
import sourCream from "@/assets/sour-cream.jpeg";
import guacamole from "@/assets/guacamole.jpeg";
import paneerTikkaWrap from "@/assets/paneer-tikka-wrap.jpeg";
import periPeriPotatoWrap from "@/assets/peri-peri-potato-wrap.png";
import periPeriPotatoBites from "@/assets/peri-peri-potato-bites.jpeg";

export const menuData: MenuCategory[] = [
  {
    id: "salad-bowls",
    name: "Salad Bowls",
    items: [
      { 
        name: "Falafel Hummus Salad Bowl", 
        description: "Crispy herbed falafel with fresh veggies, freshly made beetroot hummus, and Valencia orange chilli dressing, topped with candied spicy nuts (425 Gms).",
        price: 329, 
        image: falafelHummusSaladBowl 
      },
      { 
        name: "Roasted Chickpeas & Paneer Tikka Salad Bowl", 
        description: "Smoky paneer tikka and crispy roasted chickpeas with fresh veggies, refreshing in-house tzatziki, LCM dressing, and topped with candied spicy nuts (480 Gms).",
        price: 329, 
        image: paneerTikkaSaladBowl 
      },
      { 
        name: "Mexican Nachos Salad Bowl", 
        description: "Mexican patties on fresh greens with creamy avocado, fresh veggies, crunchy nachos, in-house pico de gallo, sour cream, and topped with mixed seeds. (470 Gms).",
        price: 329, 
        image: mexicanNachosSaladBowl 
      },
    ],
  },
  {
    id: "rice-bowls",
    name: "Rice Bowls",
    items: [
      { 
        name: "Mexican Mushroom Rice Bowl", 
        description: "Mushroom popcorn with fresh greens, fajita veggies, black bean gravy, corn salsa, pico de gallo, pickled vegetables, and a dollop of fresh hung curd — all made in-house. No extra dips or dressings. (491 Gms).",
        price: 399, 
        image: mexicanMushroomBowl 
      },
      { 
        name: "Mexican Peri Peri Potato Rice Bowl", 
        description: "Peri Peri potato with fresh greens, fajita veggies, black bean gravy, corn salsa, pico de gallo, pickled vegetables, and a dollop of fresh hung curd — all made in-house. (491 Gms).",
        price: 329, 
        image: mexicanPeriPeriBowl 
      },
      { 
        name: "Mexican Paneer Rice Bowl with Nachos", 
        description: "Mexican paneer with fresh greens, fajita veggies, black bean gravy, corn salsa, pico de gallo, pickled vegetables, and a dollop of fresh hung curd — all made in-house, with the crunch of flavoured nachos. No extra dips or dressings (520 Gms).",
        price: 280, 
        image: mexicanPaneerBowl 
      },
      { 
        name: "Mexican Patty Rice Bowl with Nachos", 
        description: "Mexican patties with fresh greens, fajita veggies, black bean gravy, corn salsa, pico de gallo, pickled vegetables, and a dollop of fresh hung curd — all made in-house, with the crunch of flavoured nachos. No extra dips or dressings (521 gms).",
        price: 250, 
        image: mexicanPattyBowl 
      },
      { 
        name: "Mexican Falafel Rice Bowl with Nachos", 
        description: "Herbed falafel with fresh greens, fajita veggies, black bean gravy, corn salsa, pico de gallo, pickled vegetables, and a dollop of fresh hung curd — all made in-house, with the crunch of flavoured nachos. (522 Gms).",
        price: 250, 
        image: mexicanFalafelBowl 
      },
    ],
  },
  {
    id: "yogurt-bowls",
    name: "Yogurt & Fruit Bowls",
    items: [
      { 
        name: "Fresh Fruit Yogurt Bowl", 
        description: "Creamy strawberry-flavoured hung curd topped with fresh seasonal fruits, chia, and roasted mixed seeds (420 Gms).",
        price: 299, 
        image: freshFruitYogurtBowl 
      },
      { 
        name: "Hershey's Chocolate Yogurt Bowl", 
        description: "Creamy chocolate-flavoured hung curd made with Hershey's chocolate, topped with fresh seasonal fruits, chia, and roasted mixed seeds (470 Gms).",
        price: 329, 
        image: chocolateYogurtBowl 
      },
      { 
        name: "Mixed Berries Fresh Fruit Yogurt Bowl", 
        description: "Creamy Mixed Berries-flavoured hung curd topped with fresh seasonal fruits, chia, and roasted mixed seeds (420 Gms).",
        price: 319, 
        image: mixedBerriesYogurtBowl 
      },
    ],
  },
  {
    id: "wraps",
    name: "Wraps",
    items: [
      { 
        name: "Paneer Tikka Wrap", 
        description: "Soft tortilla made from whole wheat flour (atta), loaded with smoky paneer tikka, crisp lettuce, and fresh veggies — tomato, cucumber, and capsicum. Layered with creamy in-house Tzatziki, tangy pickled onions, a drizzle of olive oil and lemon juice, and our signature in-house LCM dressing. (300 Gms).",
        price: 250,
        image: paneerTikkaWrap
      },
      { 
        name: "Peri Peri Potato Wrap", 
        description: "Soft tortilla made from whole wheat flour (atta), loaded with crispy peri peri baby potatoes, crisp lettuce, and fresh veggies — tomato, cucumber, and capsicum. Layered with creamy in-house Tzatziki, tangy pickled onions, a drizzle of olive oil and lemon juice, and our signature in-house LCM dressing (300 Gms).",
        price: 250,
        image: periPeriPotatoWrap
      },
    ],
  },
  {
    id: "sides",
    name: "Sides & Bites",
    items: [
      { 
        name: "Peri Peri Potato Bites", 
        price: 249,
        image: periPeriPotatoBites
      },
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
