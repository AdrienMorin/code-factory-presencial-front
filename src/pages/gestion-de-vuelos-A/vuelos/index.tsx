import FooterCopy from "@/components/molecules/FooterCopy";
import Navbar from "@/components/molecules/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";

function FlightsPage() {
  const [date, setDate] = React.useState<Date>();
  return (
    <div className="">
      <nav className="flex justify-around gap-4 items-center border-b-2 border-gray-500 shadow-md h-[100px] p-4">
        <Navbar />
      </nav>
      <div className="grid grid-cols-3 justify-between items-center gap-4 p-12">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div>
          <Label htmlFor="Tipo de vuelo">Tipo de vuelo</Label>
          <Input type="text" id="typeFlight" placeholder="Tipo de vuelo" />
        </div>
        <div className="flex flex-col justify-between">
          <Label htmlFor="Tipo de vuelo">Fecha</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-[240px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? (
                  format(date, "dd/MM/yyyy HH:mm")
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
              <input type="time"></input>
            </PopoverContent>
          </Popover>
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div className="col-start-2">
          <Button className="w-full">Registrar Vuelo</Button>
        </div>
      </div>
      <FooterCopy />
    </div>
  );
}

export default FlightsPage;
