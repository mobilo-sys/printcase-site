"use client"
// FILE: app/checkout/page.tsx

// Import the custom hook to interact with the cart
import { useCart } from "@/hooks/use-cart"
// Import the product list from our data file
import { products } from "@/lib/products"
// Import the router to redirect the user to the payment page
import { useRouter } from "next/navigation"
// Import the language hook for translations
import { useLanguage } from "@/hooks/use-language"
import { useState } from "react"

// This is the main component for the checkout page
export default function CheckoutPage() {
  const cart = useCart()
  const router = useRouter()
  const { t } = useLanguage() // Using the translation function
  const [isLoading, setIsLoading] = useState(false);

  // This function handles the entire payment process
  async function handlePayment() {
    // Check if the cart is empty before proceeding
    if (cart.items.length === 0) {
      alert("Grozs ir tukšs!"); // This can be translated as well
      return;
    }

    setIsLoading(true); // Disable button to prevent multiple clicks

    // Prepare the order details to send to the serverless function
    const orderDetails = {
      amount: cart.total,
      orderId: `PC-${Date.now()}`, // Generate a simple unique order ID
    };

    try {
      // Show a loading or processing state to the user
      console.log("Creating payment...");

      // Call our serverless function to create a payment link
      const response = await fetch('/.netlify/functions/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderDetails)
      });
      
      const data = await response.json();

      // If we successfully get a payment URL, redirect the user to it
      if (data.paymentUrl) {
        window.location.href = data.paymentUrl;
      } else {
        // Log the error and inform the user if something went wrong
        console.error("Payment creation failed:", data);
        alert("Maksājuma izveide neizdevās. Lūdzu, mēģiniet vēlreiz.");
        setIsLoading(false);
      }
    } catch (error) {
      // Handle network errors or if the function fails to execute
      console.error("Error calling payment function:", error);
      alert("Neizdevās sazināties ar maksājumu sistēmu.");
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#0B388A] p-4 sm:p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-black text-center mb-8 uppercase">
          Pasūtījuma noformēšana
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Products List */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold mb-4 border-b pb-3">Produkti</h2>
                <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                    {products.map(product => (
                        <div key={product.id} className="flex justify-between items-center">
                            <div>
                                <h3 className="font-semibold text-lg">{product.name}</h3>
                                <p className="text-gray-600 font-bold text-lg">€{product.price.toFixed(2)}</p>
                            </div>
                            <button 
                                onClick={() => cart.addItem(product)} 
                                className="bg-[#0B388A] text-white px-4 py-2 rounded-full font-bold hover:bg-blue-800 transition-colors text-sm"
                            >
                                Pievienot
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Order Summary */}
            <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col">
                <h2 className="text-2xl font-bold mb-4 border-b pb-3">Tavs grozs</h2>
                <div className="flex-grow space-y-3 min-h-[150px]">
                {cart.items.length === 0 ? (
                    <p className="text-gray-500 italic text-center py-10">Grozs ir tukšs.</p>
                ) : (
                    cart.items.map(item => (
                    <div key={item.id} className="flex justify-between items-center text-lg">
                        <div>
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-sm text-gray-500">Daudzums: {item.quantity}</p>
                        </div>
                        <p className="font-bold">€{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    ))
                )}
                </div>
                
                <div className="border-t-2 border-gray-200 mt-6 pt-4">
                    <div className="flex justify-between items-center text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                        <span>Kopā:</span>
                        <span>€{cart.total.toFixed(2)}</span>
                    </div>
                    <button 
                        onClick={handlePayment} 
                        className="w-full bg-green-500 text-white py-4 rounded-full text-xl font-bold hover:bg-green-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                        disabled={cart.items.length === 0 || isLoading}
                    >
                        {isLoading ? "Apstrādā..." : "Pāriet uz apmaksu"}
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

