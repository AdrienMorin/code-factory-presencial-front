import MainText from "@/components/atoms/MainText/index";
import { MainTitle, SecondaryTitle } from "@/components/atoms/Title/index";
import Accordion from "@/components/molecules/Accordion";

interface ModalDetailsProps {
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
  flyNumber: string;
}

const accordionItems = [
  { item: "Adultos", value: "3" },
  { item: "Niños", value: "1" },
];

const ModalDetails: React.FC<ModalDetailsProps> = ({
  origin,
  destination,
  originBack,
  destinationBack,
  adultsNumber,
  childrenNumber,
  goBack,
  flyNumber,
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
        goBack &&
        originBack &&
        destinationBack && (
          <div className="flex">
            <div className="flight-details flex flex-col gap-3">
              <div className="flex flex-col mb-6">
                <MainTitle text="Ida" />
                <MainText text={origin.departureDate} color="text-slate-500" />
              </div>
              <div className="flex">
                <div className="flex flex-col gap-5 mr-10">
                  <div>
                    <SecondaryTitle text="Origen" />
                    <MainText
                      text={origin.code}
                      color="text-slate-500"
                      weight="bold"
                    />
                    <MainText
                      text={`${origin.city} - ${origin.country}`}
                      color="text-slate-500"
                    />
                    <MainText
                      text={`${origin.airport}`}
                      color="text-slate-500"
                    />
                  </div>
                  <div>
                    <SecondaryTitle text="Hora de Salida" />
                    <MainText
                      text={origin.departureTime}
                      color="text-slate-500"
                      weight="bold"
                    />
                  </div>
                  <div>
                    <SecondaryTitle text="Duración" />
                    <MainText
                      text={origin.timeInFLy}
                      color="text-slate-500"
                      weight="bold"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-5">
                  <div>
                    <SecondaryTitle text="Destino" />
                    <MainText
                      text={destination.code}
                      color="text-slate-500"
                      weight="bold"
                    />
                    <MainText
                      text={`${destination.city} - ${destination.country}`}
                      color="text-slate-500"
                    />
                    <MainText
                      text={`${destination.airport}`}
                      color="text-slate-500"
                    />
                  </div>
                  <div>
                    <SecondaryTitle text="Hora de Llegada" />
                    <MainText
                      text={destination.arrivalTime}
                      color="text-slate-500"
                      weight="bold"
                    />
                  </div>
                  <div>
                    <SecondaryTitle text="Número de vuelo" />
                    <MainText
                      text={flyNumber}
                      color="text-slate-500"
                      weight="bold"
                    />
                  </div>
                </div>
              </div>
              <Accordion
                textTitle="Pasaeros"
                bodyItems={accordionItems}
                itemsBetween={false}
              />
            </div>
            <div className=" border border-slate-200 mx-10"></div>
            <div>
              <div className="w-full flight-details flex flex-col gap-3">
                <div className="flex flex-col mb-6">
                  <MainTitle text="Ida" />
                  <MainText
                    text={origin.departureDate}
                    color="text-slate-500"
                  />
                </div>
                <div className="flex">
                  <div className="flex flex-col gap-5 mr-10">
                    <div>
                      <SecondaryTitle text="Origen" />
                      <MainText
                        text={origin.code}
                        color="text-slate-500"
                        weight="bold"
                      />
                      <MainText
                        text={`${origin.city} - ${origin.country}`}
                        color="text-slate-500"
                      />
                      <MainText
                        text={`${origin.airport}`}
                        color="text-slate-500"
                      />
                    </div>
                    <div>
                      <SecondaryTitle text="Hora de Salida" />
                      <MainText
                        text={origin.departureTime}
                        color="text-slate-500"
                        weight="bold"
                      />
                    </div>
                    <div>
                      <SecondaryTitle text="Duración" />
                      <MainText
                        text={origin.timeInFLy}
                        color="text-slate-500"
                        weight="bold"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-5">
                    <div>
                      <SecondaryTitle text="Destino" />
                      <MainText
                        text={destination.code}
                        color="text-slate-500"
                        weight="bold"
                      />
                      <MainText
                        text={`${destination.city} - ${destination.country}`}
                        color="text-slate-500"
                      />
                      <MainText
                        text={`${destination.airport}`}
                        color="text-slate-500"
                      />
                    </div>
                    <div>
                      <SecondaryTitle text="Hora de Llegada" />
                      <MainText
                        text={destination.arrivalTime}
                        color="text-slate-500"
                        weight="bold"
                      />
                    </div>
                    <div>
                      <SecondaryTitle text="Número de vuelo" />
                      <MainText
                        text={flyNumber}
                        color="text-slate-500"
                        weight="bold"
                      />
                    </div>
                  </div>
                </div>
                <Accordion
                  textTitle="Pasajeros"
                  bodyItems={accordionItems}
                  itemsBetween={false}
                />
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default ModalDetails;
