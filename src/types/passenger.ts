import { z } from "zod";

export const passengerSchema = z.object({
    nombre: z.string(),
    apellido: z.string(),
    tipoDocumento: z.string(),
    numeroDocumento: z.string(),
    correo: z.string(),
    telefono: z.nullable(z.string()),
    