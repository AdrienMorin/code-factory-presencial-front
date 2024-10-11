import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { InputSearchFieldPassenger } from "@/types/InputTypes"

type SearchInputProps = {
  inputSearchField: InputSearchFieldPassenger[],
  handleInputChange: (name: string, value: string) => void
}

export default function SearchInputPassenger({ inputSearchField, handleInputChange }: SearchInputProps) {
  return (
    <div className="flex w-full max-w-sm items-center gap-1.5">
      { inputSearchField.map((field, index) => (
        <div key={index} className="flex flex-col items-center gap-1.5">
          <Label htmlFor={field.value}>{field.label}</Label>
          <div className="relative w-full">
            <Input
              type="search"
              placeholder={field.placeholder}
              className="bg-input xl:pl-10 w-20 text-sm xl:text-base" // Añade padding a la izquierda para el icono
              onChange={(e) => handleInputChange(field.value, e.target.value)}
            />
            <span className="absolute hidden xl:block left-2 top-1/2 transform -translate-y-1/2">
              {<field.icon/>}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}