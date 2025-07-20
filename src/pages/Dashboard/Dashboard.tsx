import Cards from "../../components/Cards";
import Table from "../../components/Table";
import DashBoardCardData from "../../constants/DashBoardCardData";
import Mainlayout from "../../layout/Mainlayout";
import DahboardTableData from "../../constants/DashboardTableData";
import UserList from "./Components/UserList";
import UserData from "../../constants/UserData";


const Dashboard = () => {
  return (
    <Mainlayout>
      <div className="flex gap-[16px] mb-[20px]">
        <Cards data={DashBoardCardData} />
      </div>
      <div className="py-[20px] px-[16px] rounded-[16px] bg-white flex flex-col gap-[20px]">
        <Table data={DahboardTableData} title="Recent Activity" pagiantionAction={false} />
        <UserList data={UserData} />
      </div>

    </Mainlayout>
  );
};

export default Dashboard;
