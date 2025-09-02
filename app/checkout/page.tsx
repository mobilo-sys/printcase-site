"use client"
// FILE: app/checkout/page.tsx

import { useCart } from "@/hooks/use-cart"
import { products } from "@/lib/products"
import { useRouter } from "next/navigation"

// This is the checkout page component
export default function CheckoutPage() {
  const cart = useCart()
  const router = useRouter()

  // This function handles the payment process
  async function handlePayment() {
    if (cart.items.length === 0) {
      alert("Ваша корзина пуста!");
      return;
    }

    // Creating a simple description for the payment
    const itemNames = cart.items.map(item => item.name).join(', ');
    const orderDetails = {
      amount: cart.total,
      orderId: `PC-${Date.now()}`, // Simple unique order ID
      description: itemNames,
    };

    try {
      // Call our own serverless function to create a payment link
      const response = await fetch('/.netlify/functions/create-payment', {
        method: 'POST',
        body: JSON.stringify(orderDetails)
      });
      
      const data = await response.json();

      // If we get a payment URL, redirect the user to it
      if (data.paymentUrl) {
        router.push(data.paymentUrl);
      } else {
        console.error("Payment creation failed:", data);
        alert("Произошла ошибка при создании платежа. Попробуйте снова.");
      }
    } catch (error) {
      console.error("Error calling payment function:", error);
      alert("Не удалось связаться с платежной системой.");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Оформление заказа</h1>

        {/* This is a simple product list for demonstration */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Доступные товары</h2>
          {products.map(product => (
            <div key={product.id} className="flex justify-between items-center mb-2 p-2 border rounded">
              <span className="text-gray-800">{product.name} - €{product.price.toFixed(2)}</span>
              <button onClick={() => cart.addItem(product)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                Добавить в корзину
              </button>
            </div>
          ))}
        </div>
        
        {/* This section displays the cart items */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Ваша корзина</h2>
          {cart.items.length === 0 ? (
            <p className="text-gray-500">Корзина пуста.</p>
          ) : (
            cart.items.map(item => (
              <div key={item.id} className="flex justify-between items-center mb-2">
                <span className="text-gray-800">{item.name} x {item.quantity}</span>
                <span className="text-gray-800">€{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))
          )}
        </div>
        
        {/* Total and Payment button */}
        <div className="border-t pt-6">
          <div className="flex justify-between items-center text-2xl font-bold text-gray-800 mb-6">
            <span>Итого:</span>
            <span>€{cart.total.toFixed(2)}</span>
          </div>
          <button 
            onClick={handlePayment} 
            className="w-full bg-green-500 text-white py-3 rounded-lg text-xl font-bold hover:bg-green-600 transition-colors disabled:bg-gray-400"
            disabled={cart.items.length === 0}
          >
            Оплатить через MakeCommerce
          </button>
        </div>
      </div>
    </div>
  )
}
