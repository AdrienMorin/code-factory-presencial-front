import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import { AllReservationsPassenger } from '../../../../types/booking';
import { useQuery } from "@apollo/client";
import { GET_PASSENGER_BY_ID } from "@/graphql/query/passenger";
import { Passenger } from "@/types/passenger";
import { Input } from "../../input";
import { useEffect } from "react";

export const EditDialog = ({
    openEdit,
    handleClose,
    reservation
}: {
    openEdit: boolean,
    handleClose: () => void,
    reservation: AllReservationsPassenger
}) => {
    const { data: passenger } = useQuery<Passenger>(GET_PASSENGER_BY_ID, {
        variables: {
            id: reservation.passenger.id
        }
    })

    useEffect(() => {
        console.log(reservation.passenger.id)
        console.log(passenger)
    }
        , [passenger])

    return (
        <Dialog open={openEdit} onClose={handleClose} className="items-center justify-center bg-black bg-opacity-50">
            <DialogContent className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
                <DialogTitle className="text-xl font-semibold text-gray-800 mb-4 text-center">
                    Información de la reserva
                </DialogTitle>
                <form className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-gray-800 font-semibold">Nombre</label>
                        <Input type="text" className="w-full rounded-lg border border-gray-300 p-2" value={passenger?.name} />
                    </div>
                    <div>
                        <label className="text-gray-800 font-semibold">Apellido</label>
                        <Input type="text" className="w-full rounded-lg border border-gray-300 p-2" value={passenger?.lastName} />
                    </div>
                    <div>
                        <label className="text-gray-800 font-semibold">Email</label>
                        <Input type="text" className="w-full rounded-lg border border-gray-300 p-2" value={passenger?.email} />
                    </div>
                    <div>
                        <label className="text-gray-800 font-semibold">Teléfono</label>
                        <Input type="text" className="w-full rounded-lg border border-gray-300 p-2" value={passenger?.phone} />
                    </div>
                    <div>
                        <label className="text-gray-800 font-semibold">Edad</label>
                        <Input type="text" className="w-full rounded-lg border border-gray-300 p-2" value={passenger?.age} />
                    </div>
                    <div>
                        <label className="text-gray-800 font-semibold">Tipo de documento</label>
                        <Input type="text" className="w-full rounded-lg border border-gray-300 p-2" value={passenger?.typeDni} />
                    </div>
                    <div>
                        <label className="text-gray-800 font-semibold">Documento</label>
                        <Input type="text" className="w-full rounded-lg border border-gray-300 p-2" value={passenger?.dni} />
                    </div>
                    <div>
                        <label className="text-gray-800 font-semibold">Nacionalidad</label>
                        <Input type="text" className="w-full rounded-lg border border-gray-300 p-2" value={passenger?.nationality} />
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
