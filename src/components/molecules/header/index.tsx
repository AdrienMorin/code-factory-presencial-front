import {Button} from "@/components/ui/button";
import {InlineIcon} from "@iconify/react";
import React from "react";
import {useRouter} from "next/router";
import Image from "next/image";

export default function Header() {
    const router = useRouter();

    const handleBack = (event: any) => {
        event.preventDefault();
        router.back();
    };

    return (
        <div className="w-full bg-gray-500 h-24 flex justify-between">
            <Button variant="secondary" className="my-6 ml-10" onClick={handleBack}>
                <InlineIcon className="white-icon text-xl" icon="mdi:arrow-left"/>
            </Button>
            <Image src={"/UdeAirlines_logo_transparent.png"} alt={"UdeAirlines"} width={200} height={200} className={"my-auto mr-28"}/>
        </div>
    );
};