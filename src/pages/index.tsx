import FloatBadge from "@/components/molecules/floatBadge/index";

import AccordionsSection from "@/components/organisms/AccordionsSection/index";
import Details from "@/components/organisms/Details";
import { MainTitle } from "../components/atoms/Title/index";
import MainText from "../components/atoms/MainText/index";
import MainButton from "../components/atoms/MainButton/index";
import SecundaryButton from "../components/atoms/SecundaryButton/index";

import { IoAddCircleOutline } from "react-icons/io5";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <div>
        {/* <FloatBadge></FloatBadge>
        <Details/>
        <AccordionsSection></AccordionsSection> */}

        <main className="w-[500px] bg-white shadow-xl mt-6 py-10 px-8 rounded-[6px]">
          <div className="flex justify-between items-center">
            <MainTitle text="Pagar débito o crédito" />
            <IoAddCircleOutline className="text-3xl" />
          </div>
          <div className="w-full h-32 relative border mt-6 rounded-[6px] flex justify-center items-center">
            <p className="absolute top-2 left-2">Tus tarjetas</p>
            <p>No hay tarjetas</p>
          </div>
          <div className="flex justify-between mt-6">
            <SecundaryButton text="Regresar" handleClick={() => {}} />
            <MainButton text="Continuar" handleClick={() => {}} />
          </div>
        </main>
      </div>
    </div>
  );
}
