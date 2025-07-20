import User from "../assets/Images/people.svg";
import Document from "../assets/Images/document.svg";
import Convert from "../assets/Images/convertshape.svg";
import Dollar from "../assets/Images/dollar-circle.svg";

const DashBoardCardData = [
  {
    title: "User Management",
    user: 1200,
    grow: +1.5,
    icon: User,
    iconBg: "bg-[#4361EE]",
  },
  {
    title: "Pet Listings",
    user: 340,
    grow: -1.5,
    icon: Document,
    iconBg: "bg-[#F59E0B]",
  },
  {
    title: "Location Tracking",
    user: 780,
    grow: +1.5,
    icon: Convert,
    iconBg: "bg-[#10B981]",
  },
  {
    title: "Donations",
    user: 150,
    grow: -1.5,
    icon: Dollar,
    iconBg: "bg-[#8B5CF6]",
  },
];

export default DashBoardCardData;
