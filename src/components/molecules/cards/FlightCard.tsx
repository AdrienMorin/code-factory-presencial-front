import { Button } from "@/components/ui/button";
import { CircleEllipsis, Pencil, X } from "lucide-react";
import React from "react";

const FlightCard = () => {
  const flights = [
    {
      flightType: "Vuelo Nacional",
      flightCode: "A-123",
      departure: "MDE",
      arrival: "BOG",
      departureTime: "10:00 A.M",
      arrivalTime: "12:00 P.M",
      departureDate: "2022/12/31",
      arrivalDate: "2022/12/31",
    },
    {
      flightType: "Vuelo Nacional",
      flightCode: "A-124",
      departure: "MDE",
      arrival: "BOG",
      departureTime: "10:00 A.M",
      arrivalTime: "12:00 P.M",
      departureDate: "2024/12/24",
      arrivalDate: "2024/12/25",
    },
    {
      flightType: "Vuelo Nacional",
      flightCode: "A-125",
      departure: "BOG",
      arrival: "MDE",
      departureTime: "10:00 A.M",
      arrivalTime: "12:00 P.M",
      departureDate: "2024/12/25",
      arrivalDate: "2024/12/26",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 px-4">
      {flights.map((flight, index) => (
        <div
          key={index}
          className="w-full max-w-3xl border border-slate-300 shadow-lg rounded-lg p-6 flex flex-col gap-4"
        >
          {/* Tipo de vuelo en la esquina superior izquierda */}
          <div className="flex justify-between">
            <span className="text-sm font-semibold text-gray-500">
              {flight.flightType}
            </span>
          </div>

          {/* Código del vuelo centrado */}
          <h2 className="text-2xl font-bold text-center">
            {flight.flightCode}
          </h2>

          {/* Detalles divididos en dos columnas */}
          <div className="flex justify-between gap-8">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold">Origen</span>
              <span>{flight.departure}</span>
              <span className="text-sm font-semibold">Fecha de salida</span>
              <span>
                {flight.departureDate} - {flight.departureTime}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold">Destino</span>
              <span>{flight.arrival}</span>
              <span className="text-sm font-semibold">Fecha de llegada</span>
              <span>
                {flight.arrivalDate} - {flight.arrivalTime}
              </span>
            </div>
          </div>

          {/* Botones al final */}
          <div className="flex justify-end gap-2">
            <Button
              variant="secondary"
              className="flex gap-1 items-center justify-center"
            >
              <CircleEllipsis />
              Ver más
            </Button>
            <Button
              variant="default"
              className="flex gap-1 items-center justify-center"
            >
              <Pencil /> Editar
            </Button>
            <Button
              variant="destructive"
              className="flex gap-1 items-center justify-center"
            >
              <X />
              Eliminar
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlightCard;
