import type {NextApiRequest, NextApiResponse} from "next";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse
) {
    try {
        const { amount } = request.body;
        console.log("amount:", amount);

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: "usd",
            automatic_payment_methods: { enabled: true },
        });

        return response.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error("Internal Error:", error);
        // Handle other errors (e.g., network issues, parsing errors)
        return response.status(500).json(
            { error: `Internal Server Error: ${error}` }
        );
    }
}
