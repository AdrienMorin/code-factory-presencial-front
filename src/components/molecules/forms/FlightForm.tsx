import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FlightSchema, formFlight } from "@/schemas/FlightSchema";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarClock, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { TimePicker } from "@/components/ui/time-picker/time-picker";

function FlightForm() {
  const form = useForm<FlightSchema>({
    resolver: zodResolver(formFlight),
    defaultValues: {
      flightType: undefined,
      aircraftModel: "",
      price: 0,
      tax: 0,
      surcharge: 0,
      origin: "",
      departureDate: undefined,
      departureTime: undefined,
      destination: "",
      arrivalDate: undefined,
      arrivalTime: undefined,
    },
  });

  async function onSubmit(data: FlightSchema) {
    const formattedData = {
      ...data,
      departureDate: data.departureDate
        ? format(new Date(data.departureDate), "yyyy-MM-dd")
        : undefined,
      arrivalDate: data.arrivalDate
        ? format(new Date(data.arrivalDate), "yyyy-MM-dd")
        : undefined,
      departureTime: data.departureTime
        ? format(new Date(data.departureTime), "HH:mm")
        : undefined,
      arrivalTime: data.arrivalTime
        ? format(new Date(data.arrivalTime), "HH:mm")
        : undefined,
    };

    /* try {
      await createFlight({ variables: { input: formattedData } });
      console.log("Vuelo registrado exitosamente");
    } catch (error) {
      console.error("Error al registrar el vuelo", error);
    } */

    console.log(formattedData);
  }

  return (
    <div className="h-full">
      <h1 className="text-5xl font-extrabold text-center my-4 text-gray-800">
        Ingresar información del vuelo
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-6 w-full justify-center items-center"
        >
          {/* Tipo de vuelo */}
          <FormField
            control={form.control}
            name="flightType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de vuelo</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Tipo de vuelo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="internacional">Internacional</SelectItem>
                    <SelectItem value="nacional">Nacional</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="aircraftModel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Aeronave</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione una aeronave" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {/* Aquí las aeronaves DISPONIBLES que me traiga del back */}
                    <SelectItem value="B737">Boeing737</SelectItem>
                    <SelectItem value="A320">Airbus320</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Inputs: precio */}
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Precio</FormLabel>
                <FormControl>
                  <Input
                    placeholder="$ Precio"
                    type="number"
                    value={field.value || ""}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Impuesto, sobretasa */}
          <FormField
            control={form.control}
            name="tax"
            render={({ field }) => (
              <FormItem>
                <FormLabel>% Impuesto</FormLabel>
                <FormControl>
                  <Input
                    placeholder="% Impuesto"
                    pattern="[0-9]+"
                    value={field.value || ""}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="surcharge"
            render={({ field }) => (
              <FormItem>
                <FormLabel>% Sobretasa</FormLabel>
                <FormControl>
                  <Input
                    placeholder="% Sobretasa"
                    pattern="[0-9]+"
                    value={field.value || ""}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Origen */}
          <FormField
            control={form.control}
            name="origin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Origen</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione un origen" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="CLO">Cali</SelectItem>
                    <SelectItem value="TLA">Tailandia</SelectItem>
                    <SelectItem value="ITL">Italia</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="departureDate"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel>Fecha de salida</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(!field.value && "text-muted-foreground")}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4 opacity-50" />
                        {field.value ? (
                          format(new Date(field.value), "yyyy-MM-dd")
                        ) : (
                          <span>Seleccione una fecha</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="departureTime"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Hora de salida</FormLabel>
                <Popover>
                  <FormControl>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(!field.value && "text-muted-foreground")}
                      >
                        <CalendarClock className="mr-2 h-4 w-4" />
                        {field.value ? (
                          format(field.value, "HH:mm")
                        ) : (
                          <span>Escribe la hora</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                  </FormControl>
                  <PopoverContent className="w-auto p-0">
                    <div className="p-3 border-t border-border">
                      <TimePicker
                        setDate={(date) =>
                          field.onChange(date ? date.toISOString() : undefined)
                        }
                        date={field.value ? new Date(field.value) : undefined}
                      />
                    </div>
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />

          {/* Destino */}
          <FormField
            control={form.control}
            name="destination"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Destino</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione un destino" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="CLO">Cali</SelectItem>
                    <SelectItem value="BKK">Bangkok</SelectItem>
                    <SelectItem value="CFO">Roma</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* ArrivalDate */}
          <FormField
            control={form.control}
            name="arrivalDate"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel>Fecha de llegada</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(!field.value && "text-muted-foreground")}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4 opacity-50" />
                        {field.value ? (
                          format(new Date(field.value), "yyyy-MM-dd")
                        ) : (
                          <span>Seleccione una fecha</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="arrivalTime"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Hora de llegada</FormLabel>
                <Popover>
                  <FormControl>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(!field.value && "text-muted-foreground")}
                      >
                        <CalendarClock className="mr-2 h-4 w-4" />
                        {field.value ? (
                          format(field.value, "HH:mm")
                        ) : (
                          <span>Escribe la hora</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                  </FormControl>
                  <PopoverContent className="w-auto p-0">
                    <div className="p-3 border-t border-border">
                      <TimePicker
                        setDate={(date) =>
                          field.onChange(date ? date.toISOString() : undefined)
                        }
                        date={field.value ? new Date(field.value) : undefined}
                      />
                    </div>
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />

          {/* Botón para registrar vuelo */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button type="submit">Registrar vuelo</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="rounded-md shadow-lg p-6 bg-white text-center">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-xl font-bold">
                  ¡Vuelo registrado!
                </AlertDialogTitle>
                <AlertDialogDescription className="text-gray-600">
                  El vuelo ha sido registrado exitosamente.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction className="bg-green-500 text-white px-4 py-2 rounded-md">
                  Continuar
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </form>
      </Form>
    </div>
  );
}

export default FlightForm;
