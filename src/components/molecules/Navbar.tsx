import React from "react";
import AdminInfo from "./AdminInfo";
import Link from "next/link";
import Logo from "./Logo";

function Navbar() {
  const navigationOptions = [
    {
      name: "Inicio",
      path: "/gestion-de-vuelos-A",
      isActive: false,
    },
    {
      name: "Vuelos",
      path: "/gestion-de-vuelos-A/vuelos",
      isActive: false,
    },
    {
      name: "Aeronaves",
      path: "/gestion-de-vuelos-A/aeronaves",
      isActive: false,
    },
  ];

  return (
    <nav className="flex justify-between gap-4 items-center border-b-2 border-gray-500 shadow-md px-4 py-1 w-full">
      <div className="flex flex-row justify-center items-center gap-2">
        <Logo />
      </div>
      <div className=" flex items-center justify-center gap-8">
        {navigationOptions.map((option, index) => (
          <span
            className="text-center py-2 w-24 text-slate-900 border-b-2 border-transparent hover:border-emerald-500 duration-300 text-base font-medium"
            key={index}
          >
            <Link href={option.path}>{option.name}</Link>
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <AdminInfo />
      </div>
    </nav>
  );
}

export default Navbar;
