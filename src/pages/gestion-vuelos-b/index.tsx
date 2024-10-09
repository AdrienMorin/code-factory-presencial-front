import Navbar from "@/components/navbar";
import Link from "next/link";

export default function FlightManagement() {
  return (
    <div>
      <Navbar />
      <h1 className="text-4xl font-bold">Gestion De Vuelos B</h1>

      <Link href="/gestion-vuelos-b/airplane-types">Tipos de aviones</Link>
      <Link href="/gestion-vuelos-b/flights">Vuelos</Link>
    </div>
  );
}
