import React, { useState } from 'react';
import { Button } from '@/components/atoms/button';
import { Icon } from '@iconify/react';
import { SubTitle, TextPrincipal, TextSecondary } from '@/components/atoms/titles';

const Index = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(JSON.stringify(formData)); // Aquí podrías manejar el envío de datos
  };
  
  return (
    <div className='h-full w-full flex justify-center items-center'>
      <div className='w-96 flex flex-col justify-center p-8 border-2 border-slate-200 rounded'>
        <SubTitle className='font-black' title='Iniciar Sesión'/>
        <div className='flex flex-row justify-start items-center gap-2'>
          <TextSecondary text='Nuevo Usuario?'/>
          <a className='text-sky-500 font-medium' href="/createUser">Crear una cuenta</a>
        </div>
        <form className='space-y-1' onSubmit={handleSubmit}>
          <TextPrincipal text='Email'/>
          <input type="text" id="email" value={formData.email} onChange={handleChange} name="email" placeholder="Ingresa tu email" required/>
          <TextSecondary text='Introduzca su dirección de correo electrónico'/>
          
          <TextPrincipal text='Contraseña'/>
          <input type="password" id="password" value={formData.password} onChange={handleChange} name="password" placeholder="Ingresa tu contraseña" required/>
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