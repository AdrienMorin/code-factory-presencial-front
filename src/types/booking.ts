import { z } from "zod";


export const bookingSchema = z.object({
    idVueloIda: z.nullable(z.number()),
    idVueloVuelta: z.nullable(z.number()),
    numeroReserva: z.string(),
    fechaReserva: z.date(),
    numeroPasajeros: z.number(),
  });