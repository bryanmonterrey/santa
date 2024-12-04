import React from "react";
import { ClientProviders } from './providers/ClientProviders';
import ClientLayout from './ClientLayout';
import "./globals.css";
import { metadata } from './metadata';

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="antialiased bg-[#11111A] text-white relative">
        <ClientProviders>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ClientProviders>
      </body>
    </html>
  );
}