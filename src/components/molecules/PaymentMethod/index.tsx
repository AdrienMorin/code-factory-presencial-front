import MainText from "@/components/atoms/MainText/index";

type PaymentMethodProps = {
  id: number;
  name: string;
  value: string;
  selected: boolean;
  onSelect: () => void;
};

const PaymentMethod = ({
  id,
  name,
  value,
  selected,
  onSelect,
}: PaymentMethodProps) => {
  return (
    <label
      onClick={onSelect}
      className={`flex justify-start items-center p-5 mt-3 rounded-[6px] shadow-lg cursor-pointer transition-all duration-300 
        ${selected ? "bg-primary border-primary" : "bg-white"}`}
    >
      <input
        id={`${id}`}
        type="radio"
        name="paymentMethod"
        value={value}
        checked={selected}
        onChange={() => {}}
        className="mr-3 hidden"
      />
      <MainText text={name} color={selected ? "text-white" : "text-black"} />
    </label>
  );
};

export default PaymentMethod;
