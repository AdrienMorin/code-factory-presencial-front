import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { UseFormReturn } from "react-hook-form";
import { FormData } from "@/types/checkinA/Form";

// Dato para testear
const NUMBER_OF_PASSENGERS = 2;

export const DocumentsForm = ({
  form,
  onPreviousSection,
  onSubmit,
  currentPassenger,
}: {
  form: UseFormReturn<FormData>;
  onPreviousSection: () => void;
  onSubmit: (values: FormData) => void;
  currentPassenger: number;
}) => {
  const nextPassenger = currentPassenger < NUMBER_OF_PASSENGERS;

  return (
    <div className="flex flex-col gap-4 w-full p-4 border-2 border-dashed border-green-700 rounded-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="document"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Documento de verificación</FormLabel>
                <p className="text-sm">
                  Por favor, suba alguno de los siguientes documentos: Visa o
                  Pasaporte
                </p>
                <FormControl>
                  <Input
                    className="pl-0 py-0 file:bg-primary file:text-white file:h-full file:cursor-pointer"
                    type="file"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Extensiones admitidas: PDF, JPEG, PNG (Max. 5MB)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="mr-4" type="button" onClick={onPreviousSection}>
            Atrás
          </Button>
          <Button type="submit">
            {nextPassenger
              ? "Continua con el siguiente pasajero"
              : "Generar tiquetes de abordaje"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
