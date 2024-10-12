import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <>
      <Image
        src="/avion.png"
        width={64}
        height={64}
        sizes="100%"
        className="object-contain"
        alt="Logo de la página"
        priority
      />
      <h2 className="text-3xl font-semibold text-primary">Singapur Airlines</h2>
    </>
  );
}

export default Logo;
