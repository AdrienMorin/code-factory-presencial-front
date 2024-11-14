import {Card} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge"
import Link from "next/link";
import transformDateShort from "@/utils/dateUtils";

interface flightInfo {
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

interface bookingCardProps {
    id: number,
    is_paid: boolean,
    price: number,
    additional_charge: number,
    flight_infos: flightInfo[]
}

export default function BookingCard( props: bookingCardProps ) {
    return (
        <Link href={"/pagos-A/transaction-details?id="+props.id} className={"mx-auto"}>
            <Card className="w-auto h-auto text-center mx-auto mt-6 rounded-xl">
                <Image src={"/destinationFotos/bogota.jpeg"} alt={"destination"} width={"1280"} height={"640"} className={"w-80 h-28 rounded-xl object-cover brightness-90 shadow-gray-200 shadow-sm"}/>
                <div className={"flex justify-center gap-10 p-3"}>
                    <div>
                        <div className={"font-bold"}>
                            {props.flight_infos[0]?.flight.departure_airport} - {props.flight_infos[0]?.flight.arrival_airport}
                        </div>
                        <div>
                            {transformDateShort(props.flight_infos[0]?.flight.departure_date)} - {transformDateShort(props.flight_infos[1]?.flight.departure_date)}
                        </div>
                    </div>
                    <div>
                        <div className={"font-bold"}>
                            {props.flight_infos[0]?.flight.flight_class}
                        </div>
                        <div>
                            {props.flight_infos[0]?.flight.flight_number}
                        </div>
                    </div>
                </div>
                <div className={"mb-4"}>
                    {props.is_paid ? <Badge className={"bg-green-500 hover:bg-green-500 text-white"}>Pagado</Badge> : <Badge className={"hover:bg-red-500 bg-red-500 text-white"}>Pendiente</Badge>}
                </div>
            </Card>
        </Link>
    )
}