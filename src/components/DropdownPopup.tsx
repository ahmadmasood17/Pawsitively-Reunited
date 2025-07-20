import { Link } from "react-router-dom";


type MenuItem = {
  label: string;
  icon: string;
  path?: string;
  danger?: boolean;
};

type IPROPS = {
  data: MenuItem[];
  onViewClick?: () => void;
  onDeleteClick?: () => void;
};

const DropdownPopup: React.FC<IPROPS> = ({ data, onViewClick ,onDeleteClick}) => {
  return (
    <ul className="">
      {data.map((item, index) =>
        item.label === "View" ? (
          <button
            key={index}
            type="button"
            onClick={onViewClick}
            className={`cursor-pointer flex items-center w-full gap-[10px] py-[10px] rounded-[6px] transition-all duration-200 ${
              item.danger ? "text-[#E33333]" : "text-[#181D27CC]"
            }`}
          >
            <img
              src={item.icon}
              alt={item.label}
              className="w-[18px] h-[18px] object-cover"
            />
            <span className="text-[14px]">{item.label}</span>
          </button>
        ) : (
          // <Link
          //   key={index}
          //   to={item.path || "#"}
          //   className={`flex items-center gap-[10px] py-[10px] rounded-[6px] transition-all duration-200 ${
          //     item.danger ? "text-[#E33333]" : "text-[#181D27CC]"
          //   }`}
          // >
          //   <img
          //     src={item.icon}
          //     alt={item.label}
          //     className="w-[18px] h-[18px] object-cover"
          //   />
          //   <span className="text-[14px]">{item.label}</span>
          // </Link>
           <button
            key={index}
            type="button"
            onClick={onDeleteClick}
            className={`cursor-pointer flex items-center w-full gap-[10px] py-[10px] rounded-[6px] transition-all duration-200 ${
              item.danger ? "text-[#E33333]" : "text-[#181D27CC]"
            }`}
          >
            <img
              src={item.icon}
              alt={item.label}
              className="w-[18px] h-[18px] object-cover"
            />
            <span className="text-[14px]">{item.label}</span>
          </button>
        )
      )}
    </ul>
  );
};

export default DropdownPopup;
