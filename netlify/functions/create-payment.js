// FILE: netlify/functions/create-payment.js

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { amount, orderId, customer } = JSON.parse(event.body);

    const apiKey = process.env.MAKSEKESKUS_API_KEY;
    const secretKey = process.env.MAKSEKESKUS_SECRET_KEY;

    if (!apiKey || !secretKey) {
      console.error("API keys are not configured in Netlify environment variables.");
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Payment provider is not configured correctly." }),
      };
    }

    const paymentData = {
      transaction: {
        amount: Math.round(amount * 100),
        currency: "EUR",
        reference: orderId,
      },
      customer: {
        email: customer.email,
        phone: customer.phone,
        firstname: customer.name.split(' ')[0],
        lastname: customer.name.split(' ').slice(1).join(' '),
        country: "LV",
        ip: event.headers['x-nf-client-connection-ip'],
      },
    };

    const authHeader = `Basic ${Buffer.from(`${apiKey}:${secretKey}`).toString('base64')}`;

    // ИСПРАВЛЕННАЯ СТРОКА:
    // Было: "https://api.makecommerce.net/v1/payments"
    // Стало: "https://api.maksekeskus.ee/v1/payments"
    const response = await fetch("https://api.maksekeskus.ee/v1/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": authHeader,
      },
      body: JSON.stringify(paymentData),
    });

    const responseData = await response.json();

    if (response.ok && responseData.payment_url) {
      return {
        statusCode: 200,
        body: JSON.stringify({ paymentUrl: responseData.payment_url }),
      };
    } else {
      console.error("MakeCommerce API error:", responseData);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: "Failed to create payment.", details: responseData }),
      };
    }
  } catch (error) {
    console.error("Internal server error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An internal error occurred." }),
    };
  }
};