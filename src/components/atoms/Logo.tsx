import React from 'react';

export const Logo: React.FC = () => (
  <div className="flex items-center justify-center">
    <img 
      src="/images/Logo.svg" 
      alt="Logo" 
      className="w-32 h-auto filter invert brightness-0" // Ajusta tamaño y aplica color blanco
    />
  </div>
);

