import { ReservationPassengerID } from "@/types/booking"
import { Card } from "../../card"
import { PassengerFormUpdate } from "./PassengerFormUpdate"

export const PassengerInfo = ({
    booking
}: {
    booking: ReservationPassengerID
}) => {
    return (
        <div className='space-y-4 w-1/3'>
            <h1 className="text-2xl font-semibold text-gray-800 text-center">Información del pasajero</h1>
            <Card className="p-6 border border-gray-200 rounded-lg bg-white shadow-lg w-auto">
                <PassengerFormUpdate booking={booking} />
            </Card>
        </div>
    )
}
