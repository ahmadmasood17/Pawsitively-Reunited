import SettingHeading from "../../../components/SettingHeading";
import SettingIcon from "../../../assets/Images/setting.svg";
import SettingsListCheckbox from "../../../components/SettingsListCheckbox";
import FeatureToggles from "../../../constants/FeatureToggles";
import MaintenanceMode from "../../../constants/MaintenanceMode";
import ApikeyForm from "../../../components/ApikeyForm";
import Button from "../../../components/Button";
import Table from "../../../components/Table";
import ApiKeyManagementTableData from "../../../constants/ApiKeyManagementTableData";
import { useState } from "react";
import ApikeyPopUP from "../../../components/ApikeyPopUP";
import Pluss from "../../../assets/Images/pluss.svg";
import Maintenance from "../../../assets/Images/maintenance.svg"
import Key from "../../../assets/Images/key.svg";


const AppConfigration = () => {
  const [popup, setShowPopup] = useState(false);

  return (
    <div className="flex flex-col gap-[30px]">
      <div className="rounded-[10px] pt-[20px] pb-[28px] pl-[16px] pr-[24px] bg-white">
        <SettingHeading title="Feature Toggles" icon={SettingIcon} />
        <SettingsListCheckbox data={FeatureToggles} />
      </div>

      <div className="rounded-[10px] pt-[20px] pb-[28px] pl-[16px] pr-[24px] bg-white">
        <SettingHeading title="Maintenance Mode" icon={Maintenance} />
        <SettingsListCheckbox data={MaintenanceMode} />
      </div>

      <div className="bg-white rounded-[10px] px-[16px] pt-[20px] pb-[28px] flex flex-col gap-[20px]">
        <div className="flex justify-between items-center">
          <SettingHeading title="Api Key" icon={Key} />

          <div onClick={() => setShowPopup(!popup)}>
            <Button text="Add Key" 
              iconAlignment="left"
              icon={Pluss}
            />
          </div>

          {popup && (
            <div className="fixed top-0 left-0 w-full h-full bg-[#25252566] bg-opacity-50 flex items-center justify-center z-50">
              <div className="w-[618px] relative">
                <button
                  onClick={() => setShowPopup(false)}
                  className="absolute top-[-35px] right-[-15px] text-[34px] text-white cursor-pointer"
                >
                  &times;
                </button>
                <ApikeyPopUP title="Add New API Key" actionedikey={false} actionnewkey={true}/>
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-[20px] ">
          <ApikeyForm title="Mapbox API Key" />
          <ApikeyForm title="Stripe API Key" />
        </div>

        <div>
          <SettingHeading title="API Key Management" icon={Key} />  
          <Table
            data={ApiKeyManagementTableData}
            action={false}
            filter={false}
            showAll={false}
            pagiantionAction={false}
          />
        </div>
      </div>
    </div>
  );
};

export default AppConfigration;
