import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import CardPaymentForm from "@/pages/pagos-A/components/molecules/cardPaymentForm";
import {PSEPaymentForm} from "@/pages/pagos-A/components/molecules/psePaymentForm";

export function PaymentModule() {
    const amount = 49.99;
    return (
        <Tabs defaultValue="tarjeta" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-200">
                <TabsTrigger value="tarjeta">Tarjeta de Crédito o Débito</TabsTrigger>
                <TabsTrigger value="pse">PSE</TabsTrigger>
            </TabsList>
            <TabsContent value="tarjeta">
                <CardPaymentForm />
            </TabsContent>
            <TabsContent value="pse">
                <PSEPaymentForm amount={amount} />
            </TabsContent>
        </Tabs>
    )
}
