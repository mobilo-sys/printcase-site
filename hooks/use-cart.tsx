"use client"
// FILE: hooks/use-cart.tsx

import { createContext, useContext, useState, useEffect } from 'react';
import type { Product } from '@/lib/products';

// This defines what an item in the cart looks like.
// It's a Product plus a quantity.
export interface CartItem extends Product {
  quantity: number;
}

// This defines the data and functions that our cart will provide.
interface CartContextType {
  items: CartItem[];
  addItem: (product: Product) => void;
  clearCart: () => void;
  total: number;
}

// Create the context that components will use to access cart data.
const CartContext = createContext<CartContextType | undefined>(undefined);

// This is the main provider component. It will wrap our entire application
// and manage the cart state.
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // On initial load, try to get the cart from the browser's local storage.
  useEffect(() => {
    const storedCart = localStorage.getItem('printcase-cart');
    if (storedCart) {
      setItems(JSON.parse(storedCart));
    }
  }, []);

  // Whenever the 'items' in the cart change, save the new state to local storage.
  useEffect(() => {
    localStorage.setItem('printcase-cart', JSON.stringify(items));
  }, [items]);

  // Function to add a product to the cart.
  const addItem = (product: Product) => {
    setItems(prevItems => {
      // For this simple example, we assume each "add" is for a new custom case.
      // A more complex cart would check if the item exists and increase its quantity.
      // We will create a unique ID for each item to allow multiple identical products.
      const newItem: CartItem = { ...product, id: `${product.id}-${Date.now()}`, quantity: 1 };
      return [...prevItems, newItem];
    });
  };

  // Function to clear all items from the cart.
  const clearCart = () => {
    setItems([]);
  };

  // Calculate the total price of all items in the cart.
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Provide the cart state and functions to all child components.
  return (
    <CartContext.Provider value={{ items, addItem, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

// This is a custom hook that makes it easy for any component to use the cart.
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
