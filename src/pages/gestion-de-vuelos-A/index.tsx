import AdminInfo from "@/components/molecules/AdminInfo";
import FooterCopy from "@/components/molecules/FooterCopy";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function HomePage() {
  return (
    <main className="h-screen bg-gradient-to-b from-emerald-600 to-emerald-900 to-95% font-sans text-white flex flex-col justify-between">
      <Head>
        <title>Gestión de vuelos A</title>
      </Head>
      <header className="flex justify-end gap-4 items-center p-4">
        <AdminInfo />
      </header>

      <div className="flex flex-col items-center justify-center gap-6">
        <figure className="w-48 h-48">
          <Image
            src="/avion.png"
            height={200}
            width={200}
            alt="Logo de Singapur Airlines"
            className="object-contain w-full"
            quality={100}
            priority
          />
        </figure>
        <h1 className="text-5xl font-extrabold select-none">
          Singapur Airlines
        </h1>
        <h4 className="text-xl font-semibold select-none">
          Gestión de vuelos A
        </h4>
        <div className="flex gap-8">
          <Button className="w-36">
            <Link href="/gestion-de-vuelos-A/vuelos">Vuelos</Link>
          </Button>
          <Button className="w-36">
            <Link href="/gestion-de-vuelos-A/aeronaves">Aeronaves</Link>
          </Button>
        </div>
      </div>

      <FooterCopy />
    </main>
  );
}

export default HomePage;
