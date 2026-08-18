import { LuCheckCircle } from "react-icons/lu";
import { useDashboard } from "../data/DashboardContext";

function Toast() {
  const { toast } = useDashboard();

  if (!toast) return null;

  return (
    <>
      <style>{`
        @keyframes toastSlideIn {
          from { transform: translateX(120%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-toast {
          animation: toastSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
      <div className="fixed top-6 right-6 z-[9999] flex items-center gap-2.5 rounded-xl border border-gray-200 bg-white/90 px-4 py-3.5 text-[13px] font-semibold text-gray-900 shadow-xl backdrop-blur-md animate-toast">
        <LuCheckCircle className="text-green-500" size={18} />
        <span>{toast}</span>
      </div>
    </>
  );
}

export default Toast;
