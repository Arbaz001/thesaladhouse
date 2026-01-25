

# Update Beverages Category

## Overview
Replace the current 15 beverages with 5 new items, including images and descriptions for the fresh juices/milkshake.

## Implementation Steps

### Step 1: Add Uploaded Images to Project
Save the 3 uploaded images to the assets folder:
- `src/assets/orange-juice.jpeg`
- `src/assets/banana-milkshake.jpeg`
- `src/assets/apple-juice.jpeg`

### Step 2: Update Menu Data
Modify `src/data/menuData.ts`:

1. Add new image imports at the top of the file
2. Replace the entire beverages category items array with:

```typescript
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
}
```

## Result
- Beverages category will show 5 items instead of the current 15
- Fresh Orange Juice, Banana Milkshake, and Apple Juice will display with images and descriptions
- Coke Zero and Diet Coke will display as simple items without images

