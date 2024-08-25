import { Inter } from "next/font/google";
import seoConfig from "../../seo.config";
import "./globals.css";

import { ViewTransitions } from "next-view-transitions";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = seoConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={8000}
            hideProgressBar={true}
            newestOnTop={false}
            rtl={false}
            draggable
            theme="light"
          />
        </body>
      </html>
    </ViewTransitions>
  );
}
