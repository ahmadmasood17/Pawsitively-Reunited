import Mainlayout from '../../layout/Mainlayout'
import Table from '../../components/Table'
import PetListingData from "../../constants/PetListingTableData"

const PetListing = () => {
  return (
     <Mainlayout>
      <div className="py-[20px] px-[16px] rounded-[16px] bg-white flex flex-col gap-[20px]">
        <Table data={PetListingData} title="Lost & Found Reports" para='Review, moderate, and manage all user-submitted reports.'  inputSearch={true} showAll={false} paginationTitle="pets"/>
      </div>
    </Mainlayout>
  )
}

export default PetListing