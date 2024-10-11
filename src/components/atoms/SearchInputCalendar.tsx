"use client"

import { useState } from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "../ui/label"
import { InputSearchFieldCalendar } from "@/types/InputTypes"

type SearchInputCalendarProps = {
  inputSearchField: InputSearchFieldCalendar[];
  handleInputChange: (name: string, value: string) => void;
}

export function SearchInputCalendar({ inputSearchField, handleInputChange }: SearchInputCalendarProps) {
  const [dates, setDates] = useState<{ [key: string]: Date }>({});
  const [activeField, setActiveField] = useState<string | null>(null);

  const handleDateChange = (name: string , selectedDate: Date) => {
    setDates(prevDates => ({...prevDates, [name]: selectedDate}));
    if(selectedDate){
      handleInputChange(name, format(selectedDate, "yyyy-MM-dd"));  
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex gap-1.5">
        {inputSearchField.map((field, index) => (
          <div key={index} className="flex flex-col items-center gap-1.5">
            <Label htmlFor={field.name}>{field.label}</Label>
            <Button
              variant={"outline"}
              className={cn(
                "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                !dates[field.name] && "text-black"
              )}
              onClick={() => setActiveField(field.name)}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dates[field.name] ? format(dates[field.name], "yyyy-MM-dd") : <span>{field.placeholder}</span>}
            </Button>
          </div>
        ))}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={activeField ? dates[activeField] : undefined}
          onSelect={(date) => {
            if (activeField && date) {
              handleDateChange(activeField, date);
            }
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
