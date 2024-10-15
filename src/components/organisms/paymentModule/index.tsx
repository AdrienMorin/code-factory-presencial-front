import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import PayButton from "@/components/atoms/payButton";
import { useState } from "react";
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_TRANSACTION } from "@/utils/graphql/mutations/transactions";
import { CREATE_MERCADO_PAGO_PAYMENT, CREATE_STRIPE_PAYMENT } from "@/utils/graphql/mutations/payments";
import Image from "next/image";

export function PaymentModule() {
    const amount = 49.99;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [payment, setPayment] = useState(null);
    const [transaction, setTransaction] = useState(null);
    const [selectedMethod, setSelectedMethod] = useState("1");


    const [createTransaction] = useMutation(CREATE_TRANSACTION, {
        onCompleted: data => {
            setTransaction(data.createTransaction);
            console.log('Transaction created:', data.createTransaction);
        },
        onError: error => {
            console.error('Error creating transaction:', error);
        }
    });

    const [createStripePayment] = useMutation(CREATE_STRIPE_PAYMENT, {
        onCompleted: data => {
            setPayment(data.createStripePaymentSession);
            console.log('Stripe Payment created:', data.createStripePaymentSession);
        },
        onError: error => {
            console.error('Error creating payment:', error);
        }
    });

    const [createMercadoPagoPayment] = useMutation(CREATE_MERCADO_PAGO_PAYMENT, {
        onCompleted: data => {
            setPayment(data.createMercadoPagoPreference);
            console.log('Mercado Pago Payment created:', data.createMercadoPagoPreference);
        },
        onError: error => {
            console.error('Error creating payment:', error);
        }
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        try {
            const { data } = await createTransaction({
                variables: {
                    inputTransaction: {
                        additional_charge: 10000.0,
                        booking_id: "2",
                        payment_method_id: selectedMethod
                    }
                }
            });
            const transactionId = data.createTransaction.id;

            if (selectedMethod === "1") {
                const { data: paymentData } = await createStripePayment({
                    variables: {
                        transactionId: transactionId
                    }
                });
                if (paymentData.createStripePaymentSession) {
                    window.location.href = paymentData.createStripePaymentSession; // Remplace "url" par le champ correct
                }
            } else if (selectedMethod === "2") {
                const { data: paymentData } = await createMercadoPagoPayment({
                    variables: {
                        transactionId: transactionId,
                        amount: 20000
                    }
                });
                if (paymentData.createMercadoPagoPreference) {
                    window.location.href = paymentData.createMercadoPagoPreference; // Remplace "url" par le champ correct
                }
            }
        } catch (err: any) {
            console.error('Error creating transaction:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="bg-white p-2 rounded-md">
                <RadioGroup
                    defaultValue="1"
                    onValueChange={(value) => setSelectedMethod(value)}
                    className={"mb-4"}
                >
                    <div className="flex items-center justify-between bg-gray-200 h-14 p-6 rounded-full">
                        <div className={"flex space-x-2"}>
                            <RadioGroupItem value="1" id="r1" className="w-6 h-6 bg-white border-white"/>
                            <Label htmlFor="r1" className={"text-xl"}>Stripe</Label>
                        </div>
                        <div className={"flex items-center space-x-2"}>
                            <Image src={"/tiposDePago/visa-logo.webp"} alt={"visa"} className={"w-auto h-6"} width={100} height={50} />
                            <Image src={"/tiposDePago/mastercard-logo.jpg"} alt={"mastercard"} className={"w-auto h-6"} width={50} height={50} />
                            <Image src={"/tiposDePago/american-express-logo.avif"} alt={"american-express"} className={"w-auto h-6"} width={50} height={50} />
                            <Image src={"/tiposDePago/union-pay-logo.png"} alt={"union-pay"} className={"w-auto h-6"} width={50} height={50} />
                            <Image src={"/tiposDePago/diners-club-logo.png"} alt={"diners-club"} className={"w-auto h-6"} width={50} height={50} />
                            <Image src={"/tiposDePago/discover-logo.jpg"} alt={"discover"} className={"w-auto h-6"} width={50} height={50} />
                            <Image src={"/tiposDePago/jcb-logo.jpeg"} alt={"jcb"} className={"w-auto h-6"} width={50} height={50} />
                        </div>
                    </div>
                    <div className="flex items-center justify-between bg-gray-200 h-14 p-6 rounded-full">
                        <div className={"flex space-x-2"}>
                            <RadioGroupItem value="2" id="r2" className="w-6 h-6 bg-white border-white"/>
                            <Label htmlFor="r2" className={"text-xl"}>Mercado Pago</Label>

                        </div>
                        <div className={"flex items-center space-x-2"}>
                            <Image src={"/tiposDePago/mercado-pago-logo.png"} alt={"jcb"} className={"w-auto h-6"} width={50} height={50} />
                            <Image src={"/tiposDePago/pse-logo.png"} alt={"discover"} className={"w-auto h-6"} width={50} height={50} />
                            <Image src={"/tiposDePago/efecty-logo.png"} alt={"jcb"} className={"w-auto h-6"} width={50} height={50} />
                            <Image src={"/tiposDePago/visa-logo.webp"} alt={"visa"} className={"w-auto h-6"} width={100} height={50} />
                            <Image src={"/tiposDePago/mastercard-logo.jpg"} alt={"mastercard"} className={"w-auto h-6"} width={50} height={50} />
                            <Image src={"/tiposDePago/american-express-logo.avif"} alt={"american-express"} className={"w-auto h-6"} width={50} height={50} />
                            <Image src={"/tiposDePago/diners-club-logo.png"} alt={"diners-club"} className={"w-auto h-6"} width={50} height={50} />
                        </div>
                        </div>
                </RadioGroup>
                <PayButton usesStripe={selectedMethod === "Stripe"} stripe={false} loading={loading} amount={amount} />
            </form>
            {error && <p>Error: {error}</p>}
        </div>
    );
}
