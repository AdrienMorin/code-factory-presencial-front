// src/components/FormularioPasajero.tsx
import React from 'react';

const FormularioPasajero: React.FC = () => {
  return (
    <div className="border border-blue-500 rounded-md p-6 mb-6">
      <h3 className="text-blue-500 font-bold mb-4">Pasajero</h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input className="border p-2 rounded" type="text" placeholder="Nombre" />
        <input className="border p-2 rounded" type="text" placeholder="Fecha de Nacimiento" />
        <input className="border p-2 rounded" type="text" placeholder="Apellido" />
        <select className="border p-2 rounded">
          <option>Género</option>
          <option>Masculino</option>
          <option>Femenino</option>
          <option>Otro</option>
        </select>
        <select className="border p-2 rounded">
          <option>Tipo</option>
          <option>Cédula</option>
          <option>Pasaporte</option>
        </select>
        <input className="border p-2 rounded" type="text" placeholder="Número de documento" />
        <input className="border p-2 rounded" type="text" placeholder="Teléfono" />
        <input className="border p-2 rounded" type="email" placeholder="Correo" />
      </div>
      <div>
        <h4 className="mb-2">Seleccione, si es necesario, el servicio que requiere</h4>
        <div className="border border-dashed border-blue-500 rounded-md p-4 grid grid-cols-1 gap-2">
          <label><input type="checkbox" /> Persona guía</label>
          <label><input type="checkbox" /> Intérprete</label>
          <label><input type="checkbox" /> Acompañante para menor de edad</label>
          <label><input type="checkbox" /> Acceso para silla de ruedas</label>
          <label><input type="checkbox" /> Mascota de compañía</label>
        </div>
      </div>
    </div>
  );
};

export default FormularioPasajero;
