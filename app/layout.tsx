import { ReactNode } from "react";
import "@/styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Providers from "./providers";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen font-sans text-gray-900">
        <Providers>
          <Header />
          <main className="max-w-7xl mx-auto px-6 py-16">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
