import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import { TextSidebar } from '@/components/atoms/titles';

const Index = () => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleDropdown = (menuId: string) => {
        setOpenDropdown(openDropdown === menuId ? null : menuId);
    };
    
    return (
        <aside id='sidebar' className='h-screen'>
            <nav className='h-full w-60 flex flex-col bg-white border-r shadow-sm'>
                <div className='p-4 pb-2 flex justify-between items-center'>
                    <Icon className='h-9 w-9 text-black' icon="mdi:compass-outline" />
                    <h1 className="text-black text-xl font-extrabold">Singapur Airlines</h1>
                </div>

                <div className='mt-4 w-full flex justify-center'>
                    <input className='w-11/12 rounded-sm mb-8' type="text" placeholder='Búsqueda' />
                </div>

                <section className='h-full w-full flex flex-col gap-y-5'>
                    <button onClick={() => toggleDropdown('mi-cuenta')} className='w-auto mx-6 flex flex-row gap-8 items-center'>
                        <Icon className='h-5 w-5 text-slate-500' icon="carbon:user-avatar-filled" />
                        <TextSidebar text='Mi cuenta' />
                        <Icon icon={`${openDropdown === 'mi-cuenta' ? 'ri:arrow-up-s-line' : 'ri:arrow-down-s-line'}`} />
                    </button>
                    {openDropdown === 'mi-cuenta' && (
                        <ul className='flex flex-col px-16 gap-4 text-sm'>
                            <li>Información</li>
                            <li>Métodos de pago</li>
                            <li>Preferencias</li>
                            <li>Configuración</li>
                        </ul>
                    )}

                    <button onClick={() => toggleDropdown('precios')} className='w-auto mx-6 flex flex-row gap-8 items-center'>
                        <Icon className='h-5 w-5 text-slate-500' icon="tabler:dots" />
                        <TextSidebar text='Precios' />
                        <Icon icon={`${openDropdown === 'precios' ? 'ri:arrow-up-s-line' : 'ri:arrow-down-s-line'}`} />
                    </button>
                    {openDropdown === 'precios' && (
                        <ul className='flex flex-col px-16 gap-4 text-sm'>
                            <li>Equipaje</li>
                            <li>Asientos</li>
                            <li>Vuelos</li>
                        </ul>
                    )}

                    <button className='w-auto mx-6 flex flex-row gap-8 items-center'>
                        <Icon className='h-5 w-5 text-slate-500' icon="material-symbols:search" />
                        <TextSidebar text='Vuelos' />
                        <p></p>
                    </button>

                    <button className='w-auto mx-6 flex flex-row gap-8 items-center'>
                        <Icon className='h-5 w-5 text-slate-500' icon="mdi:calendar" />
                        <TextSidebar text='Reservas' />
                        <p></p>
                    </button>

                    <button className='w-auto mx-6 flex flex-row gap-8 items-center'>
                        <Icon className='h-5 w-5 text-slate-500' icon="mdi:login" />
                        <TextSidebar text='Iniciar Sesión' />
                        <p></p>
                    </button>
                </section>
            </nav>
        </aside>
    )
}

export default Index