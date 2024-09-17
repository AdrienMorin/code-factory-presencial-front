import { Input } from "../input";
import { Passenger } from "@/types/passenger";
import { useForm } from "@/hooks/useForm";
import { tipoDocumento } from "@/utils/tipoDocumento";
import { Button } from "../button";


const PassengerForm = ({passengers, setPassengers}:{
    passengers: Passenger[],
    setPassengers: React.Dispatch<React.SetStateAction<Passenger[]>>
}) => {
    

  const passengerData: Passenger = {
    nombres: '',
    apellidos: '',
    tipoDocumento: tipoDocumento[0],
    numeroDocumento: '',
    correo: '',
    telefono: '',
  };

  const { values, handleFieldChange } = useForm(passengerData);

  const addPassenger = () => {
    setPassengers([...passengers, values]);
    console.log(passengers);
  };
  return (
    <>
    <div className="font-semibold">Información de los pasajeros</div>
    <div className="grid gap-3">
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground">Nombres</span>
        <div>
          <Input type="text" name="nombres" onChange={handleFieldChange} />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <dt className="text-muted-foreground">Apellidos</dt>
        <div>
          <Input type="text" name="apellidos" onChange={handleFieldChange} />
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
          <Input type="text" name="numeroDocumento" onChange={handleFieldChange} />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground">Correo</span>
        <div>
          <Input type="email" name="correo"  onChange={handleFieldChange}/>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground">Telefono</span>
        <div>
          <Input type="text" name="telefono" onChange={handleFieldChange}/>
        </div>
      </div>
      <div className="flex items-center justify-center">

      <Button onClick={addPassenger}>Añadir pasajero</Button>
      </div>
    </div>
    </>
  )
}

export  {PassengerForm}