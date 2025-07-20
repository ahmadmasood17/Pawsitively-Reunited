import Table from "../components/Table";
import CampaignTableData from "./CampaignTableData";
import DonationRecordTableData from "./DonationRecordTableData";
import DonorDirectryTableData from "./DonorDirectryTableData";

const DonationTabs = [
  {
    text: "Donation record",
    content: (
      <div className="py-[20px] px-[16px] rounded-[16px] bg-white flex flex-col gap-[20px]">
        <Table
          data={DonationRecordTableData}
          title="Donation Management"
          para="Track and manage all donation activities."
          inputSearch={true}
          showAll={false}
          action={false}
          exportBtn={true}
          paginationTitle="donations"
        />
      </div>
    ),
  },
  {
    text: "Donor Directory",
    content: (
     <div className="py-[20px] px-[16px] rounded-[16px] bg-white flex flex-col gap-[20px]">
      <Table
        data={DonorDirectryTableData}
        title="Donation Management"
        para="Track and manage all donation activities."
        filter={false}
        inputSearch={true}
        showAll={false}
        action={false}
        exportBtn={false}
        paginationTitle="donations"
      />
      </div>
    ),
  },
  {
    text: "Campaigns",
    content: (
    <div className="py-[20px] px-[16px] rounded-[16px] bg-white flex flex-col gap-[20px]">
      <Table
        data={CampaignTableData}
        title="Donation Management"
        para="Track and manage all donation activities."
        inputSearch={true}
        action={false}
        filter={false}
        paginationTitle="donations"
        showAll={false}
        whiteshowall={true}
        newcampaign={true}
      />
      </div>
    ),
  },
];

export default DonationTabs;
