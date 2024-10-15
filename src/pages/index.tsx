import CardTemplates from "@/components/templates/CardTemplate/index";
import PaymentsMethods from "@/components/organisms/PaymentsSection/index";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div className="m-10">
        <CardTemplates />
      </div>
      <div className="m-10">
        <PaymentsMethods />
      </div>
    </div>
  );
}
