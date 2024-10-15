import AccordionsSection from '@/components/organisms/AccordionsSection/index'
import Details from "@/components/organisms/Details";

import CardHeader from "@/components/molecules/CardHeader/index";
import TotalPrice from "@/components/molecules/TotalPrice/index";

const index = () => {
  return (
    <div className="shadow-lg rounded-[6px]">
      <div className="p-16">
        <div className="p-4">
          <CardHeader />
        </div>
        <div className="p-4">
          <Details />
        </div>
        <div className="p-4">
          <AccordionsSection />
        </div>
      </div>
      <TotalPrice total={243.408} />
    </div>
  )
}

export default index