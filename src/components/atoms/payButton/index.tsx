import React from 'react';
import { InlineIcon } from '@iconify/react'

interface PayButtonProps {
    usesStripe: boolean;
    stripe: any;
    loading: boolean;
    amount: number;
}

const PayButton: React.FC<PayButtonProps> = ({ usesStripe, amount, stripe, loading }) => {
    return (
        <button
            disabled={usesStripe && (!stripe || loading)}
            className="text-white w-full p-5 bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse flex gap-3 items-center justify-center"
        >
            {!loading ? `Pagar $${amount.toLocaleString('es-CO')} COP` : "Tratamiento..."}
            <InlineIcon className="white-icon text-xl" icon="mdi:secure" />
        </button>
    );
};

export default PayButton;
