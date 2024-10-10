import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Icon } from '@iconify/react'; // Iconos de Iconify

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

export function OrderSummary() {
  const [orderData, setOrderData] = useState<{ orderSummary: OrderSummaryData } | null>(null);

  // Simulación de petición HTTP (Mock API)
  useEffect(() => {
    const fetchOrderData = async () => {
      // Mock de respuesta de API
      const response = {
        orderSummary: {
          prices: {
            ticketPrice: 349900,
            taxes: 50000,
            otherServices: 10000,
            total: 409900
          },
          flightInfo: {
            departure: {
              date: "2024-09-20",
              departureTime: "10:30 AM",
              arrivalTime: "11:30 AM",
              departureAirport: "MDE",
              arrivalAirport: "BOG",
              duration: "1h 00m",
              flightNumber: "AV9617",
              class: "Básico",
              stops: "directFly"
            },
            return: {
              date: "2024-09-24",
              departureTime: "7:30 PM",
              arrivalTime: "8:30 PM",
              departureAirport: "BOG",
              arrivalAirport: "MDE",
              duration: "1h 45m",
              stops: "1 parada | CAR",
              flightNumber: "AV8902395",
              class: "Golden"
            }
          }
        }
      };

      // Simulación de demora de la API
      setTimeout(() => {
        setOrderData(response);
      }, 1000);
    };

    fetchOrderData();
  }, []);

  if (!orderData) {
    return <div>Cargando resumen de compra...</div>; // Simulación de loading
  }

  const { prices, flightInfo } = orderData.orderSummary;

  return (
    <Card className="w-full bg-gray-200 p-4">
      <CardHeader>
        <CardTitle className="text-lg font-bold">Resumen de compra</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Precio de tickets</span>
            <span>{prices.ticketPrice.toLocaleString('es-CO')} COP</span>
          </li>
          <li className="flex justify-between">
            <span>Impuestos y cargos</span>
            <span>{prices.taxes.toLocaleString('es-CO')} COP</span>
          </li>
          <li className="flex justify-between">
            <span>Otros servicios</span>
            <span>{prices.otherServices.toLocaleString('es-CO')} COP</span>
          </li>
          <Separator className="my-2" />
          <li className="flex justify-between font-bold">
            <span>Total</span>
            <span>{prices.total.toLocaleString('es-CO')} COP</span>
          </li>
        </ul>
        <Separator className="my-4" />
        <div>
          <h4 className="font-semibold text-lg">INFO</h4>
          <div className="mt-2 text-sm space-y-4">
            
          <div className="mt-2 text-sm space-y-4">
          {/* Vuelo de salida */}
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            {/* Header for the departure flight */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <p className="font-medium">Vuelo de salida | {flightInfo.departure.date}</p>
              </div>
            </div>

            {/* Main Flight Info with 3 sections */}
            <div className="flex justify-between items-center mt-4">
              {/* Parte 1 - Salida */}
              <div className="flight-part-1 text-center">
                <p className="font-semibold">{flightInfo.departure.departureAirport}</p>
                <p className="text-lg">{flightInfo.departure.departureTime}</p>
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
                    <p className="text-sm">{getStopDescription(flightInfo.departure.stops)}</p>
                    <p className="text-sm">{flightInfo.departure.duration}</p>
                  </div>
                </div>
              </div>

              {/* Parte 3 - Llegada */}
              <div className="flight-part-3 text-center">
                <p className="font-semibold">{flightInfo.departure.arrivalAirport}</p>
                <p className="text-lg">{flightInfo.departure.arrivalTime}</p>
              </div>
            </div>

            {/* Class and Flight Number */}
            <div className="flex items-center mt-4">
              <span className={`rounded-full px-3 py-1 text-xs ${getClassColor(flightInfo.departure.class)}`}>
                {flightInfo.departure.class}
              </span>
              <p className="font-semibold ml-2">
                {flightInfo.departure.flightNumber}
              </p>
            </div>
          </div>
        </div>


            <Separator className="my-2" />

            {/* Check if the return flight exists */}
            {flightInfo.return && (
              <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                {/* Header for the return flight */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="font-medium">Vuelo de regreso | {flightInfo.return.date}</p>
                  </div>
                </div>

                {/* Main Flight Info with 3 sections */}
                <div className="flex justify-between items-center mt-4">
                  {/* Parte 1 - Salida */}
                  <div className="flight-part-1 text-center">
                    <p className="font-semibold">{flightInfo.return.departureAirport}</p>
                    <p className="text-lg">{flightInfo.return.departureTime}</p>
                  </div>

                  {/* Parte 2 - Central (Íconos y descripción) */}
                  <div className="flight-part-2 flex items-center justify-center ">
                    {/* Iconos de los aviones */}
                    
                    <div className="flex items-center flex-col w-full">
                      <div className='flex flex-row w-full justify-between'>
                        <Icon icon="arcticons:emoji-airplane-departure" className="text-4xl text-black text-left" />
                        <Icon icon="arcticons:emoji-airplane-arriving" className="text-4xl text-black text-right" />
                      </div>
                      <div className="flex flex-col items-center mx-2">
                        <p className="text-sm">{getStopDescription(flightInfo.return.stops)}</p>
                        <p className="text-sm">{flightInfo.return.duration}</p>
                      </div>
                    </div>
                  </div>

                  {/* Parte 3 - Llegada */}
                  <div className="flight-part-3 text-center">
                    <p className="font-semibold">{flightInfo.return.arrivalAirport}</p>
                    <p className="text-lg">{flightInfo.return.arrivalTime}</p>
                  </div>
                </div>

                {/* Class and Flight Number */}
                <div className="flex items-center mt-4">
                  <span className={`rounded-full px-3 py-1 text-xs ${getClassColor(flightInfo.return.class)}`}>
                    {flightInfo.return.class}
                  </span>
                  <p className="font-semibold ml-2">
                    {flightInfo.return.flightNumber}
                  </p>
                </div>
              </div>
            )}


          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default OrderSummary;
