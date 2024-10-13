// src/components/DatosRequeridos.tsx
import React from 'react';

const DatosRequeridos: React.FC = () => {
  return (
    <div className="border border-blue-500 rounded-md p-4 text-center mb-6">
      <h2 className="text-blue-500 font-bold">Datos Requeridos</h2>
      <p className="text-gray-600">
        Los pasajeros necesitan contar con pasaporte y visa para poder tomar este vuelo
      </p>
    </div>
  );
};

export default DatosRequeridos;
