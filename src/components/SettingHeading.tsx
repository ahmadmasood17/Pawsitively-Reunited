type SettingsData = {
  icon?: string;
  title: string;
};

const SettingHeading: React.FC<SettingsData> = ({icon,title}) => {
  return (
    <div className="flex gap-[10px] items-center">
      <img src={icon} className="w-[24px] h-[24px] object-contain" alt="" />
      <h4 className="text-[#3E3E3E] text-[22px] font-bold">{title}</h4>
    </div>
  );
};

export default SettingHeading;
