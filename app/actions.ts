"use server"
// FILE: app/actions.ts

// This is a server-side function. It will never run in the user's browser.
// Its purpose is to securely handle the form submission data.

export async function submitForm(formData: FormData) {
  
  // This is a helper function to format the data correctly for Netlify's servers.
  // It turns our form data (e.g., { email: "test@example.com" }) into a string like "email=test%40example.com".
  const encode = (data: { [key: string]: any }) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  try {
    // We send the formatted data to Netlify's form submission endpoint.
    // Netlify automatically provides the correct URL in the `process.env.URL` variable.
    await fetch(process.env.URL || "http://localhost:3000", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "newsletter", // This name must match the 'name' attribute in your <form> tag
        ...Object.fromEntries(formData),
      }),
    });
  } catch (error) {
    // If there's a network error or Netlify's servers are down, we log it.
    console.error("Form submission error:", error);
    // In a real application, you might want to handle this error more gracefully.
  }
  
  // We no longer redirect the user. The function now just submits the data and finishes.
  // The popup notification is handled on the client-side in NewsletterForm.tsx.
}
