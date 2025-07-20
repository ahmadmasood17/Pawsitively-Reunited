import User from "../assets/Images/people.svg";
import Document from "../assets/Images/document.svg";
import Convert from "../assets/Images/convertshape.svg";
import Dollar from "../assets/Images/dollar-circle.svg";

const DonationCardData = [
  {
    title: "Total Donations",
    user: 3954.43,
    icon: User,
    iconBg: "bg-[#4361EE]",
    text: "Includes one-time and recurring donations."
  },
  {
    title: "New Donors",
    user: 38,
    icon: Document,
    iconBg: "bg-[#F59E0B]",
    text: "Unique donors who donated for the first time"
  },
  {
    title: "Top Campaign",
    user: "Save Street Dogs",
    icon: Convert,
    iconBg: "bg-[#10B981]",
    text: "Highest earning active campaign",
    fontsize: "text-[21px]",
  },
  {
    title: "Avrg Donation Value",
    user: 20.45,
    icon: Dollar,
    iconBg: "bg-[#8B5CF6]",
    text: "Calculated across selected date range"
  },
];

export default DonationCardData;
