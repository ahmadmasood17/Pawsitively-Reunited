import Logo from "../../assets/Images/logo.svg"
import Tabs from "./Components/Tabs"
import Logout from "../../assets/Images/logout.svg"
import SideBarData from "../../constants/SideBarData"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className=" bg-white rounded-[12px] h-full pt-[40px] pb-[20px] flex flex-col justify-between items-center ">
      <div className="flex flex-col gap-[20px] items-center w-full">
        <div className="flex justify-center lg:w-[161px] lg:h-[60px] object-cover">
          <img src={Logo} alt="" />
        </div>
        <div className="w-full">
          <Tabs data={SideBarData} />
        </div>
      </div>
      <div className=" text-[#E33333] self-start pl-[28px]   cursor-pointer pt-[10px]">
        <Link to={"/"} className="flex gap-[8px] items-center">
        <img src={Logout} className="w-[18px] h-[18px] object-cover" alt="" />
        <span>Logout</span>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar



