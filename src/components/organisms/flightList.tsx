import { useRouter } from "next/router";
import FlightCard from "../molecules/flightCard";
import FilterCard from "../molecules/filterCard";
import FlightsAvailable from "@/utils/const/flightList";

const FlightList = () => {
  const router = useRouter();
  const { origin, destination, startDate, endDate, tripType } = router.query;

  const normalizeString = (str: string | string[] | undefined) => {
    return Array.isArray(str) ? str[0].toLowerCase() : (str || "").toLowerCase();
  };

  const originString = normalizeString(origin);
  const destinationString = normalizeString(destination);
  const startDateString = Array.isArray(startDate) ? startDate[0] : startDate || "";
  const endDateString = Array.isArray(endDate) ? endDate[0] : endDate || "";
  const tripTypeString = Array.isArray(tripType) ? tripType[0] : tripType || "departure";

  const filteredFlights = FlightsAvailable.filter((flight) => {
    const matchesOrigin = originString ? flight.origin.toLowerCase() === originString : true;
    const matchesDestination = destinationString
      ? flight.destination.toLowerCase() === destinationString
      : true;
    const matchesStartDate = startDateString ? flight.date === startDateString.split("T")[0] : true;
    const matchesEndDate = endDateString ? flight.date === endDateString.split("T")[0] : true;

    if (tripTypeString === "departure") {
      if (matchesOrigin && matchesDestination && matchesStartDate) return true;
      else return false;
    }

    if (tripTypeString === "roundtrip") {
      const matchesReturn =
        flight.origin.toLowerCase() === destinationString &&
        flight.destination.toLowerCase() === originString;

      return (
        (matchesOrigin && matchesDestination && matchesStartDate) ||
        (matchesReturn && matchesEndDate)
      );
    }

    return false;
  });

  return (
    <div className="flex flex-col justify-center bg-accent h-screen">
      <div className="flex flex-col">
        <div className="mb-2">
          <FilterCard />
        </div>
        <div className="grid grid-cols-1 gap-6 overflow-y-auto max-h-[90vh] pb-2 mb-2">
          {filteredFlights.length > 0 ? (
            filteredFlights.map((flight, index) => (
              <FlightCard
                key={index}
                flight={{
                  origin: flight.origin,
                  destination: flight.destination,
                  date: flight.date,
                  time: flight.time,
                  scales: flight.scales,
                }}
              />
            ))
          ) : (
            <p className="w-3/4 mx-auto">No flights found for the given criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlightList;
