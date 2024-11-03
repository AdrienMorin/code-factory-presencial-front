import { Card } from "@/components/ui/card";
import { BoardingCardHeader } from "../BoardingCardHeader";
import { BoardingCardContent } from "../BoardingCardContent";
import { BoardingCardFooter } from "../BoardingCardFooter";
import { BoardingCard } from "@/types/checkinA/BoardingCard";
import { useState } from "react";

export const BoardingCardContainer = ({
  id,
  passenger,
  code,
  group,
  seat,
}: BoardingCard) => {
  const [boardingCardToPrint, setBoardingCardToPrint] = useState("");

  const handlePrint = (id: string) => {
    setBoardingCardToPrint(id);
    setTimeout(() => {
      window.print();
      setBoardingCardToPrint("");
    }, 0);
  };

  const boardingCard = { id, passenger, code, group, seat };

  return (
    <Card className={`w-max ${boardingCardToPrint === id ? "printCard" : ""}`}>
      <BoardingCardHeader />
      <BoardingCardContent {...boardingCard} />
      <BoardingCardFooter id={id} onPrintCard={handlePrint} />
    </Card>
  );
};
