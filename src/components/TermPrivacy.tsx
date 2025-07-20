
type Term = {
    title:string;
    para:string;
}
type IPROPS = {
    data: Term[];
}

const TermPrivacy: React.FC<IPROPS> = ({data}) => {
  return (
    <div className="bg-[#F8FAFD] p-[20px] border border-[#D5D7DA] rounded-[8px]">
        <div className="py-[12px] px-[14px] border border-[#D5D7DA] bg-white rounded-[8px] h-[288px]  overflow-y-auto">
            <h4 className="text-[#181D27] mb-[23px]">Last Updated: July 8, 2025</h4>
            <ul>
                {data.map((item,index) => (
                    <li key={index} className="pb-[10px]">
                        <h4 className="text-[#181D27] font-bold mb-[13px] text-[16px]">{index + 1 }.{item.title}</h4>
                        <p className="mb-[5px]">{item.para}</p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default TermPrivacy