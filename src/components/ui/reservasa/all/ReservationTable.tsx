import { AllReservationsPassenger } from "@/types/booking"
import { TableBody, TableCell, TableRow } from "../../table"
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { useMutation } from "@apollo/client";
import { DELETE_RESERVATION_PASSENGER } from "@/graphql/mutation/reservation";
import Dialog from '@mui/material/Dialog';
import Swal from "sweetalert2";
import { useState } from "react";
import { DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useRouter } from "next/router";



const ReservationTable = ({
    reservation
}:
    {
        reservation: AllReservationsPassenger
    }) => {

    const [deleteReservationPassenger, { data, loading, error }] = useMutation(DELETE_RESERVATION_PASSENGER)
    const [open, setOpen] = useState(false)
    const router = useRouter()

    const handleClose = () => {
        setOpen(false)
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
        setOpen(false)
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
                    <button className="hover:text-sky-800 text-xl text-sky-500">
                        <AiFillEdit />
                    </button>

                    <button onClick={() => setOpen(true)}>
                        <BsFillTrashFill className="hover:text-red-800  text-xl text-red-500" />
                    </button>
                </TableCell>
            </TableRow>
            <Dialog open={open} onClose={handleClose} className="items-center justify-center bg-black bg-opacity-50">
                <DialogContent className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
                    <DialogTitle className="text-xl font-semibold text-gray-800 mb-4 text-center">
                        ¿Estás seguro de eliminar la reserva?
                    </DialogTitle>
                    <DialogActions className="flex justify-end space-x-4 mt-6">
                        <button onClick={handleClose} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md">
                            Cancelar
                        </button>
                        <button onClick={handleDeleteReservationPassenger} className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md">
                            Eliminar
                        </button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default ReservationTable