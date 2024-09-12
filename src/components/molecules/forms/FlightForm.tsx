import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FlightSchema, formFlight } from "@/schemas/FlightSchema";
// import { flightFormFields } from "@/constants/FlightsFormFields";
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

function FlightForm() {
  const form = useForm<FlightSchema>({
    resolver: zodResolver(formFlight),
    defaultValues: {
      flightType: undefined,
      aircraft: undefined,
      passengers: undefined,
      price: 0,
      tax: 0,
      surcharge: 0,
      origin: "",
      departureDate: new Date(),
      departureTime: "",
      destination: "",
      arrivalDate: "",
      arrivalTime: "",
    },
  });

  function onSubmit(data: FlightSchema) {
    console.log(data);
  }

  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <h1 className="text-5xl font-extrabold text-center pt-6">
        Ingresar información del vuelo
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-3 justify-between items-center gap-4 px-4 py-6"
        >
          {/* Select tipo de Vuelo y Aeronave */}
          <FormField
            control={form.control}
            name="flightType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de vuelo</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="w-[300px] h-[55px] text-lg">
                    <SelectTrigger>
                      <SelectValue placeholder="Tipo de vuelo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Boeing">Economico</SelectItem>
                    <SelectItem value="Airbus">Internacional</SelectItem>
                    <SelectItem value="Jet">Nacional</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>Seleccione un tipo de vuelo</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="aircraft"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Seleccionar una aeronave</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="w-[300px] h-[55px] text-lg">
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione una aeronave" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Boeing">Boeing747</SelectItem>
                    <SelectItem value="Airbus">Airbus124</SelectItem>
                    <SelectItem value="Jet">Jet-M2</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Seleccione un avión para el vuelo
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Inputs: Número de pasajeros, precio, impuesto, sobretasa */}
          <FormField
            control={form.control}
            name="passengers"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Número de pasajeros</FormLabel>
                <FormControl>
                  <Input
                    placeholder="# de pasajeros"
                    className="w-[300px] h-[55px] text-lg decoration-transparent"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Ingresa el número máximo de pasajeros del vuelo
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Precio</FormLabel>
                <FormControl>
                  <Input
                    placeholder="$ Precio"
                    className="w-[300px] h-[55px] text-lg "
                    pattern="[0-9]+"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Ingresa el precio del vuelo</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tax"
            render={({ field }) => (
              <FormItem>
                <FormLabel>% Impuesto</FormLabel>
                <FormControl>
                  <Input
                    placeholder="% Impuesto"
                    className="w-[300px] h-[55px] text-lg "
                    pattern="[0-9]+"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Ingresa el impuesto del vuelo</FormDescription>
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
                    className="w-[300px] h-[55px] text-lg "
                    pattern="[0-9]+"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Ingresa la sobretasa del vuelo
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Origen */}
          <FormField
            control={form.control}
            name="aircraft"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Origen</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="w-[300px] h-[55px] text-lg">
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione un origen" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Boeing">Medellín</SelectItem>
                    <SelectItem value="Airbus">Bogotá</SelectItem>
                    <SelectItem value="Jet">Singapur</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Seleccione un origen para el vuelo
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="departureDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Fecha de salida</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[300px] h-[55px] text-lg pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-auto h-4 w-4 opacity-50" />
                        {field.value ? (
                          format(field.value, "dd/MM/yyyy")
                        ) : (
                          <span>Seleccione una fecha</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Seleccione una fecha de despegue
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="departureDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Hora de salida</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[300px] h-[55px] text-lg pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarClock className="mr-auto h-4 w-4 opacity-50" />
                        {field.value ? (
                          format(field.value, "HH:mm aa")
                        ) : (
                          <span>Selecciona una hora, minuto y horario</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Input type="time" onSelect={field.onChange} />
                  </PopoverContent>
                </Popover>
                <FormDescription>Hora de llegada</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Destino */}
          <FormField
            control={form.control}
            name="aircraft"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Destino</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="w-[300px] h-[55px] text-lg">
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione un destino" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Boeing">Cali</SelectItem>
                    <SelectItem value="Airbus">Tailandia</SelectItem>
                    <SelectItem value="Jet">Italia</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Seleccione un destino para el vuelo
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="departureDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Fecha de llegada</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[300px] h-[55px] text-lg pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-auto h-4 w-4 opacity-50" />
                        {field.value ? (
                          format(field.value, "dd/MM/yyyy")
                        ) : (
                          <span>Seleccione una fecha</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>Fecha de llegada del vuelo</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="departureDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Hora de llegada</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[300px] h-[55px] text-lg pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarClock className="mr-auto h-4 w-4 opacity-50" />
                        {field.value ? (
                          format(field.value, "HH:mm aa")
                        ) : (
                          <span>Selecciona una hora, minuto y horario</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Input type="time" onSelect={field.onChange} />
                  </PopoverContent>
                </Popover>
                <FormDescription>Hora de llegada</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="col-start-2">
            Registrar vuelo
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default FlightForm;
