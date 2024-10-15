import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import Sidebar from '@/components/organisms/Sidebar'

const Index = () => {
    // Estado para controlar si el sidebar está abierto o cerrado
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Referencia para el sidebar
    const sidebarRef = useRef<HTMLDivElement>(null);

    // Función para cerrar el sidebar
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    // Efecto para manejar clics fuera del sidebar
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Si se hace clic fuera del sidebar, cerrarlo
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                closeSidebar();
            }
        };

        // Añadir el evento al hacer clic en cualquier lugar
        document.addEventListener('mousedown', handleClickOutside);

        // Limpiar el evento cuando se desmonta el componente
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="fixed top-0 w-full h-16 bg-sky-500 flex flex-row items-center shadow-md">

            <div className='flex flex-row justify-between mx-5 items-center'>
                <div onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <Icon className='h-8 w-8 text-white' icon={`${isSidebarOpen ? 'ic:sharp-close' : 'ic:outline-menu'}`} />
                </div>
                {isSidebarOpen && (
                <div ref={sidebarRef} className='fixed top-0 left-0 h-full'>
                    <Sidebar></Sidebar>
                </div>
            )}
            </div>

            <div className='w-full flex flex-row justify-center items-center'>
                <Icon className='h-6 w-6 text-white' icon="mdi:compass-outline" />
                <h1 className="text-white text-xl font-extrabold">Singapur Airlines</h1>
            </div>
        </nav>    
    )
}

export default Index