"use client"
// FILE: app/checkout/page.tsx

// Import hooks and components for the checkout page functionality
import { useCart } from "@/hooks/use-cart";
import { products } from "@/lib/products";
import { useState } from "react";
import Link from "next/link";

// SVG icon for the trash can (to remove items)
const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 hover:text-red-500 transition-colors">
    <path d="M3 6h18" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

// This is the main component for the stylish and compact checkout page
export default function CheckoutPage() {
  const { items, addItem, removeItem, total, clearCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  // This function handles the payment process
  async function handlePayment() {
    if (items.length === 0) {
      alert("Grozs ir tukšs!"); // Your cart is empty!
      return;
    }

    setIsLoading(true); // Disable button to prevent multiple clicks

    const orderDetails = {
      amount: total,
      orderId: `PC-${Date.now()}`, // Generate a simple unique order ID
    };

    try {
      const response = await fetch('/.netlify/functions/create-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderDetails)
      });
      
      const data = await response.json();

      if (data.paymentUrl) {
        clearCart(); // Clear the cart before redirecting
        window.location.href = data.paymentUrl;
      } else {
        console.error("Payment creation failed:", data);
        alert("Maksājuma izveide neizdevās. Lūdzu, mēģiniet vēlreiz.");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error calling payment function:", error);
      alert("Neizdevās sazināties ar maksājumu sistēmu.");
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#0B388A] p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
            <Link href="/" className="text-sm font-semibold text-gray-600 hover:text-[#0B388A] transition-colors">
              ← Atpakaļ uz galveno lapu
            </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 items-start">
            {/* Products List (Main column) */}
            <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <h1 className="text-3xl font-black mb-6 uppercase text-center lg:text-left">Produktu Izvēle</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {products.map(product => (
                        <div key={product.id} className="flex justify-between items-center gap-4 p-4 rounded-xl border bg-gray-50/50 hover:shadow-md transition-shadow">
                            <div>
                                <h3 className="font-semibold text-base">{product.name}</h3>
                                <p className="text-gray-800 font-bold text-lg">€{product.price.toFixed(2)}</p>
                            </div>
                            <button 
                                onClick={() => addItem(product)} 
                                className="bg-[#0B388A] text-white px-5 py-2 rounded-full font-bold hover:bg-blue-800 transition-colors text-sm shrink-0"
                            >
                                Pievienot
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Order Summary (Sidebar) */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col sticky top-8 mt-8 lg:mt-0">
                <h2 className="text-2xl font-bold mb-4 border-b pb-3">Pasūtījuma kopsavilkums</h2>
                <div className="flex-grow space-y-4 min-h-[200px]">
                {items.length === 0 ? (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-gray-500 italic text-center">Grozs ir tukšs.</p>
                    </div>
                ) : (
                    items.map(item => (
                    <div key={item.id} className="flex justify-between items-start text-base">
                        <div>
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-sm text-gray-500">Daudzums: {item.quantity}</p>
                        </div>
                        <div className="flex items-center gap-3">
                             <p className="font-bold text-right">€{(item.price * item.quantity).toFixed(2)}</p>
                             <button onClick={() => removeItem(item.id)} title="Noņemt preci">
                                 <TrashIcon />
                             </button>
                        </div>
                    </div>
                    ))
                )}
                </div>
                
                <div className="border-t-2 border-gray-200 mt-6 pt-4">
                    <div className="flex justify-between items-center text-2xl font-bold text-gray-900 mb-6">
                        <span>Kopā:</span>
                        <span>€{total.toFixed(2)}</span>
                    </div>
                    <button 
                        onClick={handlePayment} 
                        className="w-full bg-green-500 text-white py-4 rounded-full text-xl font-bold hover:bg-green-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        disabled={items.length === 0 || isLoading}
                    >
                         {isLoading ? "Apstrādā..." : "Veikt Apmaksu"}
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

