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
      <nav className="fixed top-0 left-0 w-full h-16 bg-blue-500 flex items-center justify-center shadow-md">
        <h1 className="text-white text-lg">Mi Aplicación</h1>
      </nav>

      {/* Contenido principal */}
      <div className="mt-20 flex justify-center items-center">
        <form className="w-full max-w-lg p-6 bg-white shadow-lg rounded-md" onSubmit={handleSubmit}>
          {/* Avatar Section */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="avatar">
              Avatar
            </label>
            <input type="file" id="avatar" className="border border-gray-300 p-2 w-full" />
          </div>

          {/* Datos Personales */}
          <h2 className="text-xl mb-4 font-semibold">Datos Personales</h2>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellido">
              Apellido
            </label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fechaNacimiento">
              Fecha de Nacimiento
            </label>
            <input
              type="date"
              id="fechaNacimiento"
              name="fechaNacimiento"
              value={formData.fechaNacimiento}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefono">
              Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ciudad">
              Ciudad
            </label>
            <input
              type="text"
              id="ciudad"
              name="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="genero">
              Género
            </label>
            <select
              id="genero"
              name="genero"
              value={formData.genero}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full"
            >
              <option value="">Seleccionar</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipoDocumento">
              Tipo de Documento
            </label>
            <input
              type="text"
              id="tipoDocumento"
              name="tipoDocumento"
              value={formData.tipoDocumento}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="documento">
              Documento
            </label>
            <input
              type="text"
              id="documento"
              name="documento"
              value={formData.documento}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="direccion">
              Dirección
            </label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full"
            />
          </div>

          <Button type="submit">CREAR CUENTA</Button>
        </form>
      </div>
    </>
  );
}
