import Sidebar from "../components/Sidebar";
import HolographicRibbon from "../components/HolographicRibbon";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen relative overflow-hidden">
      {/* Holographic Ribbons */}
      <HolographicRibbon position="top-right" />
      <HolographicRibbon position="bottom-left" />

      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 p-6 sm:p-8 pt-20 sm:pt-24 bg-black text-white relative z-20">
        {children}
      </div>
    </div>
  );
}
