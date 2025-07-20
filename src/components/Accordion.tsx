import { useState } from "react";
import PlusImg from "../assets/Images/plusicon.svg";
import Minus from "../assets/Images/minus.svg";

type AccordionDt = {
  title: string;
  para: string;
};

type AccordionProps = {
  data: AccordionDt[];
  action?: boolean;
  paddingLeft?:string;
};

const Accordion: React.FC<AccordionProps> = ({ data, action = true, paddingLeft = "pl-4"}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-2">
      {data.map((item, index) => (
        <div key={index} className="border-b border-[#E9EAEB]">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full text-left cursor-pointer"
          >
            <h4
              className={`${
                activeIndex === index
                  ? "pt-[24px] pb-[10px]"
                  : "pt-[16px] pb-[28px]"
              } font-medium transition-all duration-300`}
            >
              {action === true && <span>Q:</span>} {item.title}
            </h4>
            <span
              className={`transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : "rotate-0"
              }`}
            >
              <img
                src={activeIndex === index ? Minus : PlusImg}
                className="h-[20px] w-[20px] object-cover"
                alt=""
              />
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              activeIndex === index
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className={`${paddingLeft} pb-[28px] text-[#535862] text-[14px]`}>
              {action === true && <span>A:</span>} {item.para}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
