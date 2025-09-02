// FILE: components/icons/index.tsx
// This file will store all our SVG icon components.

import React from 'react';

export const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="#0B388A" strokeWidth="2" fill="none" />
    <line x1="12" y1="18" x2="12.01" y2="18" stroke="#0B388A" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const UploadIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="#0B388A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="7,10 12,15 17,10" stroke="#0B388A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="12" y1="15" x2="12" y2="3" stroke="#0B388A" strokeWidth="2" />
  </svg>
);

export const PaymentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" stroke="#0B388A" strokeWidth="2" fill="none" />
    <line x1="1" y1="10" x2="23" y2="10" stroke="#0B388A" strokeWidth="2" />
  </svg>
);

export const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polyline points="20,6 9,17 4,12" stroke="#0B388A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#0B388A" strokeWidth="2" fill="none" />
  </svg>
);

export const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#0B388A" strokeWidth="2" fill="none" />
    <circle cx="12" cy="10" r="3" stroke="#0B388A" strokeWidth="2" fill="none" />
  </svg>
);

export const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#0B388A" strokeWidth="2" fill="none" />
    <polyline points="22,6 12,13 2,6" stroke="#0B388A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PhoneContactIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#0B388A" strokeWidth="2" fill="none" />
  </svg>
);

