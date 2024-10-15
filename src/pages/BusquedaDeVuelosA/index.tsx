import PublicityCard from '@/components/molecules/PublicityCard'
import SearchForm from '@/components/organisms/SearchForm'
import { searchFieldsCalendar, searchFields, searchFieldsPassenger } from '@/constants/FormFields'
import React from 'react'

export default function BusquedaDeVuelosA() {
  return (
    <div className='flex flex-col justify-center items-center mt-10 gap-36'>
      <SearchForm 
        inputFields={searchFields}
        inputFieldsCalendar={searchFieldsCalendar}
        InputSearchFieldPassenger={searchFieldsPassenger}
      />
      <PublicityCard />
    </div>
  )
}
