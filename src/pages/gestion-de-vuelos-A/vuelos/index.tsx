import FooterCopy from "@/components/molecules/FooterCopy";
import FlightForm from "@/components/molecules/forms/FlightForm";
import Navbar from "@/components/molecules/Navbar";

function FlightsPage() {
  return (
    <div className="h-screen px-4">
      <Navbar />
      <FlightForm />
      <FooterCopy />
    </div>
  );
}

export default FlightsPage;
