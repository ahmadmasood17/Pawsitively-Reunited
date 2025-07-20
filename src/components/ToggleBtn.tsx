import { useState } from "react";

const ToggleBtn = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div
      onClick={() => setEnabled(!enabled)}
      className={`w-[40px] h-[20px] rounded-full flex items-center px-[2px] cursor-pointer transition-colors duration-300 ${
        enabled ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <div
        className={`bg-white w-[16px] h-[16px] rounded-full shadow-md transform transition-transform duration-300 ${
          enabled ? "translate-x-[19px]" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
};

export default ToggleBtn;
