import React from 'react';
import { Button } from '@/components/atoms/button';
import { Icon } from '@iconify/react';
import { SubTitle, TextPrincipal, TextSecondary } from '@/components/atoms/titles';

const Index = () => {
  return (
    <div className='h-full w-full flex justify-center items-center'>
      <div className='w-96 flex flex-col justify-center items-center border border-slate-200 rounded-sm'>
        <SubTitle className='font-black' title='Iniciar Sesión'/>
        <div className='flex flex-row justify-center items-center gap-2'>
          <TextSecondary text='Nuevo Usuario?'/>
          <a className='text-sky-500 font-medium' href="/">Crear una cuenta</a>
        </div>
        <form>
          <TextPrincipal text='Email'/>
          <input type="text" id="email" name="email" placeholder="Ingresa tu email" required/>
          <TextSecondary text='Introduzca su dirección de correo electrónico'/>
          
          <TextPrincipal text='Contraseña'/>
          <input type="password" id="password" name="password" placeholder="Ingresa tu contraseña" required/>
          <TextSecondary text='Introduzca su contraseña'/>
          
          <div className='flex justify-center w-full'>
            <Button type="submit" className='w-full'>
              INICIAR SESIÓN
              <Icon className='h-6 w-6' icon="iconamoon:enter" />
            </Button>
          </div>
        </form>
    
        <a className='text-sky-500 font-medium' href="#">Olvide mi contraseña</a>
      </div>
    </div>
  )
}

export default Index;