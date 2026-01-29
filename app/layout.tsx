import { ReactNode } from "react";
import "@/styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Providers from "./providers";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50 font-sans text-gray-900">
        <Providers>
          <Header />

          {/* Main stretches full width */}
          <main className="grow w-full py-16">
            {/* Inner container with max width */}
            <div className="max-w-7xl mx-auto px-6">{children}</div>
          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
