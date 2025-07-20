type ListData = {
  list?: string;
};
type IPROPS = {
  data: ListData[];
  title?: string;
};

const CheckboxList: React.FC<IPROPS> = ({ data, title }) => {
  return (
    <div>
      <h4 className="font-semibold text-[14px] text-[#252525]">{title}</h4>
      <ul>
        {data.map((item, index) => (
          <li className="flex gap-[5px] pb-[6px]" key={index}>
             <label className="relative inline-flex items-center justify-center cursor-pointer">
      <input 
        type="checkbox" 
        className="appearance-none h-[18px] w-[18px] border border-gray-300 rounded bg-white 
                  checked:bg-green-600 checked:border-green-600 peer"
      />
      <svg 
        className="absolute  w-5 h-5 text-white p-1 hidden peer-checked:block" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="3" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
      </svg>
    </label>

            <span className="text-[14px]">{item.list}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckboxList;
