const TitlePrincipal = ({ title }: { title: string }) => {
  return <h1 className="font-bold text-3xl">{title}</h1>;
};

const TitleSecondary = ({ title }: { title: string }) => {
  return <h1 className="font-bold text-lg mb-4">{title}</h1>;
};

const TitleTertiary = ({ title }: { title: string }) => {
  return (
    <h1 className="font-light text-xl text-center text-tertiary sm:text-2xl sm:text-left ">
      {title}
    </h1>
  );
};

export { TitlePrincipal, TitleSecondary, TitleTertiary };
