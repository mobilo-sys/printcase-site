"use client"
// FILE: hooks/use-cart.tsx

// This file creates the logic for our shopping cart system.
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Product } from '@/lib/products';

// This defines what an item in the cart looks like. It's a Product plus a quantity.
interface CartItem extends Product {
  quantity: number;
}

// This defines the functions and data that our cart will provide to the app.
interface CartContextType {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}

// We create a context to hold the cart's state.
const CartContext = createContext<CartContextType | undefined>(undefined);

// This is the provider component that will wrap our entire application.
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // This effect runs once when the app loads to get the cart from the browser's local storage.
  useEffect(() => {
    const storedCart = localStorage.getItem('printcase-cart');
    if (storedCart) {
      setItems(JSON.parse(storedCart));
    }
  }, []);

  // This effect runs every time the cart items change and saves them to local storage.
  useEffect(() => {
    localStorage.setItem('printcase-cart', JSON.stringify(items));
  }, [items]);

  // Function to add a product to the cart. If it exists, increase quantity.
  const addItem = (product: Product) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Function to remove an item from the cart.
  const removeItem = (productId: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== productId));
  };
  
  // Function to completely clear the cart.
  const clearCart = () => {
    setItems([]);
  };

  // Calculate the total price of all items in the cart.
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Calculate the total number of items in the cart.
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart, total, itemCount }}>
      {children}
    </CartContext.Provider>
  );
}

// This is a custom hook that makes it easy to access the cart from any component.
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

