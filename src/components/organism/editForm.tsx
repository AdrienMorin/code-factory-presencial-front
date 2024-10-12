import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { RadioGroup, RadioGroupItem } from "@/components/atoms/RadioGroup";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/atoms/Select";
import { Button } from "@/components/atoms/button"; 
import { Input } from "@/components/atoms/Input";
import { Label } from "@/components/atoms/Label";
import { toast } from "@/components/hooks/use-toast";
import { useRouter } from "next/router"; 

// Define el esquema de validación con Zod
const FormSchema = z.object({
  location: z.enum(["handLuggage", "cabin", "hold"], {
    required_error: "Debes seleccionar una ubicación para el equipaje.",
  }),
  type: z.enum(["suitcase", "musicalInstrument", "sportItem", "animal", "specialItems"], {
    required_error: "Debes seleccionar un tipo de equipaje.",
  }),
  weight: z
    .string() // Mantener como string
    .min(1, { message: "El peso no puede estar vacío." })
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, { message: "El peso debe ser un número positivo." }),
  height: z
    .string() // Mantener como string
    .min(1, { message: "La altura no puede estar vacía." })
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, { message: "La altura debe ser un número positivo." }),
  length: z
    .string() // Mantener como string
    .min(1, { message: "El largo no puede estar vacío." })
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, { message: "El largo debe ser un número positivo." }),
  width: z
    .string() // Mantener como string
    .min(1, { message: "El ancho no puede estar vacío." })
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, { message: "El ancho debe ser un número positivo." }),
});

// Inferir tipos a partir del esquema de Zod
type FormData = z.infer<typeof FormSchema>;

export function SaveForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const { register, handleSubmit, setValue, formState: { errors } } = form;
  const router = useRouter(); // Inicializa el enrutador

  function onSubmit(data: FormData) {
    // Aquí  agregar la lógica para guardar los datos (por ejemplo, hacer una petición a la API)

    toast({
      title: "Datos guardados correctamente",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });

    // Redirige a la página de equipaje después de guardar
    router.push("/equipajes/equipaje"); // Cambia la ruta según tu estructura
  }

  return (
    <div className="w-full h-screen bg-white flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full md:max-w-6xl mt-0">
        <Label className="block mb-4 text-left text-4xl font-bold text-black">Guardar equipaje</Label>

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

          <div className="col-span-1">
            <Label className="block mb-1 text-left">Peso</Label>
            <Input
              type="text" // Mantener como 'text' para permitir decimales
              {...register("weight")}
              className="w-full"
              placeholder="Ingrese el peso"
            />
            {errors.weight && <span className="text-red-500">{errors.weight.message}</span>}
            <p className="text-xs text-gray-500 mt-1">Ingresa el peso en kilogramo (Kg)</p>
          </div>
        </div>

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

        <div className="mt-8">
          <div className="w-full h-[2px] bg-gray-300"></div>
          <div className="flex justify-end mt-2">
            <div className="text-black text-right">
              <span className="font-bold">Valor:</span> <span className="text-black">$ 50.000</span>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-8 space-x-4">
          <Button type="button" className="bg-[#e63946] text-white">Eliminar</Button>
          <Button type="submit" className="bg-[#10a4ec] text-white">Guardar</Button> {/* Cambié el tipo a "submit" */}
        </div>
      </form>
    </div>
  );
}
