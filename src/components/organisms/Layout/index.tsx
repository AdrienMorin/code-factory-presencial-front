import React from 'react'
import Navbar from '@/components/organisms/Navbar'
import Footer from '@/components/organisms/Footer'

// El Layout se divide en Navbar, contenido y Footer
const Index = ({ children } : { children : React.ReactNode }) => {
    return (
      <div className='w-full h-full flex flex-col'>
        {/*Se asignan propiedades a los Navbar para saber cuando se muestra el diseño para pc o para celular*/}
        <Navbar/>
        {children}
        <Footer/>
      </div>
    )
  }
  
  export default Index