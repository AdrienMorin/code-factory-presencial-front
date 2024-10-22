import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons"; // Importa el ícono del calendario desde Radix UI
import { format, isBefore, isSameDay } from "date-fns"; // Importa funciones de manejo de fechas desde la librería date-fns
import { cn } from "@/lib/utils"; // Importa una función de utilidades que puede combinar clases de CSS
import { Button } from "@/components/ui/button"; // Importa un componente de botón personalizado
import { Calendar } from "@/components/ui/calendar"; // Importa un componente de calendario personalizado
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"; // Importa los componentes de Popover para manejar desplegables

// Esta función desactiva fechas anteriores a la fecha de hoy.
const disabledBeforeToday = (date: Date) => {
  const today = new Date(); // Obtiene la fecha de hoy
  return isBefore(date, today) && !isSameDay(date, today); // Retorna verdadero si la fecha es anterior a hoy y no es el mismo día
};

// Componente de selección de fecha de salida
const DepartureDate = ({ onDateSelect }: { onDateSelect: (date: Date | undefined) => void }) => {
  const [date, setDate] = React.useState<Date | undefined>(); // Estado para manejar la fecha seleccionada

  return (
    <div className="grid gap-2"> {/* Contenedor con un grid y espacio entre elementos */}
      <Popover> {/* Popover que permite desplegar el calendario */}
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full justify-start text-left font-normal"> {/* Botón que dispara el Popover */}
            <CalendarIcon className="mr-2 h-4 w-4 text-primary" /> {/* Icono de calendario */}
            {date ? format(date, "LLL dd, y") : <span>Pick a departure date</span>} {/* Muestra la fecha seleccionada o un texto predeterminado */}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start"> {/* Contenido del Popover */}
          <Calendar
            selected={date} // Fecha seleccionada actualmente
            onSelect={(selectedDate) => {
              setDate(selectedDate); // Actualiza la fecha seleccionada
              onDateSelect(selectedDate); // Llama a la función de callback con la fecha seleccionada
            }}
            disabled={disabledBeforeToday} // Desactiva fechas anteriores a hoy
            mode="single" // Modo de selección de una sola fecha
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

// Componente de selección de fechas de ida y vuelta
const RoundTripDate = ({
  className, // Clase CSS opcional para el componente
  onDepartureSelect, // Función callback para la fecha de salida
  onReturnSelect, // Función callback para la fecha de regreso
}: {
  className?: string; 
  onDepartureSelect: (date: Date | undefined) => void;
  onReturnSelect: (date: Date | undefined) => void;
}) => {
  const [departureDate, setDepartureDate] = React.useState<Date | undefined>(); // Estado para manejar la fecha de salida
  const [returnDate, setReturnDate] = React.useState<Date | undefined>(); // Estado para manejar la fecha de regreso

  // Función para desactivar fechas de regreso anteriores a la fecha de salida
  const disabledReturnDates = (date: Date) => (departureDate ? date < departureDate : false);

  return (
    <div className={cn("grid gap-2", className)}> {/* Contenedor con un grid y posibilidad de clases adicionales */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="round-trip-date"
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !departureDate && !returnDate && "text-muted-foreground" // Estilos condicionales si no hay fechas seleccionadas
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4 text-primary" /> {/* Icono de calendario */}
            {departureDate ? (
              returnDate ? (
                <>
                  {format(departureDate, "LLL dd, y")} - {format(returnDate, "LLL dd, y")} {/* Muestra las fechas de ida y vuelta */}
                </>
              ) : (
                format(departureDate, "LLL dd, y") // Solo muestra la fecha de salida si no hay fecha de regreso
              )
            ) : (
              <span>Pick a round trip date</span> // Texto predeterminado si no se ha seleccionado ninguna fecha
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="flex"> {/* Contenedor flexible para mostrar dos calendarios */}
            <div className="flex flex-col">
              <div className="text-center p-4 font-bold">Departure date</div> {/* Título para la fecha de salida */}
              <Calendar
                initialFocus
                selected={departureDate} // Fecha de salida seleccionada
                onSelect={(date) => {
                  setDepartureDate(date); // Actualiza la fecha de salida
                  onDepartureSelect(date); // Llama a la función de callback con la fecha seleccionada
                }}
                disabled={disabledBeforeToday} // Desactiva fechas anteriores a hoy
                mode="single"
              />
            </div>

            <div className="flex flex-col">
              <div className="text-center p-4 font-bold">Return date</div> {/* Título para la fecha de regreso */}
              <Calendar
                initialFocus
                selected={returnDate} // Fecha de regreso seleccionada
                onSelect={(date) => {
                  setReturnDate(date); // Actualiza la fecha de regreso
                  onReturnSelect(date); // Llama a la función de callback con la fecha seleccionada
                }}
                disabled={disabledReturnDates} // Desactiva fechas de regreso anteriores a la fecha de salida
                mode="single"
              />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export { RoundTripDate, DepartureDate }; // Exporta ambos componentes para ser utilizados en otros archivos
