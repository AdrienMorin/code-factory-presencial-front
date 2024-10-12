import MainText from "@/components/atoms/MainText/index";

const index = () => {

  const origin = { city: "Medellín", country: "Colombia", code: "MED" };
  const destination = { city: "Bogotá", country: "Colombia", code: "BOG" };
  const departureDate = "07/03/2024";
  const returnDate = "10/03/2024";
  const departureTime = "2:30 p.m";
  const arrivalTime = "4:00 p.m";
  const adultsNumber = 1;
  const childrenNumber = 0;
  
  return (
    <div className="w-full flight-details flex gap-36">
      <div className="flex flex-col gap-5">
        <div>
          <MainText text="Origen" weight="700" />
          <div>
            <MainText
              text={`${origin.city} - ${origin.country} ${origin.code}`}
              color="text-slate-500"
            />
            <MainText text={departureDate} color="text-slate-500" />
          </div>
        </div>
        <div>
          <MainText text="Hora de Salida" weight="700" />
          <MainText text={departureTime} color="text-slate-500" />
        </div>
        <div>
          <MainText text="Adultos" weight="700" />
          <MainText text={`${adultsNumber}`} color="text-slate-500" />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <MainText text="Destino" weight="700" />
          <div>
            <MainText
              text={`${destination.city} - ${destination.country} ${destination.code}`}
              color="text-slate-500"
            />
            <MainText text={returnDate} color="text-slate-500" />
          </div>
        </div>
        <div>
          <MainText text="Hora de Llegada" weight="700" />
          <MainText text={arrivalTime} color="text-slate-500" />
        </div>
        <div>
          <MainText text="Niños:" weight="700" />
          <MainText text={`${childrenNumber}`} color="text-slate-500" />
        </div>
      </div>
    </div>
  );
};

export default index;
