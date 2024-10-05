import { Montserrat } from "next/font/google";
import seoConfig from "../../seo.config";
import "./globals.css";

import { ViewTransitions } from "next-view-transitions";
import { ProgressBar, ProgressBarProvider } from "react-transition-progress";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppProviders from "./components/AppProviders";

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})

export const metadata = seoConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={montserrat.className}>
          <ProgressBarProvider>
            <ProgressBar className="fixed z-[100] h-1 shadow-lg shadow-native/20 bg-native top-0" />
            <AppProviders>
              <Navbar />
              {children}
              <Footer />
            </AppProviders>
          </ProgressBarProvider>
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
