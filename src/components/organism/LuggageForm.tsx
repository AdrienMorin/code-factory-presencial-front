import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/router";
import { RadioGroup, RadioGroupItem } from "@/components/atoms/RadioGroup";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/atoms/Select";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/Input";
import { Label } from "@/components/atoms/Label";
import { toast } from "@/components/hooks/use-toast";
import { useMutation } from "@apollo/client";
import { AGREGAR_EQUIPAJE } from "@/graphql/mutations/addMutations";

// Definición del esquema de validación con Zod
const FormSchema = z.object({
  location: z.enum(["handLuggage", "cabin", "hold"], {
    required_error: "Debes seleccionar una ubicación para el equipaje.",
  }),
  type: z.enum(["suitcase", "musicalInstrument", "sportItem", "animal", "specialItems"], {
    required_error: "Debes seleccionar un tipo de equipaje.",
  }),
  weight: z
    .string()
    .min(1, { message: "El peso no puede estar vacío." })
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, { message: "El peso debe ser un número positivo." }),
  height: z
    .string()
    .min(1, { message: "La altura no puede estar vacía." })
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, { message: "La altura debe ser un número positivo." }),
  length: z
    .string()
    .min(1, { message: "El largo no puede estar vacío." })
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, { message: "El largo debe ser un número positivo." }),
  width: z
    .string()
    .min(1, { message: "El ancho no puede estar vacío." })
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, { message: "El ancho debe ser un número positivo." }),
});

// Inferencia de tipos de Zod
type FormData = z.infer<typeof FormSchema>;
export function LuggageForm() {
  const router = useRouter();
  const [agregarEquipaje] = useMutation(AGREGAR_EQUIPAJE);
  const [valorEquipaje, setValorEquipaje] = useState(50000); // Estado para el valor del equipaje

  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const { register, handleSubmit, setValue, watch, formState: { errors } } = form;
  // Función para calcular el valor del equipaje
  function calcularValor() {
    const peso = parseFloat(watch("weight") || "0");
    const alto = parseFloat(watch("height") || "0");
    const largo = parseFloat(watch("length") || "0");
    const ancho = parseFloat(watch("width") || "0");
    
    // Ejemplo de cálculo simple (puedes ajustarlo según tus necesidades)
    const nuevoValor = (peso * 1000) + (alto + largo + ancho) * 10;
    setValorEquipaje(nuevoValor);
  }
  // Actualiza el valor del equipaje cuando cambian el peso o las dimensiones
  useEffect(() => {
    calcularValor();
  }, [watch("weight"), watch("height"), watch("length"), watch("width")]);
  async function onSubmit(data: FormData) {
    try {
      const variables = {
        alto: parseFloat(data.height),
        largo: parseFloat(data.length),
        ancho: parseFloat(data.width),
        peso: parseFloat(data.weight),
        tipo: data.type,
        ubicacion: data.location,
        valor: valorEquipaje, // Usa el valor calculado
        // vueloId y pasajeroId no están incluidos si no están disponibles
      };

      const response = await agregarEquipaje({ variables });
      console.log(response); // Log para verificar la respuesta

      if (response.data.agregarEquipaje) {
        toast({
          title: "Equipaje añadido exitosamente",
          description: `ID del equipaje: ${response.data.agregarEquipaje.id}`,
        });
        router.push("/equipajes/equipaje");
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Error desconocido";
      toast({
        title: "Error al añadir equipaje",
        description: errorMessage,
      });
    }
  }
  return (
    <div className="w-full h-screen bg-white flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full md:max-w-6xl mt-0">
        <Label className="block mb-4 text-left text-4xl font-bold text-black">Añadir equipaje</Label>

        {/* Campos de selección y entrada para Ubicación, Tipo, Peso y Dimensiones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="col-span-1">
            <Label className="block mb-1 text-left">Ubicación del equipaje</Label>
            <RadioGroup
              onValueChange={(value: FormData["location"]) => setValue("location", value)}
              defaultValue={form.getValues("location")}
              className="flex flex-col space-y-1"
            >
              <div className="flex items-center">
                <RadioGroupItem value="handLuggage" />
                <span className="ml-2">Equipaje de mano</span>
              </div>
              <div className="flex items-center">
                <RadioGroupItem value="cabin" />
                <span className="ml-2">Cabina</span>
              </div>
              <div className="flex items-center">
                <RadioGroupItem value="hold" />
                <span className="ml-2">Bodega</span>
              </div>
            </RadioGroup>
            {errors.location && <span className="text-red-500">{errors.location.message}</span>}
          </div>

          {/* Tipo de equipaje */}
          <div className="col-span-1">
            <Label className="block mb-1 text-left">Tipo de equipaje</Label>
            <Select
              onValueChange={(value: FormData["type"]) => setValue("type", value)}
              defaultValue={form.getValues("type")}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Seleccione un tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="suitcase">Maleta o bolso</SelectItem>
                <SelectItem value="musicalInstrument">Instrumento musical</SelectItem>
                <SelectItem value="sportItem">Artículo deportivo</SelectItem>
                <SelectItem value="animal">Animal</SelectItem>
                <SelectItem value="specialItems">Otros artículos especiales</SelectItem>
              </SelectContent>
            </Select>
            {errors.type && <span className="text-red-500">{errors.type.message}</span>}
          </div>

          {/* Peso */}
          <div className="col-span-1">
            <Label className="block mb-1 text-left">Peso</Label>
            <Input
              type="text"
              {...register("weight")}
              className="w-full"
              placeholder="Ingrese el peso"
            />
            {errors.weight && <span className="text-red-500">{errors.weight.message}</span>}
            <p className="text-xs text-gray-500 mt-1">Ingresa el peso en kilogramo (Kg)</p>
          </div>
        </div>

        {/* Dimensiones */}
        <div className="mt-8">
          <Label className="block mb-1 text-left text-xl font-bold text-black">Dimensiones</Label>
          <p className="text-xs text-gray-500 mt-1 block mb-1 text-left">
            Ingresa las dimensiones de tu equipaje en centímetros (cm).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="col-span-1">
            <Label className="block mb-1 text-left">Alto</Label>
            <Input
              type="text"
              {...register("height")}
              className="w-full"
              placeholder="Alto"
            />
            {errors.height && <span className="text-red-500">{errors.height.message}</span>}
          </div>

          <div className="col-span-1">
            <Label className="block mb-1 text-left">Largo</Label>
            <Input
              type="text"
              {...register("length")}
              className="w-full"
              placeholder="Largo"
            />
            {errors.length && <span className="text-red-500">{errors.length.message}</span>}
          </div>

          <div className="col-span-1">
            <Label className="block mb-1 text-left">Ancho</Label>
            <Input
              type="text"
              {...register("width")}
              className="w-full"
              placeholder="Ancho"
            />
            {errors.width && <span className="text-red-500">{errors.width.message}</span>}
          </div>
        </div>

        {/* Valor Calculado */}
        <div className="mt-8">
          <div className="w-full h-[2px] bg-gray-300"></div>
          <div className="flex justify-end mt-2">
            <div className="text-black text-right">
              <span className="font-bold">Valor:</span> <span className="text-black">$ {valorEquipaje.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex justify-end mt-8 space-x-4">
          <Button type="button" className="bg-white text-black">Cancelar</Button>
          <Button type="submit" className="bg-customSky">Añadir equipaje</Button>
        </div>
      </form>
    </div>
  );
}
