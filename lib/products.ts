// FILE: lib/products.ts
// This file acts as our simple product database.

// This defines the structure for a single product
export interface Product {
  id: string;
  name: string;
  price: number; // Price in EUR
  imageSrc: string;
}

// This is our list of available products.
// You can add as many products as you want here.
// IMPORTANT: Replace image paths with real image paths from your 'public' folder.
export const products: Product[] = [
  {
    id: 'case-001',
    name: 'Персонализированный чехол',
    price: 14.99,
    imageSrc: '/gallery/Phone_Case_4.png', // Example path
  },
  {
    id: 'case-002',
    name: 'Чехол из галереи "Цветы"',
    price: 12.99,
    imageSrc: '/gallery/Phone_Case_1.png', // Example path
  },
  {
    id: 'case-003',
    name: 'Прозрачный чехол',
    price: 9.99,
    imageSrc: '/gallery/clear-case.png', // Example path
  },
];
