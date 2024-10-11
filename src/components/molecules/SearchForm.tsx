import React, { useState } from 'react'
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

  const [tripType, setTripType] = useState('roundTrip'); 
  const [searchParams, setSearchParams] = useState({
    origin: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    passengers: 1
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aquí envías los parámetros al backend
    console.log('Parámetros de búsqueda:', searchParams, tripType);
  };

  const handleInputChange = (name: string, value: string) => {
    setSearchParams({
      ...searchParams,
      [name]: value
    });
  };

  return (
    <form onSubmit={handleSubmit} className='flex w-4/5 p-4 rounded-lg shadow-md border gap-10 justify-evenly items-center'>
        <RadioGroup
          defaultValue="roundTrip"
          className="flex space-x-4"
          onValueChange={(value) => setTripType(value)}
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
          handleInputChange={handleInputChange}
        />
        <SearchInputCalendar 
          inputSearchField={inputFieldsCalendar}
          handleInputChange={handleInputChange}
        />
        <Button type="submit" className="bg-primary w-20 text-white rounded-xl p-2">Buscar</Button>
    </form>
  )
}
