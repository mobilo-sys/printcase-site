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

// This is the main component for the checkout page
export default function CheckoutPage() {
  const cart = useCart()
  const router = useRouter()
  const { t } = useLanguage() // Using the translation function

  // This function handles the entire payment process
  async function handlePayment() {
    // Check if the cart is empty before proceeding
    if (cart.items.length === 0) {
      alert("Ваша корзина пуста!"); // This can be translated as well
      return;
    }

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
        alert("Произошла ошибка при создании платежа. Попробуйте снова.");
      }
    } catch (error) {
      // Handle network errors or if the function fails to execute
      console.error("Error calling payment function:", error);
      alert("Не удалось связаться с платежной системой.");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800 border-b pb-4">
          Оформление заказа
        </h1>

        {/* This is a simple product list for demonstration */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Товары</h2>
          <div className="space-y-3">
            {products.map(product => (
              <div key={product.id} className="flex justify-between items-center p-3 border rounded-lg bg-gray-50">
                <span className="text-gray-800 font-medium">{product.name} - €{product.price.toFixed(2)}</span>
                <button 
                  onClick={() => cart.addItem(product)} 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  В корзину
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* This section displays the current cart items */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Ваша корзина</h2>
          {cart.items.length === 0 ? (
            <p className="text-gray-500 italic">Корзина пуста.</p>
          ) : (
            <div className="space-y-2">
              {cart.items.map(item => (
                <div key={item.id} className="flex justify-between items-center text-lg">
                  <span className="text-gray-800">{item.name} x {item.quantity}</span>
                  <span className="text-gray-800 font-medium">€{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Total and Payment button */}
        <div className="border-t-2 border-gray-200 pt-6">
          <div className="flex justify-between items-center text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            <span>Итого:</span>
            <span>€{cart.total.toFixed(2)}</span>
          </div>
          <button 
            onClick={handlePayment} 
            className="w-full bg-green-500 text-white py-4 rounded-lg text-xl font-bold hover:bg-green-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={cart.items.length === 0}
          >
            Оплатить через MakeCommerce
          </button>
        </div>
      </div>
    </div>
  )
}

