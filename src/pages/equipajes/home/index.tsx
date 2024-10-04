// src/app/home/page.tsx (o src/pages/home.tsx)
import { Header } from "../../../components/molecules/Header"; // Asegúrate de ajustar la ruta según la estructura de tu proyecto
export default function Home() {
  return (
    <div>
      <Header />
      <h1 className="text-3xl">Página de Inicio</h1>
      {/* Resto del contenido de la página */}
    </div>
  );
}
