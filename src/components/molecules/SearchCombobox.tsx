"use client"
 
import {useState} from "react"
import { InputSearchField } from "@/types/InputTypes"
import { OptionsCombobox } from "@/types/OptionTypes"
import Combobox from "../atoms/Combobox"

type SearchComboboxProps = {
    inputSearchField: InputSearchField[]
    options: OptionsCombobox[]
    originValue: string
    handleInputChange: (name: string, value: string) => void
}

export default function SearchCombobox({inputSearchField, options, handleInputChange }: SearchComboboxProps) {
  // Separate states for each Combobox
  const [openOrigin, setOpenOrigin] = useState(false);
  const [openDestination, setOpenDestination] = useState(false);
  const [originValue, setOriginValue] = useState("");
  const [destinationValue, setDestinationValue] = useState("");

  const handleSelectValue = (field: string, value: string) => {
      field === "origin" ? setOriginValue(value) : setDestinationValue(value);
      handleInputChange(field, value);
  }

  const filterDestination = (field: string) => {
    if(field === "destination") {
        return options.filter(option => option.value !== originValue);
    }
    return options
  }

  return (
    <div className="flex w-full max-w-sm justify-center items-center gap-3 xl:gap-10">
      {inputSearchField.map((field, index) => (
        <Combobox
          key={index}
          field={field}
          options={filterDestination(field.value)}
          selectedValue={field.value === "origin" ? originValue : destinationValue}
          onSelectValue={(value) => handleSelectValue(field.value, value)}
          open={field.value === "origin" ? openOrigin : openDestination}
          onOpenChange={field.value === "origin" ? setOpenOrigin : setOpenDestination}
        />
      ))}
    </div>
  );
}
