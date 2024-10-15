import MainText from '@/components/atoms/MainText/index';

type PaymentMethodProps = {
  id: number;
  name: string;
  value: string;
  selected: boolean;
  onSelect: () => void;
};

const PaymentMethod = ({ id, name, value, selected, onSelect }: PaymentMethodProps) => {
  return (
    <label
      onClick={onSelect}
      className={`flex justify-start items-center p-5 mt-3 rounded-xl shadow-lg cursor-pointer transition-all duration-300 
        ${selected ? 'bg-blue-200 scale-105' : 'bg-white scale-100'}`}
    >
      <input
        type="radio"
        name="paymentMethod"
        value={value}
        checked={selected}
        onChange={() => {}}
        className="mr-3 hidden"
      />
      <MainText text={name} />
    </label>
  );
};

export default PaymentMethod;
