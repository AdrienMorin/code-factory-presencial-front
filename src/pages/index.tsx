import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-slate-400 to-slate-900">
      <Button variant="outline" size="lg">
        <Link href="/gestion-de-vuelos-A">Ir al módulo</Link>
      </Button>
    </div>
  );
}
