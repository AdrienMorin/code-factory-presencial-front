import {PaymentModule} from "@/pages/pagos-A/components/organisms/paymentModule";
import React from "react";
import Header from "@/pages/pagos-A/components/molecules/header";

export default function Pagos() {
  return (
      <div >
          <Header />
          <div className="w-full h-full bg-gray-200">
              <div className="bg-white w-11/12 h-dvh mx-auto pt-4">
                  <div className="bg-white w-5/12 h-14 rounded-2xl flex items-center -mt-10">
                      <h2 className="scroll-m-20 text-3xl mx-auto font-semibold tracking-tight">
                          Método de pago
                      </h2>
                  </div>
                  <div className="m-2 px-8 lg:w-7/12">
                      <PaymentModule/>
                  </div>
              </div>
          </div>
      </div>
  );
}
