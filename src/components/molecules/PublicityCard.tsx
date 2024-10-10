import Image from 'next/image'
import React from 'react'

export default function PublicityCard() {
  return (
    <div className='flex w-4/5 rounded-3xl shadow-md border gap-10 items-center bg-card'>
      <Image src='/image.png' alt='publicity' width={600} height={400} /> 
      <div className='flex flex-col w-3/6'>
        <h1 className='text-4xl font-bold'>Cada viaje es una historia por contar</h1>
        <p>Reserva y vuela hasta noviembre 2024</p>
        <p className='mt-5'>Por trayecto desde:</p>
        <h1 className='text-4xl font-bold'>COP 136.700</h1>
      </div>
    </div>
  )
}
