"use client"
// FILE: app/page.tsx
// This is a minimal test component to verify the build process.

import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '200px', textAlign: 'center' }}>
        <h1 style={{ color: 'white', fontSize: '48px' }}>
          Тестовая страница работает!
        </h1>
        <p style={{ color: 'white', fontSize: '24px', marginTop: '20px' }}>
          Сборка прошла успешно.
        </p>
      </div>
    </div>
  );
}