"use client"

import AccordionsSection from "@/components/organisms/AccordionsSection/index";
import Details from "@/components/organisms/Details";
import MainButton from "@/components/atoms/MainButton/index";
import Modal from '@/components/templates/Modal/index'

import CardHeader from "@/components/molecules/CardHeader/index";
import TotalPrice from "@/components/molecules/TotalPrice/index";
import { useState } from "react";

const index = () => {
  const [modalState, setModalState] = useState(true);

  const {
    origin,
    destination,
    originBack,
    destinationBack,
    adultsNumber,
    childrenNumber,
    goBack,
  } = {
    origin: {
      city: "Bogotá",
      country: "Colombia",
      code: "BOG",
      airport: "El Dorado International Airport",
      timeInFLy: "6h 30m",
      departureDate: "2024-11-01",
      departureTime: "08:30 AM",
    },
    destination: {
      city: "New York",
      country: "USA",
      code: "JFK",
      airport: "John F. Kennedy International Airport",
      arrivalDate: "2024-11-01",
      arrivalTime: "03:00 PM",
    },
    originBack: {
      city: "New York",
      country: "USA",
      code: "JFK",
      airport: "John F. Kennedy International Airport",
      timeInFLy: "6h 15m",
      departureDate: "2024-11-10",
      departureTime: "10:00 AM",
    },
    destinationBack: {
      city: "Bogotá",
      country: "Colombia",
      code: "BOG",
      airport: "El Dorado International Airport",
      arrivalDate: "2024-11-10",
      arrivalTime: "04:15 PM",
    },
    adultsNumber: 2,
    childrenNumber: 1,
    goBack: true,
  };

  return (
    <div className="shadow-lg rounded-[6px]">
      <div className="p-16 py-6">
        <div className="p-4 flex flex-col sm:flex-row sm:justify-between items-center gap-4">
          <CardHeader />
          <MainButton
            text="Ver mas"
            handleClick={() => console.log("Button clicked")}
          />
        </div>
        <div className="p-4">
          <Details
            origin={origin}
            originBack={originBack}
            destination={destination}
            destinationBack={destinationBack}
            adultsNumber={adultsNumber}
            childrenNumber={childrenNumber}
            goBack={goBack}
          />
        </div>
        <div className="p-4">
          <AccordionsSection />
        </div>
      </div>
      <TotalPrice total={243.408} />
      <Modal modalState={modalState} onClose={() => setModalState(false)} >
        MOdal
      </Modal>
    </div>
  );
};

export default index;
