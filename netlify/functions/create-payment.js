// FILE: netlify/functions/create-payment.js

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    // 1. ПОЛУЧАЕМ ВСЕ ДАННЫЕ ИЗ ЗАПРОСА
    // Было: const { amount, orderId } = JSON.parse(event.body);
    const { amount, orderId, customer, shipping } = JSON.parse(event.body); // Стало

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
      // 2. ДОБАВЛЯЕМ ИНФОРМАЦИЮ О КЛИЕНТЕ
      customer: {
        email: customer.email,
        phone: customer.phone,
        firstname: customer.name.split(' ')[0], // Берем первое слово как имя
        lastname: customer.name.split(' ').slice(1).join(' '), // Все остальное как фамилия
        country: "LV",
        // Указываем IP адрес для дополнительной безопасности (рекомендуется)
        ip: event.headers['x-nf-client-connection-ip'], 
      },
    };

    const authHeader = `Basic ${Buffer.from(`${apiKey}:${secretKey}`).toString('base64')}`;

    const response = await fetch("https://api.makecommerce.net/v1/payments", {
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