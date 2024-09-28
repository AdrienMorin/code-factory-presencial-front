// export default function Pagos() {
//   return <div className='flex justify-center items-center'>Pagos-A pagina</div>;
// }

// pages/pagos-A/Pagos.tsx
import { PaymentModule } from "@/pages/pagos-A/components/organisms/paymentModule";
import React from "react";
import Header from "@/pages/pagos-A/components/molecules/header";
import OrderSummary from "@/pages/pagos-A/components/organisms/orderSummary";

export default function Pagos() {
  return (
    <div>
      <Header />
      <div className="w-full h-dvh bg-gray-200">
        <div className="bg-white w-11/12 h-dvh mx-auto pt-4 flex">
          <div className="bg-white w-7/12 h-auto p-6">
            <div className="bg-white w-full h-14 rounded-2xl flex items-center -mt-10">
              <h2 className="scroll-m-20 text-3xl mx-auto font-semibold tracking-tight">
                Método de pago
              </h2>
            </div>
            <div className="mt-4">
              <PaymentModule />
            </div>
          </div>
          <div className="w-5/12 h-auto px-6 pt-14">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
