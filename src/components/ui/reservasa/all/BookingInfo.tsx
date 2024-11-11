import { ReservationPassengerID } from "@/types/booking"
import { Card } from "../../card"
import { Input } from "../../input"

export const BookingInfo = ({
    booking
}: {
    booking: ReservationPassengerID
}) => {
    const formatDate = (d: Date) => {
        const date = new Date(d)
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    return (
        <div className='space-y-4 w-1/3'>
            <h1 className="text-2xl font-semibold text-gray-800 text-center">Información de la reserva</h1>
            <Card className="p-6 border border-gray-200 rounded-lg bg-white shadow-lg w-auto">
                <form className="grid grid-cols-1 gap-4">
                    <div className='flex justify-between'>
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-semibold mb-1">Origen</label>
                            <Input
                                type="text"
                                className="w-full rounded-md"
                                disabled
                                value={booking.reservationPassengerById.reservation.flight.origin}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-semibold mb-1">Destino</label>
                            <Input
                                type="text"
                                className="w-full rounded-md"
                                disabled
                                value={booking.reservationPassengerById.reservation.flight.destination}
                            />
                        </div>

                    </div>
                    <div className='flex justify-between'>
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-semibold mb-1">Número de vuelo</label>
                            <Input
                                type="text"
                                className="w-full rounded-md"
                                disabled
                                value={booking.reservationPassengerById.reservation.flight.flightNumber}

                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-semibold mb-1">Fecha de reserva</label>
                            <Input
                                type="text"
                                className="w-full rounded-md"
                                disabled
                                value={formatDate(booking.reservationPassengerById.reservationTime)}
                            />
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-semibold mb-1">Número de asiento</label>
                            <Input
                                type="text"
                                className="w-full rounded-md"
                                disabled
                                value={booking.reservationPassengerById.seatNumber}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-semibold mb-1">Código de reserva</label>
                            <Input
                                type="text"
                                className="w-full rounded-md"
                                disabled
                                value={booking.reservationPassengerById.reservation.reservationCode}
                            />
                        </div>
                    </div>
                </form>
            </Card>

        </div>
    )
}
