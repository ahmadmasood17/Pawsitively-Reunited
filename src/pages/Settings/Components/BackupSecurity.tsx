import Accordion from "../../../components/Accordion";
import SettingHeading from "../../../components/SettingHeading";
import SettingIcon from "../../../assets/Images/setting.svg";
import Button from "../../../components/Button";
import DataBackup from "../../../constants/DataBackup";
import Table from "../../../components/Table";
import SecurityLogsTableData from "../../../constants/SecurityLogsTableData";
import AuditTrailsTableData from "../../../constants/AuditTrailsTableData";
import DataBackUP from "../../../assets/Images/databackup.svg"
import Security from "../../../assets/Images/security.svg";
import Audit from "../../../assets/Images/audit.svg"; 
import ViewBackUP from "../../../assets/Images/viewbackup.svg";
import Play from "../../../assets/Images/play.svg";

const BackupSecurity = () => {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="rounded-[10px] pt-[20px] pb-[28px] pl-[16px] pr-[24px] bg-white">
        <div className="flex flex-col gap-[23px]">
          <div className="flex justify-between">
            <SettingHeading title="Data Backup" icon={DataBackUP} />
            <Button
              text="View Backup Logs"
              icon={ViewBackUP}
              iconAlignment="left"
              minWidth="min-w-[197px]"
              bgColor="bg-white"
              textColor="text-[#585858]"
            />
          </div>

          <div className="px-[30px] flex gap-[35px]">
            <div className="w-full">
              <Accordion
                data={DataBackup}
                action={false}
                paddingLeft="pl-[0]"
              />
            </div>

            <div className="flex flex-col gap-[45px] ">
              <div className="min-w-[342px] border border-[#DEDEDE] rounded-[8px] px-[12px]">

              <select
                name=""
                id=""
                className="outline-none w-full py-[15px] "
              >
                <option value="daily">Daily At 3AM</option>
              </select>
                              
              </div>
              <p className="pl-[15px] text-[#252525] font-bold">
                Today, 3:02 AM
              </p>
            </div>
          </div>

          <div>
            <Button
              text="Run Backup Now"
              icon={Play}
              iconAlignment="left"
              minWidth="w-[187px]"
            />
          </div>
        </div>
      </div>

      <div className="rounded-[10px] pt-[20px] pb-[28px] pl-[16px] pr-[24px] bg-white">
        <div className="flex flex-col gap-[10px]">
          <div className="flex justify-between">
            <SettingHeading title="Security Logs" icon={Security} />
            <Button
              text="Export"
              icon={SettingIcon}
              iconAlignment="left"
              minWidth="min-w-[110px]"
              bgColor="bg-white"
              textColor="text-[#252525]"
            />
          </div>
           <div className="bg-[#F8FAFD] p-[20px] rounded-[12px] border border-[#2525251A]">
          <Table
            data={SecurityLogsTableData}
            filter={false}
            showAll={false}
            action={false}
             pagiantionAction={false}
             tableminHight="h-[250px] overflow-y-scroll"
          />
        </div>
        </div>
      </div>

      <div className="rounded-[10px] pt-[20px] pb-[28px] pl-[16px] pr-[24px] bg-white">
        <div className="flex flex-col gap-[10px]">
          <div className="flex justify-between">
            <SettingHeading title="Audit Trails" icon={Audit} />
         
          </div>
          <div className="bg-[#F8FAFD] p-[20px] rounded-[12px] border border-[#2525251A]">
          <Table
            data={AuditTrailsTableData}
            filter={false}
            showAll={false}
            action={false}
             pagiantionAction={false}
             tableminHight="h-[250px] overflow-y-scroll"
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default BackupSecurity;
