import UserProfile from "../assets/Images/profile-user.svg";
import Settings from "../assets/Images/setting.svg";
import Logout from "../assets/Images/logout.svg";


const HeaderPopupData = [
  { label: "My Profile", icon: UserProfile, path: "/" },
  { label: "Settings", icon: Settings, path: "/" },
  { label: "Logout", icon: Logout, path: "/", danger: true },
];

export default HeaderPopupData;