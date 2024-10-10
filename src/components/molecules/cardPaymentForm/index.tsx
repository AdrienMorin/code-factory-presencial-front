"use client";

import StripeCheckout from "@/components/molecules/stripeCheckout";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
    throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

export default function CardPaymentForm() {
    const amount = 49.99;

    return (
        <main className="max-w-6xl mx-auto p-10 text-white text-center border rounded-md bg-gray-200">
            <Elements
                stripe={stripePromise}
                options={{
                    mode: "payment",
                    amount: convertToSubcurrency(amount),
                    currency: "usd",
                }}
            >
                <StripeCheckout amount={amount} />
            </Elements>
        </main>
    );
};