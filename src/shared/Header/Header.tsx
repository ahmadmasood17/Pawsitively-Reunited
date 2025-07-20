import { useState } from "react";
import NotificationIcon from "../../assets/Images/notification.svg";
import Profile from "../../assets/Images/profile.png";
import Dropdown from "../../assets/Images/dropdown.svg";
import Profilepopup from "./Components/Profilepopup";
import NotificatoinList from "../../pages/Notification/Components/NotificatoinList";

const Header = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  return (
    <header>
      <div className="flex justify-between items-center bg-white px-[24px] py-[22px] rounded-[12px]">
        <div>
          <h1 className="font-bold text-[24px] text-[#252525]">
            👋 Good Morning, Sarah
          </h1>
          <span className="text-[#252525CC] text-[14px]">
            Here’s what’s happening today
          </span>
        </div>

        <div className="flex items-center gap-[16px]">
          <div className="relative">
            <div
              className="bg-[#D9D9D933] h-[48px] w-[44px] flex justify-center items-center rounded-[16px] cursor-pointer"
              onClick={() => setShowNotification(!showNotification)}
            >
              <img
                src={NotificationIcon}
                className="w-[24px] h-[24px]"
                alt="Notification"
              />
              <span className="w-[10px] h-[10px] border-[2px] border-white bg-[#FF6868] rounded-full absolute top-[10px] right-[6px]"></span>
            </div>

            {showNotification === true && (
              <div className="absolute top-[55px] right-0 z-50 w-[585px]">
                <NotificatoinList action={true} maxHight="max-h-[400px]" />
              </div>
            )}
          </div>

          <div className="flex items-center gap-[8px]">
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
              <span className="text-[14px] text-[#535862] leading-[1.1]">
                sienna@pawsitively.com
              </span>
            </div>
            <img
              src={Dropdown}
              className="w-[24px] h-[24px] pl-[5px] cursor-pointer"
              alt="Dropdown"
              onClick={() => setShowProfile(!showProfile)}
            />

            {showProfile && (
              <>
                <div
                  onClick={() => setShowProfile(false)}
                  className="fixed top-0 left-0 w-full h-full bg-[#00000066] z-40"
                ></div>
                <div className="fixed top-[100px] right-[44px] z-50">
                  <Profilepopup />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
