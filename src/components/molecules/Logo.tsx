import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <>
      <Image
        src="/avion.png"
        width={75}
        height={75}
        alt="Logo de la aerolínea"
        className="h-full object-contain"
      />
      <h2 className="text-3xl font-semibold text-primary">Singapur Airlines</h2>
    </>
  );
}

export default Logo;
