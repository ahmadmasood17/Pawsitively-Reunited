type BtnData = {
  text: string;
  textColor?:string;
  bgColor?: string;
  border?: string;
  icon?: string;
  minWidth?:string;
  minHeight?:string;
  iconAlignment?: "left" | "right";
  rounDed?:string;
};

const Button: React.FC<BtnData> = ({
  text,
  textColor = "text-white",
  bgColor = "bg-[#1FAC4B]",
  border = "bg-transperet",
  icon = "w-[18px] h-[18px] object-cover",
  iconAlignment = "right",
  minWidth = "min-w-[123px]",
  minHeight = "min-h-[40px]",
  rounDed = "rounded-[10px]",
}) => {
  return (
    <button className={`${bgColor} cursor-pointer inline-flex items-center justify-center gap-[8px] ${border} border-[1px] ${rounDed} ${minWidth} ${minHeight} ${textColor} text-[16px] font-semibold `}>
      {iconAlignment === "left" && <img src={icon} alt="" />}
      {text}
      {iconAlignment === "right" && <img src={icon} alt="" />}
    </button>
  );
};

export default Button;
