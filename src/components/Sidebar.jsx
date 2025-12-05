import { Link, useNavigate } from "react-router-dom";
import { FiMoon, FiClock, FiType, FiActivity, FiSettings, FiLogOut } from "react-icons/fi";
import { useClerk } from "@clerk/clerk-react";

export default function Sidebar() {
  const navigate = useNavigate();
  const { signOut } = useClerk();

  const handleLogout = () => {
    signOut(() => navigate("/"));
  };

  return (
    <div className="w-64 bg-black/80 backdrop-blur-md border-r border-purple-700/20 h-screen p-6 flex flex-col">

      <div className="mb-8">
        <h2 className="text-xl font-bold glow-text">Dashboard</h2>
      </div>

      <div className="space-y-4 text-gray-300 flex-1">

        <Link to="/sleep" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-500/10 hover:text-purple-300 transition-all">
          <FiMoon size={20} /> <span>Sleep Analysis</span>
        </Link>

        <Link to="/screen-time" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-500/10 hover:text-purple-300 transition-all">
          <FiClock size={20} /> <span>Screen Time</span>
        </Link>

        <Link to="/typing" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-500/10 hover:text-purple-300 transition-all">
          <FiType size={20} /> <span>Typing AI</span>
        </Link>

        <Link to="/stress" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-500/10 hover:text-purple-300 transition-all">
          <FiActivity size={20} /> <span>Stress Index</span>
        </Link>

        <Link to="/settings" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-500/10 hover:text-purple-300 transition-all">
          <FiSettings size={20} /> <span>Settings</span>
        </Link>

      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-3 rounded-lg 
                   bg-red-500/10 border-2 border-red-500/30 
                   text-red-400 hover:bg-red-500/20 hover:border-red-500/50 
                   transition-all mt-4"
      >
        <FiLogOut size={20} /> <span>Logout</span>
      </button>
    </div>
  );
}
