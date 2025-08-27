// FILE: netlify/functions/create-payment.js

// This function will be triggered when a user wants to pay.
exports.handler = async (event, context) => {
  // Get the amount and other order data from the request
  const { amount, orderId } = JSON.parse(event.body);

  const apiKey = process.env.MAKSEKESKUS_API_KEY;
  const secretKey = process.env.MAKSEKESKUS_SECRET_KEY;

  // This is the data we will send to MakeCommerce
  const paymentData = {
    transaction: {
      amount: amount * 100, // Amount in cents
      currency: "EUR",
      reference: orderId, // Your internal order ID
    },
    customer: {
      // You can add customer details here
      country: "LV",
    },
  };

  try {
    // Make a request to MakeCommerce API
    const response = await fetch("https://api.makecommerce.net/v1/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authentication using your secret keys
        "Authorization": `Basic ${Buffer.from(`${apiKey}:${secretKey}`).toString('base64')}`,
      },
      body: JSON.stringify(paymentData),
    });

    const data = await response.json();

    // If successful, 'data' will contain the payment_url
    if (data.payment_url) {
      return {
        statusCode: 200,
        body: JSON.stringify({ paymentUrl: data.payment_url }),
      };
    } else {
      // Handle errors from MakeCommerce
      return { statusCode: 400, body: JSON.stringify(data) };
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};