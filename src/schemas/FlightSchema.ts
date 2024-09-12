import { z } from "zod";

export const formFlight = z.object({
  flightType: z.enum(["economico", "internacional", "nacional"], {
    message: "El tipo de vuelo no es válido",
  }),
  aircraft: z.enum(["Boeing", "Airbus"], {
    message: "El tipo de aeronave no es válido",
  }),
  passengers: z.number().min(1, { message: "Debe haber al menos un pasajero" }),
  price: z.number().min(1, { message: "El precio debe ser mayor que 0" }),
  tax: z.number().optional(),
  surcharge: z.number().optional(),
  origin: z.string().min(3, { message: "El origen es muy corto" }),
  departureDate: z.date({
    message: "La fecha de salida no es válida",
  }),
  departureTime: z.string(),
  destination: z.string().min(3, { message: "El destino es muy corto" }),
  arrivalDate: z.string().refine((value) => !isNaN(Date.parse(value)), {
    message: "La fecha de llegada no es válida",
  }),
  arrivalTime: z.string(),
});

export type FlightSchema = z.infer<typeof formFlight>;
