import Button from "./Button";


const FilterSideBar = ({ onClose }) => {
  return (
    <div className="px-[20px] pt-[5px] w-[250px]">
      <div className="flex justify-between items-center ">
        <h4 className="text-[16px] font-semibold">Filter Recent Activity</h4>
         <button onClick={onClose} className="text-[#A1A1A1] text-[34px] cursor-pointer">
          &times;
        </button>
      </div>


      <div className="mb-[10px]">
        <h5 className="text-[14px] font-bold mb-[8px] text-[#25252566]">Status</h5>
        <div className="flex flex-col gap-[12px]">
          <label className="flex items-center gap-[12px] text-[14px] font-bold text-[#252525]">
            <input type="checkbox" />
            <span>All</span>
          </label>
          <label className="flex items-center gap-[12px] text-[14px] font-bold text-[#252525]">
            <input type="checkbox" />
            <span>Pending</span>
          </label>
          <label className="flex items-center gap-[12px] text-[14px] font-bold text-[#252525]">
            <input type="checkbox" />
            <span>Processing</span>
          </label>
          <label className="flex items-center gap-[12px] text-[14px] font-bold text-[#252525]">
            <input type="checkbox" />
            <span>Completed</span>
          </label>
        </div>
      </div>

  
      <div className="mb-[16px]">
        <h5 className="text-[14px] font-bold mb-[8px] text-[#25252566]">Category</h5>
        <div className="flex flex-col gap-[12px]">
          <label className="flex items-center gap-[12px] text-[14px] font-bold text-[#252525]">
            <input type="checkbox" />
            <span>Today</span>
          </label>
          <label className="flex items-center gap-[12px] text-[14px] font-bold text-[#252525]">
            <input type="checkbox" />
            <span>This Week</span>
          </label>
          <label className="flex items-center gap-[12px] text-[14px] font-bold text-[#252525]">
            <input type="checkbox" />
            <span>This Month</span>
          </label>
          <label className="flex items-center gap-[12px] text-[14px] font-bold text-[#252525]">
            <input type="checkbox" />
            <span>This Quarter</span>
          </label>
          <label className="flex items-center gap-[12px] text-[14px] font-bold text-[#252525]">
            <input type="checkbox" />
            <span>This Year</span>
          </label>
        </div>
      </div>

      <div className="mb-[20px]">
        <h5 className="text-[14px] font-bold mb-[8px] text-[#25252566]">User Type</h5>
        <div className="flex flex-col gap-[12px]">
          <label className="flex items-center gap-[12px] text-[14px] font-bold text-[#252525]">
            <input type="checkbox" />
            <span>All User</span>
          </label>
          <label className="flex items-center gap-[12px] text-[14px] font-bold text-[#252525]">
            <input type="checkbox" />
            <span>Doners Only</span>
          </label>
          <label className="flex items-center gap-[12px] text-[14px] font-bold text-[#252525]">
            <input type="checkbox" />
            <span>Reporters Only</span>
          </label>
          <label className="flex items-center gap-[12px] text-[14px] font-bold text-[#252525]">
            <input type="checkbox" />
            <span>Adopters Only</span>
          </label>
        </div>
      </div>

      <Button 
      text="Apply Now"
      minWidth="w-full"
      rounDed="rounded-[50px]"
      />


    </div>
  );
};

export default FilterSideBar;
