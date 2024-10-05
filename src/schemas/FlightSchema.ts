import { z } from "zod";

// Lista de códigos IATA para validación de origen y destino
const iataCodes: [string, ...string[]] = [
  "BOG",
  "MDE",
  "CTG",
  "ADZ",
  "AXM",
  "CLO",
  "CUC",
  "BAQ",
  "PEI",
  "SMR",
  "JFK",
  "LHR",
  "CDG",
  "SYD",
  "HND",
  "DXB",
  "SIN",
  "CAN",
  "MEX",
  "IST",
  "CLO",
  "BKK",
  "FCO",
];

// Lista de tipos de aeronaves válidas
const aircraftModels: [string, ...string[]] = [
  "B737",
  "B737-800Max",
  "B747-400",
  "B777-300",
  "B787-800",
  "A320",
  "A320-200Neo",
  "A330-200",
  "A350-900",
];

export const formFlight = z
  .object({
    flightType: z.enum(["internacional", "nacional"], {
      message: "El tipo de vuelo no es válido",
    }),
    origin: z.enum(iataCodes, {
      message: "El código de origen no es válido",
    }),
    destination: z.enum(iataCodes, {
      message: "El código de destino no es válido",
    }),
    aircraftModel: z.enum(aircraftModels, {
      message: "El tipo de aeronave no es válido",
    }),
    departureDate: z.date({
      message: "La fecha de salida debe estar en formato YYYY-MM-DD",
    }),
    departureTime: z.string({
      message: "La hora de salida debe estar en formato HH:mm",
    }),
    arrivalDate: z.date({
      message: "La fecha de llegada debe estar en formato YYYY-MM-DD",
    }),
    arrivalTime: z.string({
      message: "La hora de llegada debe estar en formato HH:mm",
    }),
    price: z.number().min(1, { message: "El precio debe ser mayor que 0" }),
    tax: z
      .number()
      .min(1, { message: "El porcentaje de impuesto es requerido" }),
    surcharge: z
      .number()
      .min(1, { message: "El porcentaje de sobretasa es requerido" }),
  })
  .refine((data) => data.departureDate <= data.arrivalDate, {
    message: "La fecha de salida no puede ser después de la fecha de llegada",
    path: ["arrivalDate"], // Muestra el error en el campo de llegada
  })
  .refine(
    (data) => {
      if (data.departureDate.getTime() === data.arrivalDate.getTime()) {
        return data.departureTime < data.arrivalTime;
      }
      return true;
    },
    {
      message:
        "La hora de llegada debe ser después de la hora de salida si es el mismo día",
      path: ["arrivalTime"],
    }
  );

export type FlightSchema = z.infer<typeof formFlight>;
