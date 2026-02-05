export interface MenuItem {
  name: string;
  description?: string;
  price: number;
  variant?: string;
  image?: string | string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

import mexicanMushroomBowl from "@/assets/mexican-mushroom-rice-bowl.jpg";
import mexicanMushroomBowlLabTest from "@/assets/mexican-mushroom-rice-bowl-lab-test.png";
import mexicanPeriPeriBowl from "@/assets/mexican-peri-peri-potato-rice-bowl.jpg";
import mexicanPeriPeriBowlLabTest from "@/assets/mexican-peri-peri-potato-rice-bowl-lat-test.png";
import mexicanPaneerBowl from "@/assets/mexican-paneer-rice-bowl.jpg";
import mexicanPaneerBowlLabTest from "@/assets/mexican-paneer-rice-bowl-lab-test.png";
import mexicanPattyBowl from "@/assets/mexican-patty-rice-bowl.jpg";
import mexicanPattyBowlLabTest from "@/assets/mexican-patty-rice-bowl-lab-test.png";
import mexicanFalafelBowl from "@/assets/mexican-falafel-rice-bowl.jpg";
import mexicanFalafelBowlLabTest from "@/assets/mexican-falafel-rice-bowl-lab-test.png";
import falafelHummusSaladBowl from "@/assets/falafel-hummus-salad-bowl.jpg";
import falafelHummusSaladBowllabtest from "@/assets/falafel-hummus-salad-bowl-lab-test.png";
import roastedpaneerTikkaSaladBowl from "@/assets/roasted-chickpeas-paneer-tikka-salad-bowl.png";
import roastedchickpeaspaneertikkasaladbowllabtest from "@/assets/roasted-chickpeas-paneer-tikka-salad-bowl-lab-test.png";
import mexicanNachosSaladBowl from "@/assets/mexican-nachos-salad-bowl.jpg";
import mexicanNachosSaladBowllabtest from "@/assets/mexican-nachos-salad-bowl-lab-test.png";
import freshFruitYogurtBowl from "@/assets/fresh-fruit-yogurt-bowl.jpeg";
import freshFruitYogurtBowllabtest from "@/assets/fresh-fruit-yogurt-bowl-lab-test.png";
import chocolateYogurtBowl from "@/assets/chocolate-yogurt-bowl.jpeg";
import chocolateYogurtBowllabtest from "@/assets/chocolate-yogurt-bowl-lab-test.png";
import mixedBerriesYogurtBowl from "@/assets/mixed-berries-yogurt-bowl.jpeg";
import mixedBerriesYogurtBowlLabTest from "@/assets/mixed-berries-yogurt-bowl-lab-test.png";
import orangeJuice from "@/assets/orange-juice.jpeg";
import bananaMilkshake from "@/assets/banana-milkshake.jpeg";
import bananaMilkshakeLabTest from "@/assets/banana-milkshake-lab-test.png";
import appleJuice from "@/assets/apple-juice.jpeg";
import mexicanSalsa from "@/assets/mexican-salsa.jpeg";
import mexicanSalsaLabTest from "@/assets/mexican-salsa-lab-test.png";
import tzatziki from "@/assets/tzatziki.jpeg";
import tzatzikiLabTest from "@/assets/tzatziki-lab-test.png";
import sourCream from "@/assets/sour-cream.jpeg";
import sourCreamLabTest from "@/assets/sour-cream-lab-test.png";
import guacamole from "@/assets/guacamole.jpeg";
import guacamoleLabTest from "@/assets/guacamole-lab-test.png";
import cornSalsa from "@/assets/corn-salsa.jpeg";
import paneerTikkaWrap from "@/assets/paneer-tikka-wrap.jpeg";
import panerrTikkaWrapLabTest from "@/assets/paneer-tikka-wrap-lab-test.png";
import periPeriPotatoWrap from "@/assets/peri-peri-potato-wrap.png";
import periPeriPotatoWrapLabTest from "@/assets/peri-peri-potato-wrap-lab-test.png";
import periPeriPotatoBites from "@/assets/peri-peri-potato-bites.jpeg";
import periPeriPotatoBitesLabTest from "@/assets/peri-peri-potato-bites-lab-test.png";
import paneerTikkaAvocadoRiceBowl from "@/assets/paneer-tikka-avocado-rice-bowl.jpg";
import paneerTikkaAvocadoRiceBowlLabTest from "@/assets/paneertikka&avacadosaladbowllabtest.png";
import mexicanBurritoRiceSaladBowl from "@/assets/mexican-burrito-rice-salad-bowl.jpg";
import mexicanBurritoRiceSaladBowllabtest from "@/assets/mexican-burrito-rice-bowl-lab-test.png";
import falafelQuinoaSaladBowl from "@/assets/falafel-quinoa-salad-bowl.jpg";
import falafelQuinoaSaladBowllabtest from "@/assets/falafel-quinoa-salad-bowl-lab-test.png";
import proteinYogurtBowl from "@/assets/protein-yogurt-bowl-fresh-fruits.jpeg";
import proteinYogurtBowlLabTest from "@/assets/protein-yogurt-bowl-fresh-fruits-lab-test.png";

export const menuData: MenuCategory[] = [
  {
    id: "salad-bowls",
    name: "Salad Bowls",
    items: [
      { 
        name: "Falafel Hummus Salad Bowl", 
        description: "Crispy herbed falafel with fresh veggies, freshly made beetroot hummus, and Valencia orange chilli dressing, topped with candied spicy nuts (425 Gms).",
        price: 329, 
        image: [falafelHummusSaladBowl, falafelHummusSaladBowllabtest]
      },
      { 
        name: "Roasted Chickpeas & Paneer Tikka Salad Bowl", 
        description: "Smoky paneer tikka and crispy roasted chickpeas with fresh veggies, refreshing in-house tzatziki, LCM dressing, and topped with candied spicy nuts (480 Gms).",
        price: 329, 
        image: [roastedpaneerTikkaSaladBowl, roastedchickpeaspaneertikkasaladbowllabtest]
      },
      { 
        name: "Mexican Nachos Salad Bowl", 
        description: "Mexican patties on fresh greens with creamy avocado, fresh veggies, crunchy nachos, in-house pico de gallo, sour cream, and topped with mixed seeds. (470 Gms).",
        price: 329, 
        image: [mexicanNachosSaladBowl, mexicanNachosSaladBowllabtest]
      },
    ],
  },
  {
    id: "salad-quinoa-bowls",
    name: "Salad And Quinoa Bowls",
    items: [
      {
        name: "Falafel Quinoa Salad Bowl",
        description: "Crispy falafel on fresh greens with herbed quinoa, veggies, and candied nuts. Served with in-house beetroot hummus and Valencia orange chilli dressing, topped with feta cheese and pomegranate (522 Gms). Made fresh daily. Zero frozen ingredients. No leftover pre-cut veggies from previous days. Unsold food is responsibly donated every day.",
        price: 329,
        image: [falafelQuinoaSaladBowl, falafelQuinoaSaladBowllabtest]
      },
    ],
  },
  {
    id: "salad-rice-bowls",
    name: "Salad And Rice Bowls",
    items: [
      {
        name: "Paneer Tikka Avocado Rice Bowl",
        description: "Smoky paneer tikka and creamy avocado tossed with rice and fresh veggies, refreshing in-house tzatziki, LCM dressing, and topped with candied spicy nuts and feta. No leftover pre-cut veggies from previous days. Unsold food is responsibly donated every day (410 Gms).",
        price: 329,
        image: [paneerTikkaAvocadoRiceBowl, paneerTikkaAvocadoRiceBowlLabTest]
      },
      {
        name: "Mexican Burrito Rice Salad Bowl",
        description: "Spiced Mexican patty, guac, salsa, and black bean gravy over rice with nachos, cheese, and creamy sour cream. A burrito in a bowl. No leftover pre-cut veggies from previous days. Unsold food is responsibly donated every day (410Gms).",
        price: 329,
        image: [mexicanBurritoRiceSaladBowl, mexicanBurritoRiceSaladBowllabtest]
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
        price: 200, 
        image: [mexicanMushroomBowl, mexicanMushroomBowlLabTest]
      },
      { 
        name: "Mexican Peri Peri Potato Rice Bowl", 
        description: "Peri Peri potato with fresh greens, fajita veggies, black bean gravy, corn salsa, pico de gallo, pickled vegetables, and a dollop of fresh hung curd — all made in-house. (491 Gms).",
        price: 165, 
        image: [mexicanPeriPeriBowl, mexicanPeriPeriBowlLabTest]
      },
      { 
        name: "Mexican Paneer Rice Bowl with Nachos", 
        description: "Mexican paneer with fresh greens, fajita veggies, black bean gravy, corn salsa, pico de gallo, pickled vegetables, and a dollop of fresh hung curd — all made in-house, with the crunch of flavoured nachos. No extra dips or dressings (520 Gms).",
        price: 280, 
        image: [mexicanPaneerBowl, mexicanPaneerBowlLabTest]
      },
      { 
        name: "Mexican Patty Rice Bowl with Nachos", 
        description: "Mexican patties with fresh greens, fajita veggies, black bean gravy, corn salsa, pico de gallo, pickled vegetables, and a dollop of fresh hung curd — all made in-house, with the crunch of flavoured nachos. No extra dips or dressings (521 gms).",
        price: 250, 
        image: [mexicanPattyBowl, mexicanPattyBowlLabTest]
      },
      { 
        name: "Mexican Falafel Rice Bowl with Nachos", 
        description: "Herbed falafel with fresh greens, fajita veggies, black bean gravy, corn salsa, pico de gallo, pickled vegetables, and a dollop of fresh hung curd — all made in-house, with the crunch of flavoured nachos. (522 Gms).",
        price: 250, 
        image: [mexicanFalafelBowl, mexicanFalafelBowlLabTest]
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
        image: [freshFruitYogurtBowl, freshFruitYogurtBowllabtest]
      },
      { 
        name: "Hershey's Chocolate Yogurt Bowl", 
        description: "Creamy chocolate-flavoured hung curd made with Hershey's chocolate, topped with fresh seasonal fruits, chia, and roasted mixed seeds (470 Gms).",
        price: 329, 
        image: [chocolateYogurtBowl, chocolateYogurtBowllabtest]
      },
      { 
        name: "Mixed Berries Fresh Fruit Yogurt Bowl", 
        description: "Creamy Mixed Berries-flavoured hung curd topped with fresh seasonal fruits, chia, and roasted mixed seeds (420 Gms).",
        price: 319, 
        image: [mixedBerriesYogurtBowl, mixedBerriesYogurtBowlLabTest]
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
        image: [paneerTikkaWrap, panerrTikkaWrapLabTest]
      },
      { 
        name: "Peri Peri Potato Wrap", 
        description: "Soft tortilla made from whole wheat flour (atta), loaded with crispy peri peri baby potatoes, crisp lettuce, and fresh veggies — tomato, cucumber, and capsicum. Layered with creamy in-house Tzatziki, tangy pickled onions, a drizzle of olive oil and lemon juice, and our signature in-house LCM dressing (300 Gms).",
        price: 250,
        image: [periPeriPotatoWrap, periPeriPotatoWrapLabTest]
      },
    ],
  },
  {
    id: "protein-bowls",
    name: "Protein Bowls",
    items: [
      {
        name: "Protein Yogurt Bowl With Fresh Fruits",
        description: "Made with 1 scoop of SuperYou Chocolate Fermented Yeast Protein, this rich chocolate-flavoured hung curd bowl is topped with fresh fruits, chia seeds, and roasted mixed seeds — a perfect blend of indulgence and nutrition (481Gms). Made fresh daily. Unsold food is responsibly donated every day.",
        price: 549,
        image: [proteinYogurtBowl, proteinYogurtBowlLabTest]
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
        image: [periPeriPotatoBites, periPeriPotatoBitesLabTest]
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
        image: [bananaMilkshake, bananaMilkshakeLabTest]
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
        image: [mexicanSalsa, mexicanSalsaLabTest]
      },
      { 
        name: "Tzatziki", 
        description: "A refreshing dip made with hung curd, blended with grated cucumber, dill leaves, and a dash of lime juice. Finished with a drizzle of olive oil for a smooth, creamy texture and balanced flavour (280 Gms).",
        price: 199, 
        image: [tzatziki, tzatzikiLabTest]
      },
      { 
        name: "Sour Cream", 
        description: "Smooth, tangy, and creamy — our in-house sour cream is made with heavy cream and lemon for the perfect balance of richness and zest (280 Gms).",
        price: 449, 
        image: [sourCream, sourCreamLabTest]
      },
      { 
        name: "Guacamole", 
        description: "Creamy, chunky and irresistibly fresh! Made with ripe avocados, zesty lemon juice, fresh tomatoes, onions, coriander and a hint of pepper & salt—this guacamole delivers the perfect balance of richness and tang. Blended in small batches with premium olive oil for a smooth dip. Perfect for nachos, salads, burritos, sandwiches or as a healthy spread (280 Gms).",
        price: 599, 
        image: [guacamole, guacamoleLabTest]
      },
      { 
        name: "Corn Salsa", 
        description: "Fresh and zesty Corn Salsa made with sweet American corn, crunchy onions, and fresh coriander — perfectly balanced with tang, mild spice, and freshness (280 Gms). Made fresh daily. Zero frozen ingredients. No leftover pre-cut veggies from previous days. Unsold food is responsibly donated every day.",
        price: 129, 
        image: cornSalsa
      },
    ],
  },
];
