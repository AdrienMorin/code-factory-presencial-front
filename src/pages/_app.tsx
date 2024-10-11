// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/equipajes/home">Home</Link>
          </li>
          <li>
            <Link href="/equipajes/agregarequipaje">Agregar Equipaje</Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  );
}
