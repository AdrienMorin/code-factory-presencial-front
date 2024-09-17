import Link from "next/link";

const CheckinA = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center p-4">
      <h1 className="text-2xl font-bold">Checkin A</h1>
      <Link
        href="/checkinA/confirmation"
        className="bg-primary text-white p-2 rounded-md"
      >
        Ir al formulario de Checkin
      </Link>
      <span className="text-sm">
        Se estableció manualmente registrar 2 pasajeros para probar la
        funcionalidad de autocompletar información.
      </span>
    </div>
  );
};

export default CheckinA;
