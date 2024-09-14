import Navbar from "@/components/molecules/bars/Navbar";
import SearchBar from "@/components/molecules/bars/SearchBar";
import FlightCard from "@/components/molecules/cards/FlightCard";
import FooterCopy from "@/components/molecules/FooterCopy";
import { Button } from "@/components/ui/button";
import { BadgePlus } from "lucide-react";
import Link from "next/link";
import React from "react";

function FlightsHome() {
  return (
    <div className="flex flex-col h-full w-full">
      <Navbar />
      <SearchBar />
      <section className="flex flex-col">
        <div className="flex justify-end px-4">
          <Link href="/gestion-de-vuelos-A/vuelos/registro">
            <Button variant="ghost" size="lg" className="flex gap-1">
              <BadgePlus /> Registrar vuelo
            </Button>
          </Link>
        </div>
        <FlightCard />
      </section>
      <FooterCopy />
    </div>
  );
}

export default FlightsHome;
