import Category from "@/components/atoms/category";
import City from "@/components/atoms/city";
import { DepartureDate, RoundTripDate } from "@/components/atoms/date";
import DateRangeFilter from "@/components/atoms/dateRangeFilter";
import PassengerNumber from "@/components/atoms/passengerNumber";
import PriceRangeFilter from "@/components/atoms/priceRangeFilter";
import ScalesNumberFilter from "@/components/atoms/scalesNumberFilter";
import { Text, Title } from "@/components/atoms/text";
import ScheduleRangeFilter from "@/components/atoms/scheduleRangeFilter";
import categoriesData from "@/utils/const/categoriesData";
import citiesList from "@/utils/const/citiesList";

export default function Home() {
  return (
    <div>
      <Title title="Búsqueda de vuelos" />
      <Text text="Encuentra el vuelo que necesitas" />
      <Category categories={categoriesData} />
      <City cities={citiesList} />
      <DepartureDate />
      <RoundTripDate />
      <DateRangeFilter />
      <PassengerNumber />
      <PriceRangeFilter />
      <ScalesNumberFilter />
      <ScheduleRangeFilter />
    </div>
  );
}
