
Elenza Boutique: React Codebase Adaptation Guide

This document provides a complete set of instructions and gemini-cli prompts to transform the generic fashion e-commerce template into a bespoke, luxury online experience for Elenza Boutique.
1. Foundational Brand Setup (Manual Changes)

Before using the CLI, some foundational setup is required to integrate the new brand assets.
1.1. Update Google Fonts

In index.html, replace the existing <link> for the 'Merriweather' font with the new fonts for Elenza Boutique: 'Playfair Display' for headings and 'Inter' for body text.

File: index.html

<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="UTF-8" />
<link rel="icon" type="image/svg+xml" href="/vite.svg" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Elenza Boutique</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Playfair+Display:wght@700&display=swap"
rel="stylesheet"
/>
</head>
<body>
<div id="root"></div>
<script type="module" src="/src/main.tsx"></script>
</body>
</html>
1.2. Configure TailwindCSS

Replace the entire content of tailwind.config.js with the following configuration. This file defines the new color palette and custom font families, making them available as utility classes throughout the application.

File: tailwind.config.js

/** @type {import('tailwindcss').Config} /
export default {
content: ["./index.html", "./src/**/.{js,ts,jsx,tsx}"],
theme: {
extend: {
colors: {
'brand-cream': '#F9F9F9',
'brand-charcoal': '#222222',
'brand-gold': '#B09A7A',
'brand-light-gray': '#EAEAEA',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
},
},
plugins: [],
};
2. Data & Content Transformation

Now, let's update the product data to reflect Elenza Boutique's inventory.
2.1. Update Product Database

Use the following prompt to update the mock database with products that match Elenza's categories.

gemini "Analyze the structure of src/data/db.json. Replace the existing 'products' and 'categories' arrays with new data for Elenza Boutique. The new categories should be 'Womenswear', 'Accessories', 'Handbags', 'Footwear', 'Jewellery', and 'Home Decor'. Populate the 'products' array with at least 20 sample items that fit these categories. Each product should have a sophisticated name, a brief luxury-oriented description, a price in AED (e.g., 1500), and be assigned to one of the new categories. Ensure all image paths follow the existing format (e.g., '/src/assets/product image 1.jpg') but are updated to reflect new, high-end product imagery."
3. Component-Level Styling Overhaul

Run the following prompts to refactor the core UI components to match the new brand identity.
3.1. Header & Navigation

This prompt updates the main header with the new logo, typography, and colors.

gemini "Refactor the src/components/Header.tsx component. Change the main logo text from 'Miralou' to 'ELENZA' and apply the font-serif and text-brand-charcoal classes. Update the navigation links ('Shop', 'About', 'Contact') to use the font-sans and text-brand-charcoal classes. For the icons (search, user, cart), ensure they are styled with text-brand-charcoal. The entire header should have a bg-brand-cream background."
3.2. Global Button Style

This prompt standardizes all buttons across the application.

gemini "Refactor the src/components/Button.tsx component. The button should have a default style with bg-brand-gold, text-brand-charcoal, font-sans, font-bold, and rounded-md. Add a hover effect that slightly darkens the gold background, for example hover:bg-yellow-800. Remove any existing styles that conflict with this new identity."
3.3. Landing Page Hero Banner

This prompt redesigns the main hero section on the landing page.

gemini "In src/pages/Landing.tsx, find the Banner component. Update its content to reflect Elenza Boutique's luxury positioning. Change the main heading to 'Timeless Silhouettes, Modern Grace' and apply the font-serif text-brand-charcoal classes with a larger font size (e.g., text-5xl). Change the subtitle to 'Discover our curated collection of contemporary luxury.' using font-sans text-brand-charcoal. Ensure the 'Shop Now' button uses the newly styled Button component."
3.4. Landing Page Category Section

This prompt refactors the category display on the landing page.

gemini "Refactor the src/components/CategoriesSection.tsx component. Update the main heading to 'Explore The Collections' and apply the font-serif text-brand-charcoal style. For each CategoryItem, ensure the category title (e.g., 'Womenswear') uses the font-sans and text-brand-charcoal classes, overlayed on new, elegant imagery."
3.5. Product Card Display

This prompt redesigns the product cards used in the shop and on the landing page.

gemini "Refactor the src/components/ProductItem.tsx component. The card container should have a bg-white or bg-brand-cream background with a subtle border border-brand-light-gray and rounded-md. On hover, add a shadow-lg effect. The product name should use font-serif text-brand-charcoal. The product price should use font-sans font-bold text-brand-gold."
3.6. Footer

This prompt updates the footer to be consistent with the new brand identity.

gemini "Refactor the src/components/Footer.tsx component. Change the background color to bg-brand-charcoal. All text, including headings and links, should be text-brand-cream. Update the main logo text to 'ELENZA' and apply the font-serif style. Ensure all social media icons are also styled with text-brand-cream."
4. Final Steps

    Replace Images: Manually replace all placeholder images in the src/assets/ directory with your own high-resolution, professional product and lifestyle photography that aligns with the Elenza Boutique brand.

    Run the Application: Open your terminal in the project root and run the following commands to see your newly branded website:

    npm install
    npm start

