import { Button } from '@/components/atoms/button';
import { useState } from 'react';
import { SubTitle, TextPrincipal, TextSecondary, TextSidebar, InputText } from '@/components/atoms/titles';

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
            <input
              type="text"
              id="tipoDocumento"
              name="tipoDocumento"
              value={formData.tipoDocumento}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded-sm"
            />
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
          
        </form>
        <Button type="submit">
          CREAR CUENTA
          <span className="line-md--account-add ml-2"></span>
        </Button>
      </div>
    </>
  );
}
