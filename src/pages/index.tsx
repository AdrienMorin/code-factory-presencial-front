import FilterCard from "@/components/molecules/filterCard";
import FlightCard from "@/components/molecules/flightCard";
import SearchCard from "@/components/molecules/searchCard";

export default function Home() {
  return (
    <div>
      <SearchCard />
      <div className="h-screen bg-accent">
        <FilterCard />
        <div className="flex flex-col justify-center items-center pt-3">
          <div className="w-3/4">
            <FlightCard />
          </div>
        </div>
      </div>
    </div>
  );
}
