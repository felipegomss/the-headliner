"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Title from "@/components/title";
import { queryClient } from "@/services/queryClient";
import { QueryClientProvider } from "react-query";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Title />
          {children}
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
