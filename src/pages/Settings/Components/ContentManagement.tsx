import Accordion from "../../../components/Accordion";
import FaqsData from "../../../constants/FaqsData";
import SettingHeading from "../../../components/SettingHeading";
import SettingIcon from "../../../assets/Images/setting.svg";
import TermPrivacy from "../../../components/TermPrivacy";
import TermsData from "../../../constants/TermsData";
import PrivacyData from "../../../constants/PrivacyData";
import Button from "../../../components/Button";
import QuestionMark from "../../../assets/Images/questionmark.svg";
import Term from "../../../assets/Images/term.svg";
import Privacy from "../../../assets/Images/privacy.svg";
import Save from "../../../assets/Images/save.svg";

const ContentManagement = () => {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="rounded-[10px] pt-[20px] pb-[28px] pl-[16px] pr-[24px] bg-white">
        <div className="flex flex-col gap-[23px]">
          <SettingHeading title="FAQs & Help Content" icon={QuestionMark} />
          <div className="pl-[30px]">
            <Accordion data={FaqsData} />
          </div>
        </div>
      </div>

      <div className="rounded-[10px] pt-[20px] pb-[28px] pl-[16px] pr-[24px] bg-white">
        <div className="flex flex-col gap-[23px]">
          <div className="flex justify-between">
            <SettingHeading title="Terms & Conditions" icon={Term} />
            <Button
              text="Save Changes"
              icon={Save}
              iconAlignment="left"
              minWidth="min-w-[166px]"
            />
          </div>
          <TermPrivacy data={TermsData} />
        </div>
      </div>

      <div className="rounded-[10px] pt-[20px] pb-[28px] pl-[16px] pr-[24px] bg-white">
        <div className="flex flex-col gap-[23px]">
          <div className="flex justify-between">
            <SettingHeading title="Privacy Policy" icon={Privacy} />
            <Button
              text="Save Changes"
              icon={Save}
              iconAlignment="left"
              minWidth="min-w-[166px]"
            />
          </div>
          <TermPrivacy data={PrivacyData} />
        </div>
      </div>
    </div>
  );
};

export default ContentManagement;
