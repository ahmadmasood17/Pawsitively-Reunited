import { useLocation, Link } from "react-router-dom";

type TabsData = {
  title: string;
  icon: string;
  path: string;
};

type IPROPS = {
  data: TabsData[];
};

const Tabs: React.FC<IPROPS> = ({ data }) => {
  const location = useLocation();

  return (
    <div>
      <ul className="flex flex-col">
        {data.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Link to={item.path} className="w-full" key={index}>
              <button
                className={`w-full min-h-[50px] flex gap-[8px] pl-[26px] items-center cursor-pointer px-2 py-1  
                  ${
                    isActive
                      ? "bg-[#1FAC4B] border-r-4 border-[#472D7B] text-white"
                      : "text-[#252525]"
                  }`}
              >
                <img src={item.icon} className="w-[18px] h-[18px]" alt="" />
                {item.title}
              </button>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Tabs;
