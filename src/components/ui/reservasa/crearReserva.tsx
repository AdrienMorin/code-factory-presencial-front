import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "../button";
import { z } from "zod";
import { Input } from "../input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "../form";
import { tipoDocumento } from "@/utils/tipoDocumento";

const CrearReserva = () => {
  const bookingSchema = z.object({
    idVueloIda: z.number().min(0),
    idVueloVuelta: z.number().min(0),
    numeroReserva: z.string(),
    fechaReserva: z.date(),
    numeroPasajeros: z.number(),
  });

  const now = new Date();

  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      idVueloIda: 0,
      idVueloVuelta: 0,
      numeroReserva: "",
      fechaReserva: new Date(),
      numeroPasajeros: 0,
    },
  });

  const onSubmit = (data: z.infer<typeof bookingSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
          <CardHeader className="flex flex-row items-start bg-muted/50">
            <div className="grid gap-0.5">
              <CardTitle className="group flex items-center gap-2 text-lg">
                Nueva Reserva
              </CardTitle>
              <CardDescription>{now.toDateString()}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-6 text-sm">
            <div className="grid gap-3">
              <div className="font-semibold">Información de la reserva</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Vuelo de ida</span>
                  <div>
                    <FormField
                      control={form.control}
                      name="idVueloIda"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input {...field} type="number" min={0} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Vuelo de vuelta</span>
                  <div>
                    <FormField
                      control={form.control}
                      name="idVueloVuelta"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input {...field} type="number" min={0} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    Número de reserva
                  </span>
                  <div>
                    <FormField
                      control={form.control}
                      name="numeroReserva"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </li>
              </ul>
            </div>
            <Separator className="my-4" />
            <div className="grid gap-3">
              <div className="font-semibold">Información de los pasajeros</div>
              <dl className="grid gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Nombres</span>
                  <div>
                    <Input type="text" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Apellidos</dt>
                  <div>
                    <Input type="text" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    Tipo de documento
                  </span>
                  <div>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      {tipoDocumento.map((tipo) => (
                        <option key={tipo} value={tipo}>
                          {tipo}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    Número de documento
                  </span>
                  <div>
                    <Input type="text" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Correo</span>
                  <div>
                    <Input type="text" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Telefono</span>
                  <div>
                    <Input type="text" />
                  </div>
                </div>
              </dl>
            </div>
            <Separator className="my-4" />
          </CardContent>
          <CardFooter className="flex items-center justify-center">
            <Button type="submit">Crear</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default CrearReserva;
