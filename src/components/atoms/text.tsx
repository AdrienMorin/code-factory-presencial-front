import React from "react";

const Title = ({ title }: { title: string }) => {
  return (
    <h2 className="text-center text-3xl font-bold text-primary sm:text-4xl sm:text-left mb-2">
      {title}
    </h2>
  );
};

const Text = ({ text }: { text: string }) => {
  return <p className="text-center text-base sm:text-lg sm:text-left">{text}</p>;
};

export { Title, Text };
