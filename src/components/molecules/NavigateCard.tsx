import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function NavigateCard() {
  const router = useRouter()

  const infoCard = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Ofertas y destinos',
      link: '#'
    },
    {
      title: 'Tu reserva',
      link: '#'
    },
    {
      title: 'Check-in',
      link: '#'
    },
    {
      title: 'Información',
      link: '/BusquedaDeVuelosA'
    }
  ]
  
  return (
    <div className='flex flex-col md:flex-row gap-10 font-semibold text-sm lg:text-base justify-center items-center'>
      {infoCard.map((card, index) => (
        <div key={index}>
          <Link className={`${router.pathname === card.link ? 'border-b-2 border-black' : 'hover:border-b-2 hover:border-black flex'}`} href={card.link}>{card.title}</Link>
        </div>
      ))}
    </div>
  )
}

