import EditApiList from "../constants/EditApiList";
import NewApiList from "../constants/NewApiList";
import CheckboxList from "../pages/Settings/Components/CheckboxList";
import Button from "./Button";

type ApikeyPopUPProps = {
    title?: string;
    actionedikey?: boolean;
    actionnewkey?:boolean;
}


const ApikeyPopUP: React.FC<ApikeyPopUPProps> = ({title, actionedikey= true, actionnewkey = false}) => {
  
    


  return (
  
      <div className="bg-white p-6 rounded-lg shadow-lg  w-full">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="flex gap-[16px]">
          <div className="flex-1">
            <label className="block text-[14px] mb-[4px]">Service Name</label>
            <div className="border-[1px] border-[#D5D7DA] rounded-[8px] px-[12px] py-[8px] outline-0 text-[#717680]">
              <select className="w-full outline-0">
                <option>Select a Service</option>
                <option>Value1</option>
                <option>Value2</option>
              </select>
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-[14px] mb-[4px]">Key Name</label>
            <input
              type="text"
              value="1234567890abcdef"
              readOnly
              className="w-full border-[1px] border-[#D5D7DA] rounded-[8px] px-[12px] py-[8px] outline-0 text-[#717680]"
            />
          </div>
        </div>
        <div>
          <label className="block text-[14px] mt-[16px] mb-[4px]">
            API Key
          </label>
          <input
            type="password"
            value="1234567890abcdef1234567890abcdef"
            readOnly
            className="w-full border-[1px] border-[#D5D7DA] rounded-[8px] px-[12px] py-[8px] outline-0 text-[#717680]"
          />
        </div>
        {actionedikey === true && (
             <div className="mt-[16px]">
           <CheckboxList title="Key Rotation" data={EditApiList}/>
        </div>
        )}
      {actionnewkey === true && (
             <div className="mt-[16px]">
           <CheckboxList title="Permissions" data={NewApiList}/>
        </div>
        )}

         

        <div className="flex justify-end gap-[12px] mt-[12px]">
          <Button
            text="Cancel"
            bgColor="bg-white"
            textColor="text-[#252525]"
            border="border border-[#D5D7DA]"
            rounDed="rounded-[50px]"
            minWidth="w-full"
          />
          <Button
            text="Save"
            bgColor="bg-[#22C55E]"
            textColor="text-white"
            rounDed="rounded-[50px]"
            minWidth="w-full"
          />
        </div>
      </div>
 
  );
};

export default ApikeyPopUP;
