
import { Button } from "@/components/ui/button"
import { Passenger } from '@/types/passenger';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



const PassengerCard = ({ passenger, passengers, setPassengers}: {
    passenger: Passenger;
    passengers: Passenger[];
    setPassengers: React.Dispatch<React.SetStateAction<Passenger[]>>
}) => {

    const removePassenger = () => {
        const newPassengers = passengers.filter(p => p !== passenger);
        setPassengers(newPassengers);
    }

  return (
    <Card>
    <CardHeader>
      <CardTitle>
        {passenger.nombre} {passenger.apellido}
      </CardTitle>
      <CardDescription>{passenger.correo}</CardDescription>
    </CardHeader>
    <CardContent>
      <dl className="grid gap-3">
        <div className="flex items-center justify-between">
          <dt className="text-muted-foreground">Tipo de documento</dt>
          <dd>{passenger.tipoDocumento}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-muted-foreground">Número de documento</dt>
          <dd>{passenger.numeroDocumento}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-muted-foreground">Teléfono</dt>
          <dd>{passenger.telefono}</dd>
        </div>
      </dl>
    </CardContent>
    <CardFooter>
      <Button variant="outline" size="sm" onClick={removePassenger}>
        Delete
      </Button>
    </CardFooter>
  </Card>
  )
}

export { PassengerCard }
