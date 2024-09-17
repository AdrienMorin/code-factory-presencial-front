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
import { Input } from "../input";
import { PassengerForm } from "./passengerForm";
import { Passenger } from "@/types/passenger";

const CrearReserva = ({passengers, setPassengers}:{
  passengers: Passenger[],
  setPassengers: React.Dispatch<React.SetStateAction<Passenger[]>>
}) => {


  const now = new Date();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
      <form onSubmit={handleSubmit}>
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
                    <Input type="number" min={0} name="idVueloIda" />
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Vuelo de vuelta</span>
                  <div>
                    <Input type="number" min={0} name="idVueloVuelta" />
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    Número de reserva
                  </span>
                  <div>
                    <Input type="text" name="numeroReserva"/>
                  </div>
                </li>
              </ul>
            </div>
            <Separator className="my-4" />
            <div className="grid gap-3">
              <PassengerForm passengers={passengers} setPassengers={setPassengers}/>
            </div>
            <Separator className="my-4" />
          </CardContent>
          <CardFooter className="flex items-center justify-center">
            <Button type="submit">Crear</Button>
          </CardFooter>
        </Card>
      </form>
  );
};

export default CrearReserva;
