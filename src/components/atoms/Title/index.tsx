type titleProps = {
  text: string;
}

const MainTitle = ({ text }: titleProps) => {
  return <h2 className="text-2xl font-semibold">{text}</h2>;
};

const SecondaryTitle = ({ text }: titleProps) => {
  return <h3 className="text-xl font-semibold">{text}</h3>;
};

export { MainTitle, SecondaryTitle };
