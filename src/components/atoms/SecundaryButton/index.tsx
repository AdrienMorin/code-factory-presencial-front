type propsType = {
  text: string;
  handleClick: () => void;
};

const index = ({ text, handleClick }: propsType) => {
  return (
    <button
      className="hover:bg-primary hover:text-white bg-white border-2 border-primary text-primary py-1 px-3 rounded-[6px]"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default index;
