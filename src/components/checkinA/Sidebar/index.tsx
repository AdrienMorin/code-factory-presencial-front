import { Button } from "@/components/ui/button";
import { TitleSecondary } from "../Titles";

export const Sidebar = ({
  section,
  onSection,
}: {
  section: number;
  onSection: (section: number) => void;
}) => {
  return (
    <nav className="flex flex-col items-start border p-4 rounded-lg h-full w-min">
      <TitleSecondary title="Navegación" />
      <Button
        variant="ghost"
        className={`w-full justify-start ${section === 0 ? "bg-accent" : ""}`}
        onClick={() => onSection(0)}
      >
        Datos Personales
      </Button>
      <Button
        variant="ghost"
        className={`w-full justify-start ${section === 1 ? "bg-accent" : ""}`}
        onClick={() => onSection(1)}
      >
        Contacto de Emergencia
      </Button>
      <Button
        variant="ghost"
        className={`w-full justify-start ${section === 2 ? "bg-accent" : ""}`}
        onClick={() => onSection(2)}
      >
        Cargar Documentos
      </Button>
    </nav>
  );
};
