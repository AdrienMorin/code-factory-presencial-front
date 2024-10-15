import MainButton from "@/components/atoms/MainButton";
import SecundaryButton from "@/components/atoms/SecundaryButton";
import { MainTitle } from "@/components/atoms/Title";
import Link from "next/link";
import { IoAddCircleOutline } from "react-icons/io5";

const index = () => {
  return (
    <main className="w-[500px] mx-auto bg-white shadow-xl mt-6 py-10 px-8 rounded-[6px]">
      <div className="flex justify-between items-center">
        <MainTitle text="Pagar débito o crédito" />
        <IoAddCircleOutline className="text-3xl" />
      </div>
      <div className="w-full h-32 relative border mt-6 rounded-[6px] flex justify-center items-center">
        <p className="absolute top-2 left-2">Tus tarjetas</p>
        <p>No hay tarjetas</p>
      </div>
      <div className="flex justify-between mt-6">
        <Link href="/" >
          <SecundaryButton text="Regresar" handleClick={() => {}} />
        </Link>
        <MainButton text="Continuar" handleClick={() => {}} />
      </div>
    </main>
  );
};

export default index;
