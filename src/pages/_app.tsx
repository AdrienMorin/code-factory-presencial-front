import Navbar from "@/components/molecules/Navbar";
import { ToastProvider } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </ToastProvider>
  );
}
