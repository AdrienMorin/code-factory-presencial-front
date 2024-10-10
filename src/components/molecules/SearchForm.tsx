import React from 'react'
import { RadioGroup, RadioGroupItem} from '../ui/radio-group'
import { Label } from '@radix-ui/react-label'
import { InputSearchField, InputSearchFieldCalendar } from '@/types/InputTypes'
import SearchInput from '../atoms/SearchInput'
import { SearchInputCalendar } from '../atoms/SearchInputCalendar'
import { Button } from '../ui/button'

type SearchFormProps = {
  inputFields: InputSearchField[],
  inputFieldsCalendar: InputSearchFieldCalendar[]
}

export default function SearchForm( { inputFields, inputFieldsCalendar }: SearchFormProps ) {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log('Formulario enviado');
  };

  return (
    <form onSubmit={handleSubmit} className='flex w-4/5 p-4 rounded-lg shadow-md border gap-10 justify-center items-center'>
        <RadioGroup
          defaultValue="roundTrip"
          className="flex space-x-4"
          //onValueChange={(value) => setSearchParams({ ...searchParams, tripType: value as 'roundTrip' | 'oneWay' })}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="roundTrip" id="roundTrip" />
            <Label htmlFor="roundTrip"> Ida y vuelta </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="oneWay" id="oneWay" />
            <Label htmlFor="oneWay"> Solo ida </Label>
          </div>
        </RadioGroup>
        <SearchInput 
          inputSearchField={inputFields} 
        />
        <SearchInputCalendar 
          inputSearchField={inputFieldsCalendar}
        />
        <Button type="submit" className="bg-primary text-white rounded-lg p-2">Buscar</Button>
    </form>
  )
}
