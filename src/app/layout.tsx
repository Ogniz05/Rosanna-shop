import "../styles/reset.css";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Shop Rosa",
  description: "Moda contemporanea e femminile — Shop Rosa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className={inter.className}>
        <Navbar /> {/* ✅ qui viene caricata la navbar */}
        <main>{children}</main>
        <Footer /> {/* ✅ qui viene caricato il footer */}
      </body>
    </html>
  );
}
