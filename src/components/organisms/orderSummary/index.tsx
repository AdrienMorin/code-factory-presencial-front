import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Icon } from '@iconify/react';
import {transformDate} from "@/utils/dateUtils"; // Iconos de Iconify

interface FlightDetails {
  date: string;
  departureTime: string;
  arrivalTime: string;
  departureAirport: string;
  arrivalAirport: string;
  duration: string;
  flightNumber: string;
  class: string;
  stops: string; // Variable "stops"
}

interface Prices {
  ticketPrice: number;
  taxes: number;
  otherServices: number;
  total: number;
}

interface OrderSummaryData {
  prices: Prices;
  flightInfo: {
    departure: FlightDetails;
    return?: FlightDetails;
  };
}

// Función para obtener el color basado en la clase
const getClassColor = (flightClass: string) => {
  switch (flightClass.toLowerCase()) {
    case 'básico':
      return 'bg-gray-300 text-black';
    case 'golden':
      return 'bg-yellow-400 text-white';
    default:
      return 'bg-gray-200 text-black';
  }
};

// Función para manejar paradas o vuelo directo
const getStopDescription = (stops: string) => {
  if (stops === "directFly") {
    return "vuelo directo";
  }
  return stops; // Si es un vuelo con múltiples paradas, retorna el texto tal cual
};

interface FlightInfo {
  id: number;
  flight: {
    id: number;
    departure_date: string;
    departure_time: string;
    arrival_time: string;
    departure_airport: string;
    arrival_airport: string;
    duration: string;
    flight_number: string;
    flight_class: string;
    stops: string;
  };
}

interface BookingCardProps {
  id: number;
  is_paid: boolean;
  price: number;
  additional_charge: number;
  flight_infos: FlightInfo[];
}

interface OrderSummaryProps {
  orderData: BookingCardProps;
}

// Funcion para generar la información de un vuelo
const renderFlight = (flightInfo: FlightInfo) => {
  return (
      <div className="bg-gray-200 p-4 rounded-lg shadow-md">
        {/* Header for the flight */}
        <div className="flex items-center justify-center">
          <div className="flex items-center">
            <p className="font-medium">{transformDate(flightInfo.flight.departure_date)}</p>
          </div>
        </div>

        {/* Main Flight Info with 3 sections */}
        <div className="flex justify-between items-center mt-4">
          {/* Parte 1 - Salida */}
          <div className="flight-part-1 text-center">
            <p className="font-semibold">{flightInfo.flight.departure_airport}</p>
            <p className="text-lg">{flightInfo.flight.departure_time}</p>
          </div>

          {/* Parte 2 - Central (Íconos y descripción) */}
          <div className="flight-part-2 flex items-center justify-center">
            {/* Iconos de los aviones */}
            <div className="flex items-center flex-col">
              <div className='flex flex-row w-full justify-between'>
                <Icon icon="arcticons:emoji-airplane-departure" className="text-4xl text-black text-left" />
                <Icon icon="arcticons:emoji-airplane-arriving" className="text-4xl text-black text-right" />
              </div>
              <div className="flex flex-col items-center mx-2">
                <p className="text-sm">{getStopDescription(flightInfo.flight.stops)}</p>
                <p className="text-sm">{flightInfo.flight.duration}</p>
              </div>
            </div>
          </div>

          {/* Parte 3 - Llegada */}
          <div className="flight-part-3 text-center">
            <p className="font-semibold">{flightInfo.flight.arrival_airport}</p>
            <p className="text-lg">{flightInfo.flight.arrival_time}</p>
          </div>
        </div>

        {/* Class and Flight Number */}
        <div className="flex items-center mt-4 justify-center">
        <span className={`rounded-full px-3 py-1 text-xs ${getClassColor(flightInfo.flight.flight_class)}`}>
          {flightInfo.flight.flight_class}
        </span>
          <p className="font-semibold ml-2">
            {flightInfo.flight.flight_number}
          </p>
        </div>
      </div>
  );
};

export function OrderSummary({ orderData }: OrderSummaryProps) {
  console.log(orderData);

  if (!orderData) {
    return <div>Loading...</div>;
  }

  return (
      <Card className="w-full bg-gray-200 p-4">
        <CardHeader>
          <CardTitle className="text-lg font-bold">Resumen de compra</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>Precio de tickets</span>
              <span>{orderData.price.toLocaleString('es-CO')} COP</span>
            </li>
            <li className="flex justify-between">
              <span>Impuestos y cargos</span>
              <span>{orderData.additional_charge.toLocaleString('es-CO')} COP</span>
            </li>
            <Separator className="my-2" />
            <li className="flex justify-between font-bold">
              <span>Total</span>
              <span>{(orderData.price + orderData.additional_charge).toLocaleString('es-CO')} COP</span>
            </li>
          </ul>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold text-lg">INFO</h4>
            <div className="mt-2 text-sm space-y-4">
              {orderData.flight_infos.map((flightInfo, index) => (
                  <React.Fragment key={index}>
                    {renderFlight(flightInfo)}
                    {index < orderData.flight_infos.length - 1 && <Separator className="my-2" />}
                  </React.Fragment>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
  );
}

export default OrderSummary;
