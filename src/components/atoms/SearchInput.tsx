import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { InputSearchField } from "@/types/InputTypes"

type SearchInputProps = {
  inputSearchField: InputSearchField[]
}

export default function SearchInput({ inputSearchField }: SearchInputProps) {
  return (
    <div className="flex w-full max-w-sm items-center gap-1.5">
      { inputSearchField.map((field, index) => (
        <div key={index} className="flex flex-col items-center gap-1.5">
          <Label htmlFor={field.name}>{field.label}</Label>
          <div className="relative w-full">
            <Input
              type="search"
              placeholder={field.placeholder}
              className="bg-input lg:pl-10" // Añade padding a la izquierda para el icono
            />
            <span className="absolute hidden lg:block left-2 top-1/2 transform -translate-y-1/2">
              {<field.icon/>}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}