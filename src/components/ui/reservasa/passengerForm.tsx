import { Input } from "../input";
import { Passenger } from "@/types/passenger";
import { tipoDocumento } from "@/utils/tipoDocumento";
import { Button } from "../button";
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";
import Swal from "sweetalert2";
import { CardFooter } from "../card";
import { Separator } from "../separator";
import { PassengerCard } from "./passengerCard";

const PassengerForm = ({
  passengers,
  setPassengers,
  setShowBookingForm,
  setShowPassengerForm,
  setShowPassengerCard,
}: {
  passengers: Passenger[];
  setPassengers: React.Dispatch<React.SetStateAction<Passenger[]>>;
  setShowBookingForm: React.Dispatch<React.SetStateAction<boolean>>;
  setShowPassengerForm: React.Dispatch<React.SetStateAction<boolean>>;
  setShowPassengerCard: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const newPassenger: Passenger = {
      nombre: data.nombres as string,
      apellido: data.apellidos as string,
      tipoDocumento: data.tipoDocumento as string,
      numeroDocumento: data.numeroDocumento as string,
      correo: data.correo as string,
      telefono: data.telefono as string,
      accesibilidad: false,
      equipajeAdicional: false,
      adiciones: false,
      asientoElegido: false,
    };
    setPassengers([...passengers, newPassenger]);
  };

  const previousStep = () => {
    setShowBookingForm(true);
    setShowPassengerForm(false);
    setShowPassengerCard(false);
  };

  const nextStep = () => {
    if (passengers.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debes agregar al menos un pasajero",
      });
      return;
    }
    setShowBookingForm(true);
    setShowPassengerForm(false);
    setShowPassengerCard(true);
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-8">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col m-8 space-y-3">
          <div className="font-semibold">Información de los pasajeros</div>
          <div className="flex flex-col space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Nombres</span>
              <div>
                <Input type="text" name="nombres" required />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Apellidos</dt>
              <div>
                <Input type="text" name="apellidos" required />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Tipo de documento</span>
              <div>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md"
                  name="tipoDocumento"
                >
                  {tipoDocumento.map((tipo) => (
                    <option key={tipo} value={tipo}>
                      {tipo}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex items-center justify-between space-x-3">
              <span className="text-muted-foreground">Número de documento</span>
              <div>
                <Input type="text" name="numeroDocumento" required />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Correo</span>
              <div>
                <Input type="email" name="correo" required />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Telefono</span>
              <div>
                <Input type="text" name="telefono" />
              </div>
            </div>
            <div className="flex justify-center">
              <Button type="submit">Añadir pasajero</Button>
            </div>
            <Separator className="my-4" />
            <CardFooter className="flex items-center justify-between">
              <Button type="button" onClick={previousStep}>
                <AiFillCaretLeft />
              </Button>
              <Button type="button" onClick={nextStep}>
                <AiFillCaretRight />
              </Button>
            </CardFooter>
          </div>
        </div>
      </form>
      <div className="flex flex-col space-y-4">
        {passengers.map((passenger, index) => (
          <PassengerCard
            key={index}
            passenger={passenger}
            passengers={passengers}
            setPassengers={setPassengers}
          />
        ))}
      </div>
    </div>
  );
};

export { PassengerForm };
