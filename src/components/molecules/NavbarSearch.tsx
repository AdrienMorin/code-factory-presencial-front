import { useRouter } from 'next/router'
import React from 'react'
import { Minus } from 'lucide-react'


export default function NavbarSelect() {
    const router = useRouter()

    const infoCard = [
        {
          title: 'Seleccion de vuelos',
          number: 1,
          link: '/BusquedaDeVuelosA/search'
        },
        {
          title: 'Seleccion de asientos',
          number: 2,
          link: '#'
        },
        {
          title: 'Pagos',
          number: 3,
          link: '#'
        },
      ]

    return (
        <div className='flex items-center gap-3 w-full p-4 justify-center border-b-2 shadow-sm'>
            {infoCard.map((card, index) => (
                <div key={index} className='flex justify-center items-center gap-3'>
                    <div className={`${router.pathname === card.link ? 'flex rounded-full bg-black w-12 h-12 text-white justify-center items-center text-xl' : 'flex rounded-full bg-black w-12 h-12 text-white justify-center items-center bg-chart-5 text-xl'}`} >
                        <h1 className='font-extrabold'>{card.number}</h1>
                    </div>
                    <h1 className={`${router.pathname === card.link ? 'flex font-bold' : 'flex font-bold text-chart-5'}`}>{card.title}</h1>
                    {
                        card.number === 3 ? <Minus size={0} /> : <div className='text-input'>---------------------</div>
                    }
                </div>
            ))}
        </div>
    )
}