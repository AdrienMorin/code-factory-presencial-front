type mainTextProps = {
  text: string;
  color?: string;
  weight?: string;
};

const index = ({ text, color = "text-black", weight = "500" }: mainTextProps) => {
  return <p className={`${color} font-[${weight}]`}>{text}</p>;
};

export default index;
