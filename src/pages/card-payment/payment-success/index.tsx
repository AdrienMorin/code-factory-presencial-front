"use client";

import AlertMessage from "@/components/molecules/AlertMessage";
import ModalAlert from "@/components/templates/ModalAlert";
import { useRouter } from 'next/navigation'

const PaymentSucces = () => {
  const router = useRouter();

  const goToHomePage = () => {
    router.push('/'); 
  };

  return (
    <div>
      <ModalAlert modalState={true} onClose={() => goToHomePage() } >
        <AlertMessage title="Compra exitosa" text="Disfruta tu viaje, gracias por confiar en nosotros" ></AlertMessage>
      </ModalAlert>
    </div>
  )
}

export default PaymentSucces
