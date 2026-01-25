

# Update Rice Bowls Menu

## Changes Overview

Replace the current Rice Bowls items with the 5 new bowls you specified:

| Item Name | Price |
|-----------|-------|
| Mexican Mushroom Rice Bowl | ₹399 |
| Mexican Peri Peri Potato Rice Bowl | ₹329 |
| Mexican Paneer Rice Bowl with Nachos | ₹280 |
| Mexican Patty Rice Bowl with Nachos | ₹250 |
| Mexican Falafel Rice Bowl with Nachos | ₹250 |

## Implementation Steps

### Step 1: Update Menu Data
Modify `src/data/menuData.ts` to replace the existing Rice Bowls items with the 5 new items and their prices.

### Step 2: Add Image Support to Menu Items
Update the data structure in `menuData.ts` to include an optional `image` field for each item.

### Step 3: Update MenuItem Component
Modify `src/components/MenuItem.tsx` to display images when available, showing the bowl image alongside the name and price in an attractive card layout.

### Step 4: Add Images (After You Upload)
Once you upload the bowl images in the chat, I will add them to the project and link each image to its corresponding menu item.

## Notes
- The current 7 items in Rice Bowls will be removed and replaced with your 5 new items
- Images will be optional, so items without images will still display correctly
- The card design will be enhanced to showcase food images attractively

