import Header from "../shared/Header/Header";
import Sidebar from "../shared/Sidebar/Sidebar";

type Layout = {
  children: React.ReactNode;
};

const Mainlayout: React.FC<Layout> = ({ children }) => {
  return (
    <div className="flex gap-[13px]">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="w-[80%] flex flex-col gap-[16px]">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Mainlayout;
