import FloatBadge from "@/components/molecules/floatBadge/index";

import AccordionsSection from '@/components/organisms/AccordionsSection/index'
import Details from "@/components/organisms/Details";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <h1 className="text-6xl">Hello World pagos B</h1>
        <FloatBadge></FloatBadge>
        <Details/>
        <AccordionsSection></AccordionsSection>
      </div>
    </div>
  );
}
