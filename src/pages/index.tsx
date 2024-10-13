import React from 'react';
import DatosRequeridos from '../components/DatosRequeridos';
import FormularioPasajero from '../components/FormularioPasajero';
import Acciones from '../components/Acciones';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <DatosRequeridos />
      <FormularioPasajero />
      <Acciones />
    </div>
  );
};

export default Home;
