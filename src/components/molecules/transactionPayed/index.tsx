import React from "react";
import {Card} from "@/components/ui/card";
import {Icon} from "@iconify/react";

export default function TransactionPayed() {
    return (
        <Card className={"flex flex-col items-center p-5 gap-2 bg-gray-200"}>
            <Icon icon={"mdi:check-circle"} className={"text-6xl text-green-500"}/>
            <div className={"text-lg font-bold"}>Su reserva esta pagada y confirmada.</div>
        </Card>
    );
};