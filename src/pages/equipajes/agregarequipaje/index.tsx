import { Header } from "@/components/molecules/Header"; 
import { Footer } from "@/components/atoms/Footer"; 
import { LuggageForm } from "@/components/organism/LuggageForm"; // Adjust the import if necessary

export default function AgregarEquipaje() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Header de la página */}
      <Header />

      {/* Contenido principal */}
      <main
        className="flex-grow flex flex-col items-center justify-start text-center p-4 space-y-4"
        style={{ marginTop: '3.5rem' }}
      >
        {/* Formulario para añadir equipaje */}
        <LuggageForm />
      </main>

      {/* Footer de la página */}
      <Footer />
    </div>
  );
}

