
import Mainlayout from '../../layout/Mainlayout'
import Table from '../../components/Table'
import UserManagmentTableData from "../../constants/UserManagementTableData"

const UserMangement = () => {
  return (
    <Mainlayout>
      <div className="py-[20px] px-[16px] rounded-[16px] bg-white flex flex-col gap-[20px]">
        <Table data={UserManagmentTableData} title="User Details Overview" para='Manage user accounts, view activity, and control access.'  inputSearch={true} showAll={false}/>
      </div>
    </Mainlayout>
  )
}

export default UserMangement