import Navbar from "@/components/molecules/bars/Navbar";
import SearchBar from "@/components/molecules/bars/SearchBar";
import FlightCard from "@/components/molecules/cards/FlightCard";
import FooterCopy from "@/components/molecules/FooterCopy";
import React from "react";

function FlightsHome() {
  return (
    <div className="flex flex-col h-full w-full">
      <Navbar />
      <SearchBar />
      <FlightCard />
      <FooterCopy />
    </div>
  );
}

export default FlightsHome;
