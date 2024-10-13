import React from 'react';
import { Icon } from '@iconify/react';

const Index = () => {
    // Variable para modificar el estado del menu desplegable
    const [open, setOpen] = React.useState(false);

    return (
        <nav className='w-full bg-white shadow-xl flex flex-row justify-around h-16 relative'>

            <section className='flex flex-row justify-between mx-5 items-center w-full'>
                <div onClick={() => setOpen(!open)}>
                    <Icon className='h-8 w-8 text-tertiary' icon={`${open ? 'ic:sharp-close' : 'ic:outline-menu'}`} />
                </div>
            </section>

            {/*Bloque para el menú desplegable*/}
            <div className={`w-screen flex justify-center inset-x-0 top-24 ${open ? 'absolute' : 'hidden'}`}>
                <div className='bg-white w-10/12 rounded-lg shadow-2xl'>
                    <ul className='flex flex-col w-full py-3'>
                    
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Index