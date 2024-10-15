import {PaymentModule} from "@/components/organisms/paymentModule";
import React from "react";
import Header from "@/components/molecules/header";
import OrderSummary from "@/components/organisms/orderSummary";
import Image from "next/image";

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
                  <div className={"flex flex-col lg:flex-row lg:justify-between"}>
                      <div className="m-2 px-8 lg:w-7/12">
                          <PaymentModule />
                      </div>
                      <div className={"mt-2 mr-10 ml-10 lg:w-4/12 lg:mr-8"}>
                          <OrderSummary />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}
