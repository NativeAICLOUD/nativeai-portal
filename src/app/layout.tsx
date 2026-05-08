import { Montserrat } from "next/font/google";
import type { Viewport } from "next";
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

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
            <ProgressBar className="fixed z-[9999] top-0 left-0 h-[3px] bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#f5b87a] shadow-[0_0_12px_rgba(232,154,120,0.7),0_0_4px_rgba(232,154,120,0.5)] rounded-full" />
            <AppProviders>
              <div style={{ width: '100%', maxWidth: '100vw', overflowX: 'clip', overflowY: 'visible', position: 'relative' }}>
                <Navbar />
                {children}
                <Footer />
              </div>
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
