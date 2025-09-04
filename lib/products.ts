// FILE: lib/products.ts

// This defines what a 'Product' is in our application
export interface Product {
  id: string;
  name: string;
  price: number; // Price in EUR
  imageSrc: string; // Path to the product image in the 'public' folder
}

// This is our simple product database.
// You can change names and add real image paths later.
export const products: Product[] = [
  {
    id: 'transparent-case-1',
    name: 'Прозрачный чехол (S)',
    price: 14.90,
    imageSrc: '/placeholder.svg',
  },
  {
    id: 'transparent-case-2',
    name: 'Прозрачный чехол (M)',
    price: 16.90,
    imageSrc: '/placeholder.svg',
  },
  {
    id: 'transparent-case-3',
    name: 'Прозрачный чехол (L)',
    price: 17.90,
    imageSrc: '/placeholder.svg',
  },
  {
    id: 'transparent-case-4',
    name: 'Прозрачный чехол (XL)',
    price: 18.90,
    imageSrc: '/placeholder.svg',
  },
  {
    id: 'transparent-case-5',
    name: 'Прозрачный чехол (Pro)',
    price: 19.90,
    imageSrc: '/placeholder.svg',
  },
  {
    id: 'magnetic-case-1',
    name: 'Магнитный чехол (Pro)',
    price: 19.90,
    imageSrc: '/placeholder.svg',
  },
  {
    id: 'magnetic-case-2',
    name: 'Магнитный чехол (Pro Max)',
    price: 22.90,
    imageSrc: '/placeholder.svg',
  },
  {
    id: 'magnetic-case-3',
    name: 'Магнитный чехол (Ultra)',
    price: 24.90,
    imageSrc: '/placeholder.svg',
  },
];

