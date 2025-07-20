import Button from "./Button";
import { useState } from "react";
import Export from "../assets/Images/export.svg";
import Filter from "../assets/Images/filter-lines.svg";
import Arrow from "../assets/Images/down-arrow.svg";
import Dots from "../assets/Images/dots.svg";
import DropdownPopup from "./DropdownPopup";
import TableActionBtn from "../constants/TableActionBtn";
import FilterSideBar from "./FilterSideBar";
import Dog from "../assets/Images/dog.svg";
import LostReport from "./LostReportSideBar";
import Delete from "../assets/Images/delete.svg";
import Pluss from "../assets/Images/pluss.svg";
import DeletePopup from "./DeletePopup";

type TableCell = {
  value: string;
  show: boolean;
};

type TablesData = {
  user?: TableCell;
  userImg?: string;
  details?: TableCell;
  time?: TableCell;
  activity?: TableCell;
  status?: TableCell;

  emial?: TableCell;
  joinedOn?: TableCell;
  reports?: TableCell;
  recentReports?: TableCell;

  pets?: TableCell;
  petsName?: TableCell;
  petStatus?: TableCell;
  breed?: TableCell;
  petColor?: TableCell;
  location?: TableCell;
  reportedBy?: TableCell;
  reportedOn?: TableCell;

  date?: TableCell;
  donorName?: TableCell;
  amount?: TableCell;
  campaign?: TableCell;
  type?: TableCell;
  donorstatus?: TableCell;

  totalAmmount?: TableCell;
  lastDonation?: TableCell;
  recurring?: TableCell;

  campaignName?: TableCell;
  targetAmount?: TableCell;
  raisedSoFar?: TableCell;
  donors?: TableCell;
  campaignStatus?: TableCell;
  progress?: TableCell;

  service?: TableCell;
  key?: TableCell;
  lastUser?: TableCell;
  deleteIcon?: TableCell;

  securityDate?: TableCell;
  event?: TableCell;
  ipAddress?: TableCell;
  securityUser?: TableCell;
  securityStatus?: TableCell;

  auditDate?: TableCell;
  auditUser?: TableCell;
  auditAction?: TableCell;
  auditDetail?: TableCell;
};

type IPROPS = {
  data: TablesData[];
  title?: string;
  para?: string;
  action?: boolean;
  exportBtn?: boolean;
  filter?: boolean;
  showAll?: boolean;
  inputSearch?: boolean;
  pagiantionAction?: boolean;
  paginationTitle?: string;
  newcampaign?: boolean;
  whiteshowall?: boolean;
  tableminHight?: string;
};

