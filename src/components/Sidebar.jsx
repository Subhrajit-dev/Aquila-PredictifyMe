import { Link } from "react-router-dom";
import { FiMoon, FiClock, FiType, FiActivity, FiSettings } from "react-icons/fi";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white dark:bg-slate-900 h-screen p-6 shadow-lg">
      
      <div className="space-y-6 text-slate-700 dark:text-slate-300">

        <Link to="/sleep" className="flex items-center gap-3 hover:text-teal-600">
          <FiMoon size={20} /> <span>Sleep Analysis</span>
        </Link>

        <Link to="/screen-time" className="flex items-center gap-3 hover:text-teal-600">
          <FiClock size={20} /> <span>Screen Time</span>
        </Link>

        <Link to="/typing" className="flex items-center gap-3 hover:text-teal-600">
          <FiType size={20} /> <span>Typing AI</span>
        </Link>

        <Link to="/stress" className="flex items-center gap-3 hover:text-teal-600">
          <FiActivity size={20} /> <span>Stress Index</span>
        </Link>

        <Link to="/settings" className="flex items-center gap-3 hover:text-teal-600">
          <FiSettings size={20} /> <span>Settings</span>
        </Link>

      </div>
    </div>
  );
}
