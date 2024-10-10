import { useRouter } from 'next/router';
import {Card} from "@/components/ui/card";

export default function PaymentSuccess() {
    const router = useRouter();
    const { amount } = router.query;

    if (!amount) {
        return <div>Loading...</div>;
    }

    return (
        <Card className="w-4/5 text-center mx-auto mt-12">
            <div className="mb-10">
                <h1 className="scroll-m-20 pt-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Muchas gracias!
                </h1>
                <h3 className="mt-3 scroll-m-20 text-2xl font-semibold tracking-tight">
                    Su transacción ha sido pagada con éxito
                </h3>
                <Card className="mt-6 w-1/2 mx-auto bg-gray-200 flex justify-center">
                    <h2 className="scroll-m-20 p-2 text-3xl font-semibold tracking-tight first:mt-0">
                        ${amount}
                    </h2>
                </Card>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    Ahora puede cerrar esta pantalla.
                </p>
            </div>
        </Card>
    );
}