const Table: React.FC<IPROPS> = ({
  title,
  para,
  data,
  action = true,
  exportBtn = false,
  filter = true,
  showAll = true,
  inputSearch = false,
  pagiantionAction = true,
  paginationTitle,
  newcampaign = false,
  whiteshowall = false,
  tableminHight,
}) => {
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const [showFilter, setShowFilter] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const [popup, setPopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);

  return (
    <div className="">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-[22px] font-bold text-[#3E3E3E]">{title}</h3>
          <p>{para}</p>
        </div>
        <div className="flex gap-2">
          {inputSearch && (
            <input
              className="min-w-[342px]  input-bg bg-white text-[#717680] outline-0 border-[1px] border-[#DEDEDE] rounded-[8px] pl-[40px] pr-[10px] min-h-[40px]"
              type="search"
              placeholder="Search here..."
            />
          )}

          {newcampaign && (
            <Button
              icon={Pluss}
              iconAlignment="left"
              text="New Campaign"
              minWidth="min-w-[179px]"
            />
          )}

          {whiteshowall && (
            <Button
              icon={Filter}
              iconAlignment="right"
              text="Show All"
              bgColor="bg-white"
              border="border-[#D5D7DA]"
              textColor="text-[#252525]"
            />
          )}

          {exportBtn && (
            <Button
              icon={Export}
              iconAlignment="left"
              text="Export"
              bgColor="bg-white"
              border="border-[#D5D7DA]"
              textColor="text-[#252525]"
            />
          )}

          {filter && (
            <div onClick={() => setShowFilter(true)}>
              <Button
                icon={Filter}
                iconAlignment="left"
                text="Filters"
                bgColor="bg-white"
                border="border-[#D5D7DA]"
                textColor="text-[#252525]"
              />
            </div>
          )}

          {showFilter && (
            <div className="fixed inset-0 z-50 flex justify-end">
              <div
                className="fixed inset-0 bg-[#00000066]"
                onClick={() => setShowFilter(false)}
              ></div>
              <div className="relative z-50 w-[250px] bg-white h-full shadow-lg transform translate-x-0 transition-transform duration-300">
                <FilterSideBar onClose={() => setShowFilter(false)} />
              </div>
            </div>
          )}

          {showAll && <Button icon={Arrow} text="Show All" />}
        </div>
      </div>
      <div className={`${tableminHight}`}>
        <div
          className={` border-[1px] border-[#DEDEDE] rounded-[12px] overflow-hidden`}
        >
          <table className={`w-full  bg-white `}>
            <thead className="bg-[#FAFAFA] border-b-[1px] border-[#E9EAEB]">
              <tr className="text-left text-[#535862B3] text-[14px] font-bold">
                {data[0].user?.show && (
                  <th className="px-[20px] py-[12px]">Users</th>
                )}
                {data[0].details?.show && (
                  <th className="px-[20px] py-[12px]">Details</th>
                )}
                {data[0].time?.show && (
                  <th className="px-[20px] py-[12px]">Time</th>
                )}
                {data[0].activity?.show && (
                  <th className="px-[20px] py-[12px]">Activity</th>
                )}
                {data[0].status?.show && (
                  <th className="px-[20px] py-[12px]">Status</th>
                )}
                {data[0].emial?.show && (
                  <th className="px-[20px] py-[12px]">Email</th>
                )}
                {data[0].joinedOn?.show && (
                  <th className="px-[20px] py-[12px]">Joined On</th>
                )}
                {data[0].reports?.show && (
                  <th className="px-[20px] py-[12px]">Reports</th>
                )}
                {data[0].recentReports?.show && (
                  <th className="px-[20px] py-[12px]">Recent Reports</th>
                )}
                {data[0].pets?.show && (
                  <th className="px-[20px] py-[12px]">Pets ID</th>
                )}
                {data[0].petsName?.show && (
                  <th className="px-[20px] py-[12px]">Pets Name</th>
                )}
                {data[0].petStatus?.show && (
                  <th className="px-[20px] py-[12px]">Pet Status</th>
                )}
                {data[0].breed?.show && (
                  <th className="px-[20px] py-[12px]">Breed</th>
                )}
                {data[0].petColor?.show && (
                  <th className="px-[20px] py-[12px]">Pet Color</th>
                )}
                {data[0].location?.show && (
                  <th className="px-[20px] py-[12px]">Location</th>
                )}
                {data[0].reportedBy?.show && (
                  <th className="px-[20px] py-[12px]">Reported By</th>
                )}
                {data[0].reportedOn?.show && (
                  <th className="px-[20px] py-[12px]">Reported On</th>
                )}
                {data[0].date?.show && (
                  <th className="px-[20px] py-[12px]">Date</th>
                )}
                {data[0].donorName?.show && (
                  <th className="px-[20px] py-[12px]">Donor Name</th>
                )}
                {data[0].amount?.show && (
                  <th className="px-[20px] py-[12px]">Amount</th>
                )}
                {data[0].campaign?.show && (
                  <th className="px-[20px] py-[12px]">Campaign</th>
                )}
                {data[0].type?.show && (
                  <th className="px-[20px] py-[12px]">Type</th>
                )}
                {data[0].donorstatus?.show && (
                  <th className="px-[20px] py-[12px]">Donor Status</th>
                )}

                {data[0].totalAmmount?.show && (
                  <th className="px-[20px] py-[12px]">Total Amount</th>
                )}
                {data[0].lastDonation?.show && (
                  <th className="px-[20px] py-[12px]">Last Donation</th>
                )}
                {data[0].recurring?.show && (
                  <th className="px-[20px] py-[12px]">Recurring</th>
                )}
                {data[0].campaignName?.show && (
                  <th className="px-[20px] py-[12px]">Campaign Name</th>
                )}
                {data[0].targetAmount?.show && (
                  <th className="px-[20px] py-[12px]">Target Amount</th>
                )}
                {data[0].raisedSoFar?.show && (
                  <th className="px-[20px] py-[12px]">Raised So Far</th>
                )}
                {data[0].donors?.show && (
                  <th className="px-[20px] py-[12px]">Donors</th>
                )}
                {data[0].campaignStatus?.show && (
                  <th className="px-[20px] py-[12px]">Status</th>
                )}
                {data[0].progress?.show && (
                  <th className="px-[20px] py-[12px]">Progress</th>
                )}

                {data[0].service?.show && (
                  <th className="px-[20px] py-[12px]">Service</th>
                )}
                {data[0].key?.show && (
                  <th className="px-[20px] py-[12px]">Key</th>
                )}
                {data[0].lastUser?.show && (
                  <th className="px-[20px] py-[12px]">Last User</th>
                )}
                {data[0].deleteIcon?.show && (
                  <th className="px-[20px] py-[12px]"></th>
                )}
                {data[0].securityDate?.show && (
                  <th className="px-[20px] py-[12px]">Date</th>
                )}
                {data[0].event?.show && (
                  <th className="px-[20px] py-[12px]">Event</th>
                )}
                {data[0].ipAddress?.show && (
                  <th className="px-[20px] py-[12px]">IP Address</th>
                )}
                {data[0].securityUser?.show && (
                  <th className="px-[20px] py-[12px]">User</th>
                )}
                {data[0].securityStatus?.show && (
                  <th className="px-[20px] py-[12px]">Status</th>
                )}
                {data[0].auditDate?.show && (
                  <th className="px-[20px] py-[12px]">Date</th>
                )}
                {data[0].auditUser?.show && (
                  <th className="px-[20px] py-[12px]">User</th>
                )}
                {data[0].auditAction?.show && (
                  <th className="px-[20px] py-[12px]">Action</th>
                )}
                {data[0].auditDetail?.show && (
                  <th className="px-[20px] py-[12px]">Detail</th>
                )}

                {action && <th className="px-[20px] py-[12px]"></th>}
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item, index) => (
                <tr
                  key={index}
                  className="text-[#252525] text-[16px] border-b-[1px] border-[#E9EAEB]"
                >
                  {item.user?.show && (
                    <td
                      onClick={() => setPopup(true)}
                      className="cursor-pointer px-[20px] py-[12px] text-[14px] flex gap-[10px] items-center"
                    >
                      <img
                        className="w-[36px] h-[36px] object-cover rounded-[50%]"
                        src={item.userImg}
                        alt=""
                      />
                      {item.user.value}
                    </td>
                  )}
                  {item.details?.show && (
                    <td className="px-[20px] py-[12px]">
                      {item.details.value}
                    </td>
                  )}
                  {item.time?.show && (
                    <td className="px-[20px] py-[12px] text-[#8B8B8B] font-medium">
                      {item.time.value}
                    </td>
                  )}
                  {item.activity?.show && (
                    <td className="px-[20px] py-[12px] text-[#8B8B8B] font-medium">
                      {item.activity.value}
                    </td>
                  )}
                  {item.status?.show && (
                    <td className="px-[20px] py-[12px]">
                      {item.status.value === "true" ? (
                        <span className="bg-[#DCFCE7] text-[14px] font-semibold px-[26px] py-[3px] rounded-[70px] text-[#15803D]">
                          Found
                        </span>
                      ) : (
                        <span className="bg-[#F723141A] px-[32px] text-[14px] font-semibold py-[3px] rounded-[70px] text-[#F72314]">
                          Lost
                        </span>
                      )}
                    </td>
                  )}
                  {item.emial?.show && (
                    <td className="px-[20px] py-[12px]">{item.emial.value}</td>
                  )}
                  {item.joinedOn?.show && (
                    <td className="px-[20px] py-[12px] text-[#8B8B8B] font-medium">
                      {item.joinedOn.value}
                    </td>
                  )}
                  {item.reports?.show && (
                    <td className="px-[20px] py-[12px] text-[#8B8B8B] font-medium">
                      {item.reports.value}
                    </td>
                  )}
                  {item.recentReports?.show && (
                    <td className="px-[20px] py-[12px] text-[#8B8B8B] font-medium">
                      {item.recentReports.value}
                    </td>
                  )}
                  {item.pets?.show && (
                    <td className="px-[20px] py-[12px] text-[#8B8B8B] font-medium flex gap-[8px] items-center">
                      <img
                        src={Dog}
                        className="w-[40px] h-[40px] object-cover rounded-[50%]"
                        alt=""
                      />
                      {item.pets.value}
                    </td>
                  )}
                  {item.petsName?.show && (
                    <td className="px-[20px] py-[12px]">
                      {item.petsName.value}
                    </td>
                  )}
                  {item.petStatus?.show && (
                    <td className="px-[20px] py-[12px]">
                      {item.petStatus.value}
                    </td>
                  )}
                  {item.breed?.show && (
                    <td className="px-[20px] py-[12px] text-[#8B8B8B] font-medium">
                      {item.breed.value}
                    </td>
                  )}
                  {item.petColor?.show && (
                    <td className="px-[20px] py-[12px] text-[#8B8B8B] font-medium">
                      {item.petColor.value}
                    </td>
                  )}
                  {item.location?.show && (
                    <td className="px-[20px] py-[12px] text-[#8B8B8B] font-medium">
                      {item.location.value}
                    </td>
                  )}
                  {item.reportedBy?.show && (
                    <td className="px-[20px] py-[12px] text-[#8B8B8B] font-medium">
                      {item.reportedBy.value}
                    </td>
                  )}
                  {item.reportedOn?.show && (
                    <td className="px-[20px] py-[12px] text-[#8B8B8B] font-medium">
                      {item.reportedOn.value}
                    </td>
                  )}
                  {item.date?.show && (
                    <td className="px-[20px] py-[12px]">{item.date.value}</td>
                  )}
                  {item.donorName?.show && (
                    <td className="px-[20px] py-[12px]">
                      {item.donorName.value}
                    </td>
                  )}
                  {item.amount?.show && (
                    <td className="px-[20px] py-[12px] text-[#8B8B8B] font-medium">
                      {item.amount.value}
                    </td>
                  )}
                  {item.campaign?.show && (
                    <td className="px-[20px] py-[12px] text-[#8B8B8B] font-medium">
                      {item.campaign.value}
                    </td>
                  )}
                  {item.type?.show && (
                    <td className="px-[20px] py-[12px] text-[#8B8B8B] font-medium">
                      {item.type.value}
                    </td>
                  )}
                  {item.donorstatus?.show && (
                    <td className="px-[20px] py-[12px]">
                      {item.donorstatus.value === "true" ? (
                        <span className="bg-[#DCFCE7] text-[14px] font-semibold px-[14px] py-[3px] rounded-[70px] text-[#1FAC4B]">
                          Success
                        </span>
                      ) : (
                        <span className="bg-[#FEF9C3] px-[14px] text-[14px] font-semibold py-[3px] rounded-[70px] text-[#A16207]">
                          Pending
                        </span>
                      )}
                    </td>
                  )}
                  {action && (
                    <td className="px-[20px] py-[12px] relative">
                      <img
                        className="w-[18px] h-[18px] object-cover cursor-pointer"
                        src={Dots}
                        alt=""
                        onClick={() =>
                          setActiveRow(activeRow === index ? null : index)
                        }
                      />
                      {activeRow === index && (
                        <>
                          <div
                            className="fixed top-0 left-0 w-full h-full bg-[#00000066] z-30"
                            onClick={() => setActiveRow(null)}
                          ></div>
                          <div className="absolute right-[20px] top-full mt-[4px] z-40 w-[181px] bg-white rounded-[12px] px-[12px] border-[1px] border-[#2525251A]">
                            <DropdownPopup
                              data={TableActionBtn}
                              onViewClick={() => {
                                setPopup(true);
                                setActiveRow(null);
                              }}
                              onDeleteClick={() => {
                                setDeletePopup(true);
                                setActiveRow(null);
                              }}
                            />
                          </div>
                        </>
                      )}
                    </td>
                  )}
                  {item.totalAmmount?.show && (
                    <td className="px-[20px] py-[12px] text-[#8B8B8B] font-medium">
                      {item.totalAmmount.value}
                    </td>
                  )}
                  {item.lastDonation?.show && (
                    <td className="px-[20px] py-[12px] text-[#8B8B8B] font-medium">
                      {item.lastDonation.value}
                    </td>
                  )}

                  {item.recurring?.show && (
                    <td className="px-[20px] py-[12px]">
                      {item.recurring.value === "true" ? (
                        <span className="text-[#1FAC4B] bg-[#DCFCE7]      rounded-[70px] px-[26px] py-[1px] text-[14px]">
                          Yes
                        </span>
                      ) : (
                        <span className="text-[#E33333] bg-[#FF686833] rounded-[70px] px-[26px] py-[1px] text-[14px]">
                          No
                        </span>
                      )}
                    </td>
                  )}

                  {item.campaignName?.show && (
                    <td className="px-[20px] py-[12px] text-[#8B8B8B] font-medium">
                      {item.campaignName.value}
                    </td>
                  )}
                  {item.targetAmount?.show && (
                    <td className="px-[20px] py-[12px] text-[#252525] font-bold">
                      $ {item.targetAmount.value}
                    </td>
                  )}
                  {item.raisedSoFar?.show && (
                    <td className="px-[20px] py-[12px] text-[#8B8B8B] font-medium">
                      $ {item.raisedSoFar.value}
                    </td>
                  )}
                  {item.donors?.show && (
                    <td className="px-[20px] py-[12px] text-[#8B8B8B] font-medium">
                      {item.donors.value}
                    </td>
                  )}

                  {item.campaignStatus?.show && (
                    <td className="px-[20px] py-[12px]">
                      {item.campaignStatus.value === "true" ? (
                        <span className="text-[#1FAC4B] text-[14px] bg-[#DCFCE7]      rounded-[70px] px-[18px] py-[1px]">
                          Active
                        </span>
                      ) : (
                        <span className="text-[#8B8B8B] bg-[#E9EAEB] rounded-[70px] px-[10px] py-[1px] text-[14px]">
                          Completetd
                        </span>
                      )}
                    </td>
                  )}

                  {item.progress?.show && (
                    <td className="px-[20px] py-[12px] text-[#8B8B8B] font-medium relative">
                      <div className="relative w-full">
                        {(() => {
                          const validValue = item.progress.value;

                          return (
                            <>
                              <span
                                className="absolute -top-6 bg-white px-2 py-1 rounded shadow text-[12px]"
                                style={{
                                  left: `${validValue}%`,
                                  transform: "translateX(-50%)",
                                }}
                              >
                                {validValue}%
                              </span>

                              <input
                                type="range"
                                className="appearance-none w-full h-2 rounded-full no-thumb"
                                value={validValue}
                                max="100"
                                readOnly
                                style={{
                                  background: `linear-gradient(to right, #51459D ${validValue}%, #E9EAEB ${validValue}%)`,
                                }}
                              />
                            </>
                          );
                        })()}
                      </div>
                    </td>
                  )}

                  {item.service?.show && (
                    <td className="px-[20px] py-[12px] text-[#8B8B8B] font-medium">
                      {item.service.value}
                    </td>
                  )}

                  {item.key?.show && (
                    <td className="px-[20px] py-[12px] text-[#8B8B8B] font-medium">
                      {item.key.value}
                    </td>
                  )}
                  {item.lastUser?.show && (
                    <td className="px-[20px] py-[12px] text-[#8B8B8B] font-medium">
                      {item.lastUser.value}
                    </td>
                  )}

                  {item.deleteIcon?.show && (
                    <td className="px-[20px] py-[12px] text-[#8B8B8B] font-medium text-end">
                      <img
                        src={Delete}
                        className="w-[20px] h-[20px] object-cover cursor-pointer"
                        alt=""
                      />
                    </td>
                  )}

                  {item.securityDate?.show && (
                    <td className="px-[20px] py-[12px] text-[#8B8B8B] font-medium">
                      {item.securityDate.value}
                    </td>
                  )}
                  {item.event?.show && (
                    <td className="px-[20px] py-[12px] text-[#8B8B8B] font-medium">
                      {item.event.value}
                    </td>
                  )}
                  {item.ipAddress?.show && (
                    <td className="px-[20px] py-[12px] text-[#8B8B8B] font-medium">
                      {item.ipAddress.value}
                    </td>
                  )}
                  {item.securityUser?.show && (
                    <td className="px-[20px] py-[12px] text-[#8B8B8B] font-medium">
                      {item.securityUser.value}
                    </td>
                  )}
                  {item.securityStatus?.show && (
                    <td className="px-[20px] py-[12px] text-[#8B8B8B] font-medium">
                      {item.securityStatus.value}
                    </td>
                  )}
                  {item.auditDate?.show && (
                    <td className="px-[20px] py-[12px] text-[#8B8B8B] font-medium">
                      {item.auditDate.value}
                    </td>
                  )}
                  {item.auditUser?.show && (
                    <td className="px-[20px] py-[12px] text-[#8B8B8B] font-medium">
                      {item.auditUser.value}
                    </td>
                  )}
                  {item.auditAction?.show && (
                    <td className="px-[20px] py-[12px] text-[#8B8B8B] font-medium">
                      {item.auditAction.value}
                    </td>
                  )}
                  {item.auditDetail?.show && (
                    <td className="px-[20px] py-[12px] text-[#8B8B8B] font-medium">
                      {item.auditDetail.value}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {pagiantionAction === true && (
          <div className="flex justify-between items-center mt-4">
            <p className="text-[14px] text-[#717680]">
              Showing {(currentPage - 1) * itemsPerPage + 1} of{" "}
              {Math.min(currentPage * itemsPerPage, totalItems)}{" "}
              {paginationTitle}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded border text-[14px] ${
                  currentPage === 1
                    ? "text-[#A1A1A1] border-[#DEDEDE] cursor-not-allowed"
                    : "text-[#252525] border-[#D5D7DA]"
                }`}
              >
                Previous
              </button>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded border text-[14px] ${
                  currentPage === totalPages
                    ? "text-[#A1A1A1] border-[#DEDEDE] cursor-not-allowed"
                    : "text-[#252525] border-[#D5D7DA]"
                }`}
              >
                Next
              </button>
            </div>
            {popup === true && (
              <>
                <div
                  className="fixed inset-0 bg-[#00000066] z-40"
                  onClick={() => setPopup(false)}
                />
                <div className="fixed top-0 right-0 h-full w-[350px] bg-white shadow-lg z-50 transform translate-x-0 transition-transform duration-300">
                  <LostReport onClose={() => setPopup(false)} />
                </div>
              </>
            )}
          </div>
        )}

        {deletePopup && (
          <>
            <div
              className="fixed inset-0 bg-[#00000066] z-40"
              onClick={() => setDeletePopup(false)}
            />
            <div className="fixed inset-0 z-50 flex justify-center items-center">
              <div className="w-[618px] bg-white shadow-lg transform translate-x-0 transition-transform duration-300 rounded-[8px] p-4 relative">
                <button
                  onClick={() => setDeletePopup(false)}
                  className="absolute top-[-30px] right-[-20px] text-white   text-[28px] font-bold cursor-pointer"
                >
                  &times;
                </button>

                <DeletePopup />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Table;
