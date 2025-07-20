import Button from "./Button";
import Delete from "../assets/Images/delete.svg";
import Close from "../assets/Images/close.svg";

const DeletePopup = () => {
  return (
    <div className="flex flex-col gap-[20px] ">
        <div>
      <h4 className="text-[20px] text-[#252525] font-semibold mb-[10px]">
        Delete Profile?
      </h4>
      <p className="text-[#252525] text-[14px]">
        Are you sure you want to permanently delete this user? This action
        cannot be undone.
      </p>
      </div>
      <div className="flex  gap-[10px]  items-center">
        <Button
          icon={Close}
          iconAlignment="left"
          text="Cancel"
          textColor="text-[#252525]"
          bgColor="bg-white"
          border="border border-[#25252533]"
          minWidth="min-w-[154px]"
        />
        <Button
          iconAlignment="left"
          text="Delete"
          icon={Delete}
          bgColor="bg-[#FEF3F2]"
          border="border border-[#FECDCA]"
          minWidth="min-w-[400px]"
          textColor="text-[#D65D54]"
        />
      </div>
    </div>
  );
};

export default DeletePopup;
