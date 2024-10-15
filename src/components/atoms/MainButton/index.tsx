type propsType = {
  text: string;
  handleClick: () => void;
};

const index = ({ text, handleClick }: propsType) => {
  return (
    <button
      className="bg-primary text-white py-2 px-3 rounded-[6px]"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default index;
