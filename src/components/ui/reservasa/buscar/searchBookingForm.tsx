import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const SearchBookingForm = ({
  handleFormSubmit,
}: {
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <form onSubmit={handleFormSubmit} className="flex justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Buscar Reserva</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Número de reserva</Label>
              <Input type="text" name="numeroReserva" required />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Número de documento</Label>
              <Input type="text" name="numeroDocumento" required />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button type="submit">Buscar</Button>
        </CardFooter>
      </Card>
    </form>
  );
};
