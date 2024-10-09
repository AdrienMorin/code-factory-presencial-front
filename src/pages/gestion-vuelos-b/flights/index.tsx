import Navbar from "@/components/navbar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup

} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

import { getAllFlights } from "@/services/gestion-vuelos-b/flights";
import { useQuery } from "react-query";
import { LoaderCircleIcon, EllipsisIcon } from "lucide-react";

export default function FlightsPage() {
  const query = useQuery({
    queryFn: getAllFlights,
    queryKey: "all-flights",
  })

  return (
    <>
      <Navbar />
    <main className="mt-10 flex flex-col gap-10 justify-center items-center">
      <h1 className="text-4xl font-bold">Tipos de aviones</h1>
      {query.isLoading &&<div className="flex justify-center">
        <LoaderCircleIcon className="w-10 h-10 animate-spin" />
        Cargando...
        </div>}
      {query.isSuccess && 
      <div className="flex self-center w-[900px]">
      <Table className="">
      <TableHeader>
        <TableRow>
          <TableHead>Número de vuelo</TableHead>
          <TableHead>Tipo de vuelo</TableHead>
          <TableHead>Ciudad Origen</TableHead>
          <TableHead>Ciudad Destino</TableHead>
          <TableHead>Tipo de avión</TableHead>
          <TableHead>Fecha de salida</TableHead>
          <TableHead>Fecha de llegada</TableHead>
          <TableHead>Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {query.data?.map((flight) => {
          return <TableRow key={flight.id}>
            <TableCell>{flight.id}</TableCell>
            <TableCell><Badge className="w-24 justify-center">{flight.flightType?.name}</Badge></TableCell>
            <TableCell>{flight.origin?.iataCode}</TableCell>
            <TableCell>{flight.destination?.iataCode}</TableCell>
            <TableCell>{flight.airplaneType?.type.name}</TableCell>
            <TableCell>PENDING</TableCell>
            <TableCell>PENDING</TableCell>
            <TableCell><Button variant="secondary">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary">
                  <EllipsisIcon/>
                  </Button>
                  </DropdownMenuTrigger>
                <DropdownMenuContent>
                <DropdownMenuGroup>
                <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                <DropdownMenuItem>Editar</DropdownMenuItem>
                <DropdownMenuItem>Eliminar</DropdownMenuItem>
              </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              </Button></TableCell>
          </TableRow>
        })}
      </TableBody>
    </Table>
    </div>}

    </main>
    </>
  );
}
