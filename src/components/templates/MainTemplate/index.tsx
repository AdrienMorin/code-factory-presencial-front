import { ReactNode } from "react";
import PlaneIcon from "@/../public/assets/plane.svg";
import Image from "next/image";

const index = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header className="h-16 flex items-center pl-10 bg-primary text-white">
        <div className="flex justify-center items-center bg-white w-10 h-10 rounded-full">
          <Image
            src={PlaneIcon}
            alt="Plane Icon"
            className="w-8 text-white"
          />
        </div>
        <h1 className="ml-4 font-bold">SITAS - Aerolínea</h1>
      </header>
      {children}
      <footer className="absolute bottom-0 left-0 right-0 h-10 flex justify-center items-center bg-primary text-white">
        <p>© 2024 CodeFactory - Todos los derechos reservados</p>
      </footer>
    </>
  );
};

export default index;
