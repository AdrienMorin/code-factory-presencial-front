import Navbar from "@/components/molecules/bars/Navbar";
import SearchBar from "@/components/molecules/bars/SearchBar";
import FlightCard from "@/components/molecules/cards/FlightCard";
import React from "react";

function FlightsHome() {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <Navbar />
      <SearchBar />
      <FlightCard />
    </div>
  );
}

export default FlightsHome;
