"use client"
 
import { Check, ChevronsUpDown } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "../ui/label"
import { InputSearchField } from "@/types/InputTypes"
import { OptionsCombobox } from "@/types/OptionTypes"

type ComboboxProps = {
    field: InputSearchField
    options: OptionsCombobox[]
    selectedValue: string
    onSelectValue: (value: string) => void
    open: boolean
    onOpenChange: (open: boolean) => void
}

export default function Combobox({field, options, selectedValue, onSelectValue, open, onOpenChange}: ComboboxProps) {

    
    return (
        <Popover open={open} onOpenChange={onOpenChange}>
          
          <PopoverTrigger asChild>
            <div className="relative flex flex-col justify-center items-center gap-1.5">
              <Label htmlFor={field.value}>{field.label}</Label>
              <Button variant="outline" type='button' className="bg-input xl:pl-10 text-sm xl:text-base">
                {selectedValue ? options.find((option) => option.value === selectedValue)?.label : field.placeholder}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
              <span className="absolute hidden xl:block left-2 top-1/2">
                {<field.icon />}
              </span>
            </div>
          </PopoverTrigger>

          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Busca lugar..." className="h-9" />
              <CommandList>
                <CommandEmpty>No hay resultados</CommandEmpty>
                <CommandGroup>
                  {options.map((option) => (
                    <CommandItem
                      key={option.value}
                      onSelect={() => onSelectValue(option.value)}
                    >
                      <Check className={cn("mr-2 h-4 w-4", selectedValue === option.value ? "opacity-100" : "opacity-0")} />
                      {option.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>

        </Popover>
    );
}
