import Button from "../../../components/Button";
import Plus from "../../../assets/Images/plus.svg";
import Clock from "../../../assets/Images/clock.svg";
import Air from "../../../assets/Images/airbird.svg";
import { useState } from "react";
import DonationForm from "../../../components/DonationForm";

type Users = {
  img: string;
  name: string;
  join: string;
  time: number;
  donation: number;
};

type IPROPS = {
  data: Users[];
};

const UserList: React.FC<IPROPS> = ({ data }) => {
  const [form, setForm] = useState(false);

  return (
    <div className="border-[1px] border-[#DEDEDE] rounded-[12px] p-[16px] bg-[white] relative">
      <div className="flex justify-between">
        <h3 className="text-[20px] font-bold text-[#252525] ">
          Live Donation Feed
        </h3>

        <div onClick={() => setForm(true)}>
          <Button icon={Plus} text="Add Donations" minWidth="min-w-[170px]" />
        </div>
      </div>

      <ul>
        {data.map((item, index) => (
          <li
            className="border-b-[1px] border-[#2525251A] py-[18px] px-[27px]"
            key={index}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[10px]">
                <img
                  className="w-[36px] h-[36px] object-cover rounded-[50%]"
                  src={item.img}
                  alt=""
                />
                <div>
                  <h4 className="text-[16px] text-[#181D27] font-bold">
                    {item.name}
                  </h4>
                  <div className="flex gap-[15px]">
                    <div className="flex gap-[6px] items-center">
                      <img
                        className="w-[14px] h-[12px] object-cover"
                        src={Air}
                        alt=""
                      />
                      <span className="text-[#181D27CC] text-[14px]">
                        {item.join}
                        
                      </span>
                    </div>
                    <div className="flex gap-[6px] items-center">
                      <img
                        className="w-[12px] h-[12px] object-cover"
                        src={Clock}
                        alt=""
                      />
                      <span className="text-[#181D27CC] text-[14px]">
                        {item.time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="text-[18px] font-bold text-[#1FAC4B]">
                ${item.donation}
              </h4>
            </div>
          </li>
        ))}
      </ul>

      {form && (
        <div className="fixed inset-0 bg-[#25252566] z-50 flex items-center justify-center">
          <div className="bg-white rounded-[20px] max-w-[618px] w-full relative">

            <button
              onClick={() => setForm(false)}
              className="absolute top-[-30px] right-[-15px] text-[34px] text-white cursor-pointer"
            >
              &times;
            </button>
            <DonationForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
