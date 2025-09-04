// FILE: lib/products.ts

// This defines what a 'Product' is in our application
export interface Product {
  id: string;
  name: string;
  price: number; // Price in EUR
  imageSrc: string; // Path to the product image in the 'public' folder
}

// This is our simple product database with updated Latvian names.
export const products: Product[] = [
  {
    id: 'transparent-case-1',
    name: 'Caurspīdīgs vāciņš', // Updated from "Прозрачный чехол (S)"
    price: 14.90,
    imageSrc: '/placeholder.svg',
  },
  {
    id: 'transparent-case-2',
    name: 'Caurspīdīgs vāciņš', // Updated from "Прозрачный чехол (M)"
    price: 16.90,
    imageSrc: '/placeholder.svg',
  },
  {
    id: 'transparent-case-3',
    name: 'Caurspīdīgs vāciņš', // Updated from "Прозрачный чехол (L)"
    price: 17.90,
    imageSrc: '/placeholder.svg',
  },
  {
    id: 'transparent-case-4',
    name: 'Caurspīdīgs vāciņš', // Updated from "Прозрачный чехол (XL)"
    price: 18.90,
    imageSrc: '/placeholder.svg',
  },
  {
    id: 'transparent-case-5',
    name: 'Caurspīdīgs vāciņš', // Updated from "Прозрачный чехол (Pro)"
    price: 19.90,
    imageSrc: '/placeholder.svg',
  },
  {
    id: 'magnetic-case-1',
    name: 'MagSafe vāciņš', // Updated from "Магнитный чехол (Pro)"
    price: 19.90,
    imageSrc: '/placeholder.svg',
  },
  {
    id: 'magnetic-case-2',
    name: 'MagSafe vāciņš', // Updated from "Магнитный чехол (Pro Max)"
    price: 22.90,
    imageSrc: '/placeholder.svg',
  },
  {
    id: 'magnetic-case-3',
    name: 'MagSafe vāciņš', // Updated from "Магнитный чехол (Ultra)"
    price: 24.90,
    imageSrc: '/placeholder.svg',
  },
];

