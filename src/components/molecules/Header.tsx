import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../atoms/DropdownMenu";
import { Avatar, AvatarFallback } from "../atoms/Avatar"; // Asegúrate de que AvatarFallback esté importado
import { Logo } from "../atoms/Logo";
import { Button } from "../atoms/button"; // Importa tu componente Button
import { FaBars } from "react-icons/fa"; 
import { useState } from "react";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar el menú

  return (
    <header className="flex items-center justify-between p-4 bg-customSky shadow-md">
      {/* Menú desplegable */}
      <div className="flex items-center">
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              className="text-2xl p-0 bg-transparent border-none" // Estilo para ocultar el botón
              onClick={() => setIsOpen((prev) => !prev)} // Alterna el estado del menú
            >
              <FaBars /> {/* Solo se muestra el ícono */}
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Logo centrado */}
      <div className="flex-grow flex justify-center">
        <Logo />
      </div>

      {/* Avatar con solo las letras "CN" */}
      <div className="flex-shrink-0">
        <Avatar>
          <AvatarFallback>CN</AvatarFallback> {/* Muestra solo "CN" */}
        </Avatar>
      </div>
    </header>
  );
};
