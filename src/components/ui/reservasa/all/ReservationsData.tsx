import { useQuery } from "@apollo/client"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../../table"
import { GET_RESERVATIONS_PASSENGER } from "@/graphql/query/reservation"
import { ReservationPassenger } from "@/types/booking"
import ReservationTable from "./ReservationTable"

export const ReservationsData = () => {

    const { loading, error, data } = useQuery<ReservationPassenger>(GET_RESERVATIONS_PASSENGER)
    return (
        <Table>
            <TableCaption>Lista de reservas</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Pasajero</TableHead>
                    <TableHead>Origen</TableHead>
                    <TableHead>Destino</TableHead>
                    <TableHead>N°Vuelo</TableHead>
                    <TableHead>Fecha de Reserva</TableHead>
                    <TableHead>N°Asiento</TableHead>
                    <TableHead>Código de Reserva</TableHead>
                    <TableHead>Acciones</TableHead>
                </TableRow>
            </TableHeader>
            {data && (
                        <TableBody>
                        {data?.allReservationPassengers.map((reservation) => (
                            <ReservationTable reservation={reservation} key={reservation.id} />
                        ))}
                    </TableBody>
            )}
        </Table>
    )
}
