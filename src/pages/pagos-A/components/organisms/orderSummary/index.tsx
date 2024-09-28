import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface FlightDetails {
  date: string;
  departureTime: string;
  arrivalTime: string;
  departureAirport: string;
  arrivalAirport: string;
  duration: string;
  flightType?: string;
  flightNumber: string;
  class: string;
  stops?: string;
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

export function OrderSummary() {
  const [orderData, setOrderData] = useState<{ orderSummary: OrderSummaryData } | null>(null);

  // Simulación de petición HTTP Mock
  useEffect(() => {
    const fetchOrderData = async () => {
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
              flightType: "vuelo directo",
              flightNumber: "AV9617",
              class: "Básico"
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

      setTimeout(() => {
        setOrderData(response);
      }, 1000);
    };

    fetchOrderData();
  }, []);

  if (!orderData) {
    return <div>Cargando resumen de compra...</div>; 
  }

  const { prices, flightInfo } = orderData.orderSummary;

  return (
    <Card className="w-full bg-gray-200">
      <CardHeader>
        <CardTitle>Resumen de compra</CardTitle>
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
          <h4 className="font-semibold">INFO</h4>
          <div className="mt-2 text-sm space-y-2">
            <div>
              <p className="font-medium">Vuelo de salida</p>
              <p>{flightInfo.departure.date} | {flightInfo.departure.departureTime} - {flightInfo.departure.arrivalTime}</p>
              <p>{flightInfo.departure.departureAirport} → {flightInfo.departure.arrivalAirport} ({flightInfo.departure.flightType})</p>
              <div className="flex items-center">
                <span className={`rounded-full px-3 py-1 text-xs ${getClassColor(flightInfo.departure.class)}`}>
                  {flightInfo.departure.class}
                </span>
                <p className="font-semibold ml-2">{flightInfo.departure.flightNumber}</p>
              </div>
            </div>

            <Separator className="my-2" />

            {flightInfo.return && (
              <div>
                <p className="font-medium">Vuelo de regreso</p>
                <p>{flightInfo.return.date} | {flightInfo.return.departureTime} - {flightInfo.return.arrivalTime}</p>
                <p>{flightInfo.return.departureAirport} → {flightInfo.return.arrivalAirport} ({flightInfo.return.stops})</p>
                <div className="flex items-center">
                  <span className={`rounded-full px-3 py-1 text-xs ${getClassColor(flightInfo.return.class)}`}>
                    {flightInfo.return.class}
                  </span>
                  <p className="font-semibold ml-2">{flightInfo.return.flightNumber}</p>
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
