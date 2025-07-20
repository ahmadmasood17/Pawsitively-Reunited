type CardData = {
  title: string;
  user?: number;
  grow?: number;
  icon?: string;
  iconBg?: string;
  text?: string;
  fontsize?:string;
};

type IPROPS = {
  data: CardData[];
  action?: boolean;
};

const Cards: React.FC<IPROPS> = ({ data, action = true }) => {
  return (
    <>
      {data.map((item, index) => {
        const isPositive = item.grow >= 0;

        return (
          <div
            className="bg-white border-[1px] border-[#E9EAEB] rounded-[12px] p-[20px] w-full"
            key={index}
          >
            <div className="flex justify-between">
              <div>
                <h4 className="font-medium text-[#25252599] ">{item.title}</h4>
                <h2 className={`text-[#252525] font-black ${item.fontsize ?? "text-[30px]"}`}>
                  {item.user}
                </h2>
              </div>
              <div>
                <div
                  className={`${item.iconBg} rounded-[10px] w-[56px] h-[56px] flex justify-center items-center`}
                >
                  <img src={item.icon} alt="" />
                </div>
              </div>
            </div>
            <p className="text-[#252525] text-[12px]">
              {action === true && (
                <span
                  className={`px-[4px] mr-[5px] ${
                    isPositive
                      ? "bg-[#1FAC4B1A] text-[#007e13]"
                      : "bg-[#F40F0F1A] text-[#F72314]"
                  }`}
                >
                  {item.grow > 0 ? `+${item.grow}` : item.grow}
                </span>
              )}

              {item.text ?? " Then Last Month"}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default Cards;
