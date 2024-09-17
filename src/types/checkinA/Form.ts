import { z } from "zod";

export interface FormData {
  fullName: string;
  birthDate: string;
  nationality: string;
  baggageAddress: string;
  autoBaggageAddress: boolean;
  health: string;
  travel: string;
  document: string;
  contactName: string;
  contactPhone: string;
  contactRelationship: string;
  contactAddress: string;
  autoContactAddress: boolean;
}

export interface FormSchema {
  fullName: z.ZodString;
  birthDate: z.ZodString;
  nationality: z.ZodString;
  baggageAddress: z.ZodString;
  autoBaggageAddress: z.ZodBoolean;
  health: z.ZodString;
  travel: z.ZodString;
  contactName: z.ZodString;
  contactPhone: z.ZodString;
  contactRelationship: z.ZodString;
  contactAddress: z.ZodString;
  autoContactAddress: z.ZodBoolean;
}
