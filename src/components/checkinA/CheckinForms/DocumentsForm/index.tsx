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
import { useState } from "react";

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

  const [errorMessage, setErrorMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    // Verificar que solo se haya seleccionado un archivo
    if (files.length > 1) {
      setErrorMessage("Solo puedes cargar un archivo por pasajero.");
      e.target.value = ""; // Reiniciar el input file
      return;
    }

    const file = files[0]; // Solo procesar el primer archivo

    if (file) {
      // Verificar el tipo de archivo
      const validTypes = ["image/jpeg", "image/png", "application/pdf"];
      if (!validTypes.includes(file.type)) {
        setErrorMessage("Solo se permiten archivos JPEG, PNG o PDF.");
        e.target.value = ""; // Reiniciar el input file
        return;
      }

      // Verificar el tamaño del archivo (5MB = 5,000,000 bytes)
      const maxSizeInBytes = 5 * 1024 * 1024;
      if (file.size > maxSizeInBytes) {
        setErrorMessage("El archivo no debe exceder los 5MB.");
        e.target.value = ""; // Reiniciar el input file
        return;
      }

      setErrorMessage(""); // Limpiar cualquier mensaje de error si todo está bien
      setSelectedFile(file); // Guardar archivo seleccionado
      console.log("Archivo seleccionado:", file);
    }
  };

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
                    accept=".jpeg, .jpg, .pdf"
                    onChange={handleFileChange}
                    multiple
                  />
                </FormControl>
                <FormDescription>
                  Extensiones admitidas: PDF, JPEG, PNG (Max. 5MB)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Mostrar el nombre del archivo seleccionado si no hay errores */}
          {selectedFile && (
            <p className="text-green-600">
              <span className="font-semibold">Archivo seleccionado:</span>{" "}
              {selectedFile.name}
            </p>
          )}
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}

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
