import { RegisterForm } from "@/components/checkinA/CheckinForms/RegisterForm";
import { TitlePrincipal, TitleSecondary } from "@/components/checkinA/Titles";
import { ValidationList } from "@/components/checkinA/ValidationList";
import Image from "next/image";

export default function Validation() {
  return (
    <div className="max-w-7xl mx-auto grid grid-rows-[auto_1fr]">
      <div className="h-80 overflow-hidden relative z-0">
        <Image
          src="/assets/checkin.png"
          alt="Imagen animada de unos pasajeros en el aeropuerto."
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="grid grid-cols-2 gap-6 pt-10">
        <div className="flex flex-col py-10 px-14">
          <TitlePrincipal title="Registro de Vuelo" />
          <RegisterForm />
        </div>
        <div className="px-10 py-14 rounded-lg h-max shadow-md border">
          <TitleSecondary title="Recuerda" />
          <ValidationList />
        </div>
      </div>
    </div>
  );
}
