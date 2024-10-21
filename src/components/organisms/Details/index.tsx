import MainText from "@/components/atoms/MainText/index";
import { MainTitle } from "@/components/atoms/Title/index";

interface DetailsProps {
  origin: {
    city: string;
    country: string;
    code: string;
    airport: string;
    timeInFLy: string;
    departureDate: string;
    departureTime: string;
  };
  destination: {
    city: string;
    country: string;
    code: string;
    airport: string;
    arrivalDate: string;
    arrivalTime: string;
  };
  originBack?: {
    city: string;
    country: string;
    code: string;
    airport: string;
    timeInFLy: string;
    departureDate: string;
    departureTime: string;
  };
  destinationBack?: {
    city: string;
    country: string;
    code: string;
    airport: string;
    arrivalDate: string;
    arrivalTime: string;
  };
  adultsNumber: number;
  childrenNumber: number;
  goBack: boolean;
}

const index: React.FC<DetailsProps> = ({
  origin,
  destination,
  originBack,
  destinationBack,
  adultsNumber,
  childrenNumber,
  goBack,
}) => {
  return (
    <>
      {!goBack ? (
        <div className="w-full flight-details flex gap-36">
          <div className="flex flex-col gap-5">
            <div>
              <MainText text="Origen" weight="700" />
              <div>
                <MainText
                  text={`${origin.city} - ${origin.country} ${origin.code}`}
                  color="text-slate-500"
                />
                <MainText text={origin.departureDate} color="text-slate-500" />
              </div>
            </div>
            <div>
              <MainText text="Hora de Salida" weight="700" />
              <MainText text={origin.departureTime} color="text-slate-500" />
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
                <MainText
                  text={destination.arrivalDate}
                  color="text-slate-500"
                />
              </div>
            </div>
            <div>
              <MainText text="Hora de Llegada" weight="700" />
              <MainText text={destination.arrivalTime} color="text-slate-500" />
            </div>
            <div>
              <MainText text="Niños:" weight="700" />
              <MainText text={`${childrenNumber}`} color="text-slate-500" />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flight-details flex flex-col">
          <div className="flex items-end gap-3">
            <MainTitle text="Ida" />
            <div className="flex gap-1">
              <MainText text={origin.departureDate} color="text-slate-500" />
              <span>-</span>
              <MainText text={origin.departureTime} color="text-slate-500" />
            </div>
          </div>
          <div className="flex justify-between gap-32 px-4">
            <div>
              <MainText text="Origen" weight="700" />
              <MainText
                text={`${origin.city} - ${origin.country} ${origin.code}`}
                color="text-slate-500"
              />
            </div>
            <div>
              <MainText text="Destino" weight="700" />
              <MainText
                text={`${destination.city} - ${destination.country} ${destination.code}`}
                color="text-slate-500"
              />
            </div>
          </div>

          {/* ---- Regreso ---- */}
          {goBack && originBack && destinationBack && (
            <>
              <div className="flex items-end gap-3 mt-8">
                <MainTitle text="Regreso" />
                <div className="flex gap-1">
                  <MainText
                    text={originBack.departureDate}
                    color="text-slate-500"
                  />
                  <span>-</span>
                  <MainText
                    text={originBack.departureTime}
                    color="text-slate-500"
                  />
                </div>
              </div>
              <div className="flex justify-between gap-32 px-4">
                <div>
                  <MainText text="Origen" weight="700" />
                  <MainText
                    text={`${originBack.city} - ${originBack.country} ${originBack.code}`}
                    color="text-slate-500"
                  />
                </div>
                <div>
                  <MainText text="Destino" weight="700" />
                  <MainText
                    text={`${destinationBack.city} - ${destinationBack.country} ${destinationBack.code}`}
                    color="text-slate-500"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default index;
