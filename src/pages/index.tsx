import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Home() {
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
    console.log(formData); // Aquí podrías manejar el envío de datos
  };

  return (
    <>
      {/* Barra de navegación fija */}
      <nav className="fixed top-0 left-0 w-full h-16 bg-sky-500 flex items-center justify-center shadow-md">
        <span className="typcn--compass"></span>
        <h1 className="text-white text-lg font-bold">Singapur Airlines</h1>
      </nav>

      {/* Contenido principal */}
      {/* Avatar Section */}
      <div className="mb-6 mt-40 px-20 flex justify-end flex-col">
        <h2 className="text-xl mb-4 font-bold">Avatar</h2>
        <input type="file" id="avatar" className="border border-gray-300 p-2 w-full" />
      </div>

      <div className="flex flex-col px-20">
        {/* Datos Personales */}
        <h2 className="text-xl mb-4 font-bold">Datos Personales</h2>
        <form className="grid grid-cols-2 gap-x-10 w-full" onSubmit={handleSubmit}>

          <div className="mb-4">
            <label className="block text-black-500 text-sm font-medium mb-2" htmlFor="nombre">
              Nombre*
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded-sm"
            />
            <p className='mt-2 text-slate-500 font-normal text-sm'>Introduzca su nombre</p>
          </div>

          <div className="mb-4">
            <label className="block text-black-500 text-sm font-medium mb-2" htmlFor="apellido">
              Apellido*
            </label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded-sm"
            />
            <p className='mt-2 text-slate-500 font-normal text-sm'>Introduzca su apellido</p>
          </div>

          <div className="mb-4">
            <label className="block text-black-500 text-sm font-medium mb-2" htmlFor="fechaNacimiento">
              Fecha de Nacimiento*
            </label>
            <input
              type="date"
              id="fechaNacimiento"
              name="fechaNacimiento"
              value={formData.fechaNacimiento}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded-sm"
            />
            <p className='mt-2 text-slate-500 font-normal text-sm'>Introduzca su fecha de nacimiento</p>
          </div>

          <div className="mb-4">
            <label className="block text-black-500 text-sm font-medium mb-2" htmlFor="telefono">
              Teléfono*
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded-sm"
            />
            <p className='mt-2 text-slate-500 font-normal text-sm'>Introduzca su teléfono</p>
          </div>

          <div className="mb-4">
            <label className="block text-black-500 text-sm font-medium mb-2" htmlFor="ciudad">
              Ciudad*
            </label>
            <input
              type="text"
              id="ciudad"
              name="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded-sm"
            />
            <p className='mt-2 text-slate-500 font-normal text-sm'>Introduzca su ciudad</p>
          </div>

          <div className="mb-4">
            <label className="block text-black-500 text-sm font-medium mb-2" htmlFor="genero">
              Género*
            </label>
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
            <p className='mt-2 text-slate-500 font-normal text-sm'>Seleccione su género</p>
          </div>

          <div className="mb-4">
            <label className="block text-black-500 text-sm font-medium mb-2" htmlFor="tipoDocumento">
              Tipo de Documento*
            </label>
            <input
              type="text"
              id="tipoDocumento"
              name="tipoDocumento"
              value={formData.tipoDocumento}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded-sm"
            />
            <p className='mt-2 text-slate-500 font-normal text-sm'>Seleccione su tipo de documento</p>
          </div>

          <div className="mb-4">
            <label className="block text-black-500 text-sm font-medium mb-2" htmlFor="documento">
              Documento*
            </label>
            <input
              type="text"
              id="documento"
              name="documento"
              value={formData.documento}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded-sm"
            />
            <p className='mt-2 text-slate-500 font-normal text-sm'>Introduzca su documento</p>
          </div>

          <div className="mb-4">
            <label className="block text-black-500 text-sm font-medium mb-2" htmlFor="direccion">
              Dirección*
            </label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded-sm"
            />
            <p className='mt-2 text-slate-500 font-normal text-sm'>Introduzca su dirección</p>
          </div>
          
        </form>
        <Button type="submit">
          CREAR CUENTA
          <span className="line-md--account-add ml-2"></span>
        </Button>
      </div>
    </>
  );
}
