import Footer from "@/components/shared/Footer";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { plusJakartaSans } from "@/lib/font";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Medzy",
  description: "Experience clinical precision fused with organic warmth.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.className}  h-full antialiased`}
      data-theme="light"
    >
      <body className="min-h-full flex flex-col bg-[#E0F2F1]">
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer></Footer>

        <Toaster position="top-right" />
      </body>
    </html>
  );
}
