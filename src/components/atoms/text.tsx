import React from "react";

const Title = ({ title }: { title: string }) => {
  return (
    <h1 className="font-light text-5xl text-center text-primary sm:text-6xl sm:text-left">
      {title}
    </h1>
  );
};

const Text = ({ text }: { text: string }) => {
  return <p className="text-appGray text-center text-base sm:text-lg sm:text-left">{text}</p>;
};

export { Title, Text };
