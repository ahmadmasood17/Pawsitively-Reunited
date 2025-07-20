import Profile from "../../../assets/Images/profile.png";
import DropdownPopup from "../../../components/DropdownPopup";
import HeaderPopupData from "../../../constants/HeaderPopupData";

const Profilepopup = ({}) => {
  return (
    <div className="pt-[14px] px-[14px] pb-[5px] rounded-[8px] bg-white w-[273px]">
      <div className="flex items-center gap-[8px] ">
        <div className="relative">
          <img
            src={Profile}
            className="w-[40px] h-[40px] object-cover rounded-full"
            alt="Profile"
          />
          <span className="w-[11px] h-[11px] border-[2px] border-white bg-[#17B26A] rounded-full absolute bottom-0 right-0"></span>
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold text-[14px] text-[#181D27]">
            Sarah Sienna
          </h4>
          <span className="text-[14px] text-[#535862] leading-[1.1]">CEO</span>
        </div>
      </div>
      <div className="pt-[5px]">
        <DropdownPopup data={HeaderPopupData} />
      </div>
    </div>
  );
};

export default Profilepopup;
