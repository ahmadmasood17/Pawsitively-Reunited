import Button from "./Button"

const DonationDetailSideBar = () => {

const InfoRow = ({ label, value }) => (
  <div className="flex justify-between">
    <span>{label}:</span>
    <span className="text-right min-w-[140px]">{value}</span>
  </div>
);

  return (
     <div className="p-5 w-full max-w-[420px] mx-auto bg-white rounded-[12px] shadow-md">
      <div className="flex justify-between items-center mb-3">
        <h4 className="text-[16px] font-semibold">Lost Dog Report #48239</h4>
        <button
          onClick={onClose}
          className="text-gray-400 text-[28px] font-bold"
        >
          &times;
        </button>
      </div>

      <div className="mb-4">
        <h5 className="text-[14px] font-bold text-gray-500 mb-2">
          Pet Information
        </h5>
        <div className="flex flex-col gap-2 text-sm font-medium">
          <InfoRow label="Name" value="Max" />
          <InfoRow label="Breed" value="Golden Retriever" />
          <InfoRow label="Color" value="Light Brown" />
          <InfoRow label="Gender" value="Male" />
          <InfoRow label="Unique Marks" value="Red collar, Short tail" />
        </div>
      </div>

      <div className="mb-4">
        <h5 className="text-[14px] font-bold text-gray-500 mb-2">
          Report Details
        </h5>
        <div className="flex flex-col gap-2 text-sm font-medium">
          <div className="flex justify-between items-center">
            <span>Status:</span>
            <span className="bg-red-100 text-red-600 px-3 py-0.5 rounded-full text-xs font-semibold">
              Lost
            </span>
          </div>
          <InfoRow label="Submitted by" value="Esther H." />
          <InfoRow label="Report Time" value="Jul 13, 2025, 4:45 PM" />
          <InfoRow label="Location" value="Central Park, NYC" />
        </div>
      </div>

  

      <div className="flex justify-between gap-2 mt-3">
        <div className="w-full">
          <Button text="Approve Report" rounDed="rounded-[50px]" minWidth="w-full" />
        </div>
        <div className="w-full">
          <Button
            text="Mark as Reunited"
            rounDed="rounded-[50px]"
            bgColor="bg-white"
            border="border-[#D5D7DA]"
            textColor="text-[#252525]"
            minWidth="w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default DonationDetailSideBar