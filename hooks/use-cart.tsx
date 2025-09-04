"use client"
// FILE: hooks/use-cart.tsx

// This file creates a "context" for the shopping cart, allowing any component in the app to access it.
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// We import the Product type to know what a product looks like
import type { Product } from '@/lib/products';

// Define the shape of an item when it's in the cart (a product + quantity)
interface CartItem extends Product {
  quantity: number;
}

// Define all the values and functions that our cart will provide
interface CartContextType {
  items: CartItem[];
  addItem: (product: Product) => void;
  total: number;
}

// Create the context that components will use to get cart data
const CartContext = createContext<CartContextType | undefined>(undefined);

// Create the CartProvider component. This component will wrap our entire application.
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // This `useEffect` runs once when the app loads to get the cart from browser storage.
  // This prevents the cart from emptying when the user refreshes the page.
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem('printcase-cart');
      if (storedCart) {
        setItems(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error("Failed to parse cart from localStorage", error);
    }
  }, []);

  // This `useEffect` runs every time the `items` array changes, saving it to browser storage.
  useEffect(() => {
    try {
      localStorage.setItem('printcase-cart', JSON.stringify(items));
    } catch (error) {
      console.error("Failed to save cart to localStorage", error);
    }
  }, [items]);

  // Function to add a product to the cart
  const addItem = (product: Product) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);

      // If the item is already in the cart, we could increase its quantity.
      // For this simple example, we'll just alert the user.
      if (existingItem) {
        alert("Товар уже в корзине (для этого примера)");
        return prevItems;
      }
      
      // If the item is new, add it to the cart with a quantity of 1.
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Calculate the total price of all items in the cart
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Provide the cart items, addItem function, and total to all child components
  return (
    <CartContext.Provider value={{ items, addItem, total }}>
      {children}
    </CartContext.Provider>
  );
}

// Create a custom hook for easy access to the cart from any component
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    // This error will appear if you try to use the cart outside of the CartProvider
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

