import Image from 'next/image'
import React from 'react'

export default function PublicityCard() {
  return (
    <div className='flex flex-col lg:w-4/5 lg:flex-row rounded-3xl shadow-md border gap-10 lg:items-center bg-card'>
      <Image src='/image.png' alt='publicity' width={600} height={400} className='w-full h-full'/> 
      <div className='w-full p-5'>
        <h1 className='text-4xl font-bold'>Cada viaje es una historia por contar</h1>
        <p>Reserva y vuela hasta noviembre 2024</p>
        <p className='mt-5'>Por trayecto desde:</p>
        <h1 className='text-4xl font-bold'>COP 136.700</h1>
      </div>
    </div>
  )
}
