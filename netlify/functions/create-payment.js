// FILE: netlify/functions/create-payment.js

// This serverless function creates a payment link with MakeCommerce.
// It runs on Netlify's servers, not in the user's browser.

exports.handler = async (event) => {
  // We only allow POST requests to this function for security.
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    // Get the order details sent from the checkout page.
    const { amount, orderId } = JSON.parse(event.body);

    // Securely get your API keys from Netlify's environment variables.
    const apiKey = process.env.MAKSEKESKUS_API_KEY;
    const secretKey = process.env.MAKSEKESKUS_SECRET_KEY;

    // Check if the keys are configured in Netlify.
    if (!apiKey || !secretKey) {
      console.error("API keys are not configured in Netlify environment variables.");
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Payment provider is not configured correctly." }),
      };
    }

    // Prepare the data to send to the MakeCommerce API.
    const paymentData = {
      transaction: {
        amount: Math.round(amount * 100), // Amount must be in cents (integers).
        currency: "EUR",
        reference: orderId,
      },
      customer: {
        // Customer details can be added here if needed.
        country: "LV",
      },
    };

    // Create the authorization header using your keys.
    const authHeader = `Basic ${Buffer.from(`${apiKey}:${secretKey}`).toString('base64')}`;

    // Make the secure, server-to-server request to MakeCommerce.
    const response = await fetch("https://api.makecommerce.net/v1/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": authHeader,
      },
      body: JSON.stringify(paymentData),
    });

    const responseData = await response.json();

    // If the request was successful and we got a payment URL, send it back to the website.
    if (response.ok && responseData.payment_url) {
      return {
        statusCode: 200,
        body: JSON.stringify({ paymentUrl: responseData.payment_url }),
      };
    } else {
      // If something went wrong, log the error and send back a failure message.
      console.error("MakeCommerce API error:", responseData);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: "Failed to create payment.", details: responseData }),
      };
    }
  } catch (error) {
    // Handle any unexpected errors.
    console.error("Internal server error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An internal error occurred." }),
    };
  }
};

