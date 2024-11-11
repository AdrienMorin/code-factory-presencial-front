import { AllReservationsPassenger } from "@/types/booking"
import { TableCell, TableRow } from "../../table"
import { BsFillTrashFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { useMutation } from "@apollo/client";
import { DELETE_RESERVATION_PASSENGER } from "@/graphql/mutation/reservation";
import Swal from "sweetalert2";
import { useState } from "react";
import { useRouter } from "next/router";
import { DeleteDialog } from "./DeleteDialog";
import Link from "next/link";



const ReservationTable = ({
    reservation
}:
    {
        reservation: AllReservationsPassenger
    }) => {

    const [deleteReservationPassenger] = useMutation(DELETE_RESERVATION_PASSENGER)
    const [openDelete, setOpenDelete] = useState(false)
    const router = useRouter()

    const handleClose = () => {
        setOpenDelete(false)
    }

    const handleDeleteReservationPassenger = async () => {
        try {
            const result = await deleteReservationPassenger({
                variables: {
                    id: reservation.id
                }
            })
            console.log(result)
            if (result.data) {
                Swal.fire({
                    icon: 'success',
                    title: `${result.data.deleteReservationPassenger}`,
                })
            }
        } catch (error) {
            console.log(error)
        }
        setOpenDelete(false)
        router.reload()
    }

    const getFormattedDate = (date: Date) => {
        const d = new Date(date)
        return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
    }

    return (
        <>
            <TableRow key={reservation.id}>
                <TableCell>{reservation.passenger.name} {reservation.passenger.lastName}</TableCell>
                <TableCell>{reservation.reservation.flight.origin}</TableCell>
                <TableCell>{reservation.reservation.flight.destination}</TableCell>
                <TableCell>{reservation.reservation.flight.flightNumber}</TableCell>
                <TableCell>{getFormattedDate(reservation.reservationTime)}</TableCell>
                <TableCell>{reservation.seatNumber}</TableCell>
                <TableCell>{reservation.reservation.reservationCode}</TableCell>
                <TableCell className="flex items-center space-x-8">
                    <Link
                        href={{
                            pathname: '/reservasa/all/[id]',
                            query: { id: reservation.id }
                        }}
                        className="hover:text-sky-800 text-xl text-sky-500">
                        <BsSearch />
                    </Link>

                    <button onClick={() => setOpenDelete(true)}>
                        <BsFillTrashFill className="hover:text-red-800  text-xl text-red-500" />
                    </button>
                </TableCell>
            </TableRow>

            <DeleteDialog openDelete={openDelete} handleClose={handleClose} handleDelete={handleDeleteReservationPassenger} />

        </>
    )
}

export default ReservationTable