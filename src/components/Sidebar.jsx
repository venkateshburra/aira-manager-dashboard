import { Link, useLocation } from "react-router-dom";
import {
  LuLayoutDashboard,
  LuHand,
  LuBuilding2,
  LuCalendarDays,
  LuX,
} from "react-icons/lu";
import logo from "../assets/Logo.png";

const navigationItems = [
  {
    label: "Home",
    path: "/dashboard",
    icon: LuLayoutDashboard,
  },
  {
    label: "Needs Attention",
    path: "/dashboard/needs-attention",
    icon: LuHand,
  },
  {
    label: "Emerging Risks",
    path: "/dashboard/emerging-risks",
    icon: LuHand,
  },
  {
    label: "Execution Health",
    path: "/dashboard/execution-health",
    icon: LuBuilding2,
  },
  // {
  //   label: "Weekly Brief",
  //   path: "/dashboard/weekly-brief",
  //   icon: LuCalendarDays,
  // },
];

function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();

  return (
    <>
      {/* Mobile Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 md:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex w-[280px] flex-col bg-[#121F43] text-white transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="relative flex h-[100px] items-center px-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="AIRA Logo" className="h-6 w-6 object-contain" />

            <span className="text-[18px] font-medium text-white">
              AIRA
            </span>
          </div>

          {/* Mobile close */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 rounded-md p-1.5 text-white/60 hover:bg-white/10 hover:text-white md:hidden"
            aria-label="Close sidebar"
          >
            <LuX size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4">
          <div className="space-y-5">
            {navigationItems.map((item) => {
              const isActive =
                item.path === "/dashboard"
                  ? location.pathname === "/dashboard" ||
                    location.pathname === "/dashboard/"
                  : location.pathname.startsWith(item.path);

              const Icon = item.icon;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen && setIsOpen(false)}
                  className={`flex h-[40px] w-full items-center gap-3 rounded-[6px] px-4 subheading transition-colors ${
                    isActive
                      ? "bg-white text-[#121F43]"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon
                    size={14}
                    strokeWidth={1.8}
                    className="shrink-0"
                  />

                  <span className="font-medium">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* User */}
        <div className="border-t border-white/10 px-5 py-5">
          <p className="text-[13px] font-semibold text-white">
            Navatej
          </p>

          <p className="mt-1 text-[11px] text-white/60">
            Founder & CEO
          </p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;