import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge";
import transformDateShort from "@/utils/dateUtils";
import {useRouter} from "next/router";

interface FlightInfo {
    id: number,
    flight: {
        id: number,
        departure_date: string,
        departure_time: string,
        arrival_time: string,
        departure_airport: string,
        arrival_airport: string,
        duration: string,
        flight_number: string,
        flight_class: string,
        stops: string
    }
}

interface BookingCardProps {
    id: number,
    is_paid: boolean,
    price: number,
    additional_charge: number,
    user: {
        id: number
    },
    flight_infos: FlightInfo[]
}

interface BookingsTableProps {
    bookings: BookingCardProps[];
}

export function BookingsTable({ bookings }: BookingsTableProps) {
    const router = useRouter();

    const handleRowClick = (bookingId: number) => {
        router.push(`/pagos-A/transaction-details?id=${bookingId}`);
    };

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Reserva Id</TableHead>
                    <TableHead>Usuario Id</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Numero de vuelo</TableHead>
                    <TableHead className="">Fecha(s)</TableHead>
                    <TableHead>Sentido</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {bookings.map((booking) => (
                    <TableRow key={booking.id} className="cursor-pointer hover:bg-gray-100" onClick={() => handleRowClick(booking.id)}> {/* Ajoutez des classes pour le style de survol */}
                        <TableCell className="font-medium">{booking.id}</TableCell>
                        <TableCell className={"font-medium"}>{booking.user.id}</TableCell>
                        <TableCell>
                            {booking.is_paid ? (
                                <Badge className={"bg-green-500 hover:bg-green-500 text-white"}>Pagado</Badge>
                            ) : (
                                <Badge className={"hover:bg-red-500 bg-red-500 text-white"}>Pendiente</Badge>
                            )}
                        </TableCell>
                        <TableCell>{booking.flight_infos[0]?.flight.flight_number}</TableCell>
                        <TableCell className="">
                            {transformDateShort(booking.flight_infos[0]?.flight.departure_date)} {booking.flight_infos[1] && " - " + transformDateShort(booking.flight_infos[1]?.flight.departure_date)}
                        </TableCell>
                        <TableCell>
                            {booking.flight_infos[0]?.flight.departure_airport} - {booking.flight_infos[0]?.flight.arrival_airport}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}