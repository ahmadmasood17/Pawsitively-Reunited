import ToggleBtn from "./ToggleBtn";

type CheckBox = {
  title: string;
  para: string;
  checkbox?: string;
   action?: boolean;
};
type IPROPS = {
  data: CheckBox[];
 
};

const SettingsListCheckbox: React.FC<IPROPS> = ({ data}) => {
  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>
          <div className=" pt-[25px] pb-[20px] border-b-[1px] border-[#DEDEDE99]">
            <div className="flex justify-between items-center max-w-[717px]">
              <div>
                <h4 className="text-[18px] font-medium text-[#3E3E3E]">
                  {item.title}
                </h4>
                <p className="text-[14px] text-[#3E3E3E]">{item.para}</p>
              </div>
              {item.action === true && <ToggleBtn />}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SettingsListCheckbox;
