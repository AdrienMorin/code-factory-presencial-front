import Navbar from '@/components/molecules/Navbar'
import PublicityCard from '@/components/molecules/PublicityCard'
import SearchForm from '@/components/molecules/SearchForm'
import { searchFields, searchFieldsCalendar } from '@/constants/FormFields'
import React from 'react'

export default function BusquedaDeVuelosA() {
  return (
    <div className='flex flex-col justify-center items-center gap-10'>
      <Navbar />
      <SearchForm 
        inputFields={searchFields}
        inputFieldsCalendar={searchFieldsCalendar}
      />
      <PublicityCard />
    </div>
  )
}
