import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import React, { useState } from "react";

export const BoardingCardFooter = ({
  id,
  onPrintCard,
}: {
  id: string;
  onPrintCard: (id: string) => void;
}) => {
  return (
    <CardFooter>
      <Button className="w-full" onClick={() => onPrintCard(id)}>
        Imprimir tarjeta de embarque
      </Button>
    </CardFooter>
  );
};
