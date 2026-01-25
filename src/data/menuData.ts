export interface MenuItem {
  name: string;
  description?: string;
  price: number;
  variant?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: "rice-bowls",
    name: "Rice Bowls",
    items: [
      { name: "Mexican Salad Bowl (Veg)", price: 299 },
      { name: "Mexican Salad Bowl (Non-Veg)", price: 349 },
      { name: "Mexican Rice Bowl (Veg)", price: 250 },
      { name: "Mexican Rice Bowl (Non-Veg)", price: 300 },
      { name: "Mexican Rice Bowl (Paneer)", price: 300 },
      { name: "Loaded Nachos Bowl (Veg)", price: 349 },
      { name: "Loaded Nachos Bowl (Non-Veg)", price: 399 },
    ],
  },
  {
    id: "salad-bowls",
    name: "Salad Bowls",
    items: [
      { name: "Falafel Salad Bowl", price: 329 },
      { name: "Paneer Tikka Salad Bowl", price: 329 },
      { name: "Nachos Salad Bowl", price: 329 },
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
