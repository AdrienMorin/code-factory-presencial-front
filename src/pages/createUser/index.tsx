import React from 'react'
import { Icon } from '@iconify/react';
import { Button } from '@/components/atoms/button';
import { useState } from 'react';
import { SubTitle, TextPrincipal, TextSecondary } from '@/components/atoms/titles';

const Index = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        fechaNacimiento: '',
        telefono: '',
        ciudad: '',
        genero: '',
        tipoDocumento: '',
        documento: '',
        direccion: ''
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
        <>
    
          {/* Contenido principal */}
          {/* Avatar Section */}
          <div className="mb-6 mt-40 px-20 flex justify-end flex-col">
            <SubTitle title='Avatar'/>
            <input type="file" id="avatar" className="border border-gray-300 p-2 w-full" />
          </div>
    
          <div className="flex flex-col px-20">
            {/* Datos Personales */}
            <SubTitle title='Datos Personales'/>
            <form className="grid grid-cols-2 gap-x-10 w-full" onSubmit={handleSubmit}>
    
              <div className="mb-4">
                <TextPrincipal text='Nombre*'/>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 w-full rounded-sm"
                />
                <TextSecondary text='Introduzca su nombre'/>
              </div>
    
              <div className="mb-4">
                <TextPrincipal text='Apellido*'/>
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 w-full rounded-sm"
                />
                <TextSecondary text='Introduzca su apellido'/>
              </div>
    
              <div className="mb-4">
                <TextPrincipal text='Fecha de nacimiento*'/>
                <input
                  type="date"
                  id="fechaNacimiento"
                  name="fechaNacimiento"
                  value={formData.fechaNacimiento}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 w-full rounded-sm"
                />
                <TextSecondary text='Introduzca su fecha de nacimiento'/>
              </div>
    
              <div className="mb-4">
                <TextPrincipal text='Teléfono*'/>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 w-full rounded-sm"
                />
                <TextSecondary text='Introduzca su teléfono'/>
              </div>
    
              <div className="mb-4">
                <TextPrincipal text='Ciudad*'/>
                <input
                  type="text"
                  id="ciudad"
                  name="ciudad"
                  value={formData.ciudad}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 w-full rounded-sm"
                />
                <TextSecondary text='Introduzca su ciudad'/>
              </div>
    
              <div className="mb-4">
                <TextPrincipal text='Género*'/>
                <select
                  id="genero"
                  name="genero"
                  value={formData.genero}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 w-full rounded-sm"
                >
                  <option value="">Seleccionar</option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                  <option value="otro">Otro</option>
                </select>
                <TextSecondary text='Seleccione su género'/>
              </div>
    
              <div className="mb-4">
                <TextPrincipal text='Tipo de documento*'/>
                <select
                  id="tipoDocumento"
                  name="tipoDocumento"
                  value={formData.tipoDocumento}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 w-full rounded-sm"
                >
                  <option value="">Seleccionar</option>
                  <option value="cedula">Cédula de Ciudadanía</option>
                  <option value="extranjeria">Cédula de Extranjería</option>
                  <option value="tarjeta">Tarjeta de Identidad</option>
                </select>
                <TextSecondary text='Seleccione su tipo de documento'/>
              </div>
    
              <div className="mb-4">
                <TextPrincipal text='Documento*'/>
                <input
                  type="text"
                  id="documento"
                  name="documento"
                  value={formData.documento}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 w-full rounded-sm"
                />
                <TextSecondary text='Introduzca su documento'/>
              </div>
    
              <div className="mb-4">
                <TextPrincipal text='Dirección*'/>
                <input
                  type="text"
                  id="direccion"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 w-full rounded-sm"
                />
                <TextSecondary text='Introduzca su dirección'/>
              </div>
    
              <Button type="submit">
                CREAR CUENTA
                <Icon className='h-6 w-6 text-white mx-2' icon="line-md:account-add" />
              </Button>
            </form>
          </div>
        </>
      );
}

export default Index