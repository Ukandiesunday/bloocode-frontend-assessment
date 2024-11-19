import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FavoriteProvider } from "../context/FavoriteContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Library",
  description: "This is a movie Library website ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <FavoriteProvider>
          <ToastContainer />

          {children}
        </FavoriteProvider>
        <Footer />
      </body>
    </html>
  );
}
