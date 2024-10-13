// src/components/Acciones.tsx
import React from 'react';
import Link from 'next/link';

const Acciones: React.FC = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <button className="bg-blue-500 text-white rounded-md py-2 px-4">
        Guardar
      </button>
      <div className="flex space-x-4">
        <Link href="/asientos" className="bg-blue-500 text-white rounded-md py-2 px-4">
          Seleccionar Asientos
        </Link>
        <Link href="/equipaje" className="bg-blue-500 text-white rounded-md py-2 px-4">
          Gestionar Equipaje
        </Link>
      </div>
      <Link href="/pagos" className="bg-blue-500 text-white rounded-md py-2 px-4">
        Pagar
      </Link>
    </div>
  );
};

export default Acciones;
