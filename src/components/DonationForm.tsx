import Button from "./Button";
import { useState } from "react";

const DonationForm = () => {
  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "No file chosen");
  };
  return (
    <div className="bg-white p-[20px] rounded-[20px] max-w-[618px] mx-auto">
      <form>
        <h4 className="text-[18px] font-semibold mb-[16px]">
          Add New Donation
        </h4>

        <div className="flex gap-[16px] mb-[12px]">
          <div className="flex-1">
            <label className="block text-[14px] mb-[4px]">Donor Name</label>
            <select className="w-full border-[1px] border-[#D5D7DA] rounded-[8px] px-[12px] py-[8px] outline-0 text-[#717680]">
              <option>Select Donor</option>
              <option>Value1</option>
              <option>Value2</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-[14px] mb-[4px]">Email Address</label>
            <input
              type="email"
              placeholder="Example@email.com"
              className="w-full border-[1px] border-[#D5D7DA] rounded-[8px] px-[12px] py-[8px] outline-0"
            />
          </div>
        </div>

        <div className="flex gap-[16px] mb-[12px]">
          <div className="flex-1">
            <label className="block text-[14px] mb-[4px]">Amount</label>
            <input
              type="number"
              placeholder="$0.00"
              className="w-full outline-0 border-[1px] border-[#D5D7DA] rounded-[8px] px-[12px] py-[8px]"
            />
          </div>
          <div className="flex-1">
            <label className="block text-[14px] mb-[4px]">Date</label>
            <input
              type="date"
              className="w-full outline-0 text-[#717680] border-[1px] border-[#D5D7DA] rounded-[8px] px-[12px] py-[8px]"
            />
          </div>
        </div>

        <div className="flex gap-[16px] mb-[12px]">
          <div className="flex-1">
            <label className="block text-[14px] mb-[4px]">Payment Method</label>
            <select className="w-full text-[#717680] border-[1px] outline-0 border-[#D5D7DA] rounded-[8px] px-[12px] py-[8px]">
              <option>Credit Card</option>
              <option>Bank Transfer</option>
              <option>Cash</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-[14px] mb-[4px]">
              Recurring Donation
            </label>
            <select className="w-full text-[#717680] outline-0 border-[1px] border-[#D5D7DA] rounded-[8px] px-[12px] py-[8px]">
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>
        </div>

        <div className="mb-[12px]">
          <label className="block text-[14px] mb-[4px]">Notes</label>
          <textarea
            placeholder="Optional notes...."
            className="w-full border-[1px] outline-0 border-[#D5D7DA] rounded-[8px] px-[12px] py-[8px] resize-none"
            rows={3}
          />
        </div>

        <div className="mb-[16px]">
          <label className="block text-[14px] outline-0 mb-[4px]">
            Attach Receipt
          </label>
          <div className="flex items-center gap-[8px]">
            <input
              type="file"
              onChange={handleFileChange}
              className="w-[126px] text-transparent  border-[1px] border-[#D5D7DA] rounded-[8px] pl-[18px] pr-[8px] py-[8px] file:cursor-pointer outline-0 file:border-none file:bg-transparent file:text-[#252525] file:p-0"
            />
            <span className="text-[14px] text-[#252525] truncate max-w-[100px]">
              {fileName}
            </span>
          </div>
        </div>

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
      </form>
    </div>
  );
};

export default DonationForm;
