import { BoardingCardContainer } from "@/components/checkinA/BoardingCard/BoardingCardContainer";

const TEST_DATA = [
  {
    id: "1",
    passenger: "Michi Naranja",
    code: "MI 123",
    group: "A",
    seat: "1A",
  },
  {
    id: "2",
    passenger: "Michi Gris",
    code: "MI 456",
    group: "A",
    seat: "2A",
  },
];

export default function BoardingCard() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-10">Tarjetas de Embarque</h1>
      <div className="flex gap-6">
        {TEST_DATA.map((test) => (
          <BoardingCardContainer key={test.id} {...test} />
        ))}
      </div>
    </div>
  );
}
