import { useState } from "react";
import Button from "./Button";
import Msg from "../assets/Images/setting.svg";
import EyeOff from "../assets/Images/eye-off.svg";
import Eye from "../assets/Images/eye.svg";
import ApikeyPopUP from "./ApikeyPopUP";
import Edit from "../assets/Images/edit-05.svg";

type FormTitle = {
  title?: string;
};

const ApikeyForm: React.FC<FormTitle> = ({ title }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [popup, setShowPopup] = useState(false);

  const togglePopup = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPopup(!popup);
  };

  return (
    <div className="bg-[#1FAC4B0F] rounded-[12px] p-[20px] border-[1px] border-[#2525251A] w-full relative">
      <form className="flex flex-col gap-[10px]">
        <div className="flex items-center gap-[10px]">
          <div className="w-[40px] h-[40px] rounded-[50%] bg-white flex justify-center items-center">
            <img src={Msg} alt="" className="w-[16px] h-[16px] object-cover" />
          </div>
          <h4>{title}</h4>
        </div>
        <label className="text-[14px] text-[#535862]">
          Email delivery service
        </label>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className="bg-[#FFFFFF] border-[1px] border-[#D5D7DA] min-h-[40px] outline-0 rounded-[8px] px-[30px] w-full"
            value={"123456789101112"}
            readOnly
          />
          <span
            className="absolute left-[8px] top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            <img
              src={showPassword ? Eye : EyeOff}
              alt="toggle"
              className="w-[20px] h-[20px] object-cover"
            />
          </span>
        </div>

        <div onClick={togglePopup} className="w-full">
          <Button text="Edit Key" minWidth="w-[179px]" 
          iconAlignment="left"
              icon={Edit}
          />
        </div>

        {popup && (
          <div className="fixed top-0 left-0 w-full h-full bg-[#25252566] bg-opacity-50 flex items-center justify-center z-50">
            <div className="w-[618px] relative"> 
             <button
              onClick={() => setShowPopup(false)}
              className="absolute top-[-35px] right-[-15px] text-[34px] text-white cursor-pointer"
            >
              &times;
            </button>
            <ApikeyPopUP title="Edit API Key"/>
              </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ApikeyForm;
