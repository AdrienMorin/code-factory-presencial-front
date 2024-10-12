"use client";

import { useState } from "react";
import MainText from "@/components/atoms/MainText/index";

type Items = {
  item: string;
  value: string;
};

type AccordionProps = {
  textTitle: string;
  priceTitle: string;
  bodyItems: Items[];
};

const Accordion = ({ textTitle, priceTitle, bodyItems }: AccordionProps) => {
  const [accordion, setAccordion] = useState(false);
  const toggleAccordion = () => (accordion ? false : true);

  return (
    <div className="w-full">
      <div
        className={`flex items-center justify-between w-full py-5 font-medium rtl:text-right ${
          accordion ? "border-none" : "border-b-2 border-gray-200"
        } focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 gap-3 cursor-pointer`}
        onClick={() => setAccordion(toggleAccordion)}
      >
        <MainText text={textTitle} />
        <div className="flex items-center">
          <MainText text={priceTitle} color="text-slate-500" weight="400" />
          <svg
            data-accordion-icon
            className={`w-3 h-3 ${
              accordion ? "rotate-300" : "rotate-180"
            } shrink-0 ml-2`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </div>
      </div>

      {accordion && (
        <ul className="border-b-2 border-gray-200 pb-3">
          {bodyItems.map((item, index) => (
            <li className="flex justify-between px-5 mb-1" key={index}>
              <MainText text={item.item} color="text-slate-500" weight="400" />
              <MainText text={item.value} color="text-slate-500" weight="400" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Accordion;
