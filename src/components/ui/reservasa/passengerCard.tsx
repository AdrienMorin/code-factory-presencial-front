
import { Button } from "@/components/ui/button"
import { Passenger, PassengerDB } from '@/types/passenger';
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
    passengers: PassengerDB[];
    setPassengers: React.Dispatch<React.SetStateAction<PassengerDB[]>>
}) => {

    const removePassenger = () => {
        const newPassengers = passengers.filter(p => p !== passenger);
        setPassengers(newPassengers);
    }

  return (
    <Card>
    <CardHeader>
      <CardTitle>
        {passenger.name} {passenger.lastName}
      </CardTitle>
      <CardDescription>{passenger.email}</CardDescription>
    </CardHeader>
    <CardContent>
      <dl className="grid gap-3">
        <div className="flex items-center justify-between">
          <dt className="text-muted-foreground">Tipo de documento</dt>
          <dd>{passenger.typeDni}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-muted-foreground">Número de documento</dt>
          <dd>{passenger.dni}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-muted-foreground">Teléfono</dt>
          <dd>{passenger.phone}</dd>
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
