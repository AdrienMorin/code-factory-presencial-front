import NavbarSearch from '@/components/molecules/NavbarSearch';
import SearchForm from '@/components/organisms/SearchForm';
import SearchResults from '@/components/organisms/searchResults';
import { searchFields, searchFieldsCalendar, searchFieldsPassenger } from '@/constants/FormFields';

import React from 'react'

export default function search() {

  return (
    <div className='flex flex-col gap-5 justify-center items-center'>
      <NavbarSearch/>
      <SearchForm
        inputFields={searchFields}
        inputFieldsCalendar={searchFieldsCalendar}
        InputSearchFieldPassenger={searchFieldsPassenger}
      />
      <SearchResults/>
    </div>
  )
}
