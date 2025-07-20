import { useState } from "react";

type Tab = {
  text?: string;
  content: string;
};

type IPROPS = {
  data: Tab[];
  action?: boolean;
};

const Tabs: React.FC<IPROPS> = ({ data, action = false }) => {
  const [tab, setTab] = useState(0);

  return (
    <>
      <ul className="flex border-b-[1px] border-[#2525251A] mb-[14px]">
        {data.map((item, index) => (
          <li
            key={index}
            onClick={() => setTab(index)}
            className={`${
              index === tab
                ? "text-[#51459D] border-b-[1px] border-[#51459D]"
                : "text-[#727272]"
            } cursor-pointer py-[11px] px-[20px]`}
          >
            {item.text}
          </li>
        ))}
      </ul>
      {/* {action === true && } */}
      <div>{data[tab]?.content}</div>
    </>
  );
};

export default Tabs;
