
import { Link } from "react-router-dom";
import NotificatinData from "../../../constants/NotificatinData";



type HideData = {
  action?: boolean;
  maxHight?:string;
};

const NotificatoinList: React.FC<HideData> = ({ action = false, maxHight = "max-h-[700px]" }) => {
  return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#D5D7DA]">
        {action === true && (
          <div className="flex justify-between items-center px-4 py-2 border-b border-[#D5D7DA]">
            <h2 className="font-semibold">Notifications</h2>
            <button className="text-blue-600 text-sm">Mark All as Read</button>
          </div>
        )}

        <div className={`${maxHight}  overflow-y-auto`}>
          {NotificatinData.map((item) => (
            <div
              key={item.id}
              className="flex items-start px-4 py-3 border-b border-[#D5D7DA] last:border-b-0 hover:bg-gray-50"
            >
              <img
                src={item.avatar}
                alt=""
                className="w-8 h-8 rounded-full mr-3 mt-1"
              />
              <div className="flex-1">
                <div className="font-medium text-sm text-gray-900">
                  {item.title}
                </div>
                <div className="text-xs text-gray-500">{item.description}</div>
              </div>
              <div className="flex flex-col items-end ml-2">
                <span className="text-xs text-gray-400">{item.time}</span>
                {item.unread && (
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-1"></span>
                )}
              </div>
            </div>
          ))}
        </div>
        {action === true && (
          <div className="text-center py-2 border-t">
            <Link to="/notification" className="text-blue-600 text-sm">
              View All Notifications →
          </Link>
          </div>
        )}
      </div>
  )
}

export default NotificatoinList