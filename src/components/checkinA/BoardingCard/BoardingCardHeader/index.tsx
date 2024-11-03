import { CardHeader, CardTitle } from "@/components/ui/card";

export const BoardingCardHeader = () => {
  return (
    <CardHeader className="bg-primary">
      <CardTitle className="flex justify-between text-white">
        <span>N-4</span>
        <span>Tu viaje, nuestra prioridad</span>
      </CardTitle>
    </CardHeader>
  );
};
