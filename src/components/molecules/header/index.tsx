import {Button} from "@/components/ui/button";
import {InlineIcon} from "@iconify/react";
import React from "react";

export default function Header() {
    return (
        <div className="w-full bg-gray-500 h-24 flex justify-between">
            <Button variant="secondary" className="my-6 ml-10">
                <InlineIcon className="white-icon text-xl" icon="mdi:arrow-left"/>
            </Button>
            <h1 className="scroll-m-20 text-4xl my-auto mr-28 font-extrabold tracking-tight lg:text-5xl text-white">
                UdeAirlines
            </h1>
        </div>
    );
};