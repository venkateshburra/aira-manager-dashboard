import { Link } from "react-router-dom";
import {
  LuBell,
  LuEllipsisVertical,
  LuTriangleAlert,
  LuArrowUpRight,
  LuChevronRight,
  LuArrowRight
} from "react-icons/lu";

import {
  needsAttention,
  emergingRisks,
  weeklyBrief,
} from "../data/dashboardData";

function getImpactStyle(impact) {
  switch (impact?.toLowerCase()) {
    case "high":
      return {
        border: "border-l-[#EF4444]",
        icon: "text-[#EF4444]",
        iconBg: "bg-[#FEF2F2]",
        badge: "bg-[#FEF2F2] text-[#EF4444]",
        label: "HIGH IMPACT",
      };

    case "medium":
      return {
        border: "border-l-[#F59E0B]",
        icon: "text-[#F59E0B]",
        iconBg: "bg-[#FFFBEB]",
        badge: "bg-[#FFFBEB] text-[#F59E0B]",
        label: "MEDIUM",
      };

    default:
      return {
        border: "border-l-[#10B981]",
        icon: "text-[#10B981]",
        iconBg: "bg-[#ECFDF5]",
        badge: "bg-[#ECFDF5] text-[#10B981]",
        label: "LOW",
      };
  }
}

function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F3] p-3 sm:p-4 md:p-5 lg:p-6">
      {/* Header */}
      <header className="flex items-center justify-between rounded-[8px] bg-white px-4 py-4 md:px-5">
        <div>
          <h1 className="text-[18px] font-bold leading-6 text-heading md:text-[20px]">
            Good morning, Navatej 👋
          </h1>

          <p className="mt-0.5 text-[12px] text-subheading md:text-[13px]">
            Here's your executive summary for today.
          </p>
        </div>

        <button
          className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#F8FAFC] text-heading"
          aria-label="Notifications"
        >
          <LuBell size={17} />

          <span className="absolute right-[8px] top-[7px] h-[5px] w-[5px] rounded-full bg-[#635BFF]" />
        </button>
      </header>

      <div className="mt-3 space-y-3 md:mt-4 md:space-y-4">
        {/* =========================
            NEEDS ATTENTION
        ========================= */}
        <section className="rounded-[8px] bg-white p-4 md:p-5">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-[15px] font-bold text-heading md:text-[16px]">
              Needs Attention
            </h2>

            <Link
              to="/dashboard/needs-attention"
              className="flex items-center gap-1 text-[11px] font-semibold text-[#635BFF] md:text-[16px]"
            >
              View All
              <LuArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {needsAttention.slice(0, 3).map((item) => {
              const style = getImpactStyle(item.impact);

              return (
                <div
                  key={item.id}
                  className={`flex min-h-[210px] flex-col rounded-[7px] border border-[#F1F5F9] border-l-4 bg-white p-4 ${style.border}`}
                >
                  {/* Card top */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex flex-wrap lg:flex-nowrap items-start gap-3">
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${style.iconBg}`}
                      >
                        <LuTriangleAlert
                          size={16}
                          strokeWidth={1.8}
                          className={style.icon}
                        />
                      </div>

                      <h3 className="heading">{item.title}</h3>
                    </div>

                    <button className="shrink-0 text-heading">
                      <LuEllipsisVertical size={16} />
                    </button>
                  </div>

                  {/* Description */}
                  <p className="mt-2 lg:pl-11 list-text font-semibold opacity-90 max-w-[300px]">
                    {item.description}
                  </p>

                  {/* Divider */}
                  <div className="my-3 border-t border-[#F1F5F9]" />

                  {/* Spacer to push content down */}
                  <div className="flex-1" />

                  {/* Impact */}
                  <span
                    className={`w-fit rounded-[4px] px-3 py-[3px] text-[10px] font-bold ${style.badge}`}
                  >
                    {style.label}
                  </span>

                  {/* Recommended Action */}
                  <div className="mt-3">
                    <p className="text-[12px] font-medium text-subheading">
                      Recommended Action
                    </p>

                    <p className="text-[14px] font-bold mt-2 text-heading opacity-95">
                      Follow up with Infrastructure Lead
                    </p>
                  </div>

                  <div className="mt-auto border-t border-[#F1F5F9] pt-2.5">
                    <Link
                      to="/dashboard/needs-attention"
                      className="flex items-center gap-2 text-[14px] font-bold text-[#635BFF]"
                    >
                      View Details
                      <LuArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================
            EMERGING RISKS
        ========================= */}
        <section className="rounded-[8px] bg-white p-4 md:p-5">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-[15px] font-bold text-heading md:text-[16px]">
              Emerging Risks
            </h2>

            <Link
              to="/dashboard/emerging-risks"
              className="flex items-center gap-1 text-[11px] font-semibold text-[#635BFF] md:text-[16px]"
            >
              View All
              <LuArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {emergingRisks.slice(0, 3).map((item) => {
              const style = getImpactStyle(item.impact);

              return (
                <div
                  key={item.id}
                  className={`flex min-h-[210px] flex-col rounded-[7px] border border-[#F1F5F9] border-l-4 bg-white p-4 ${style.border}`}
                >
                  {/* Card top */}
                    <div className="flex items-start justify-between gap-2">
                    <div className="flex flex-wrap lg:flex-nowrap items-start gap-3">
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${style.iconBg}`}
                      >
                        <LuTriangleAlert
                          size={16}
                          strokeWidth={1.8}
                          className={style.icon}
                        />
                      </div>

                      <h3 className="heading">{item.title}</h3>
                    </div>

                    <button className="shrink-0 text-heading">
                      <LuEllipsisVertical size={16} />
                    </button>
                  </div>

                  {/* Description */}
                  <p className="mt-2 lg:pl-11 list-text font-semibold opacity-90 max-w-[300px]">
                    {item.description}
                  </p>

                  {/* Divider */}
                  <div className="my-3 border-t border-[#F1F5F9]" />

                  {/* Spacer to push content down */}
                  <div className="flex-1" />

                  {/* Impact */}
                  <span
                    className={`w-fit rounded-[4px] px-3 py-[3px] text-[10px] font-bold ${style.badge}`}
                  >
                    {style.label}
                  </span>


                  <div className="mt-auto border-t border-[#F1F5F9] pt-2.5">
                    <Link
                      to="/dashboard/needs-attention"
                      className="flex items-center gap-2 text-[14px] font-bold text-[#635BFF]"
                    >
                      View Details
                      <LuArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================
            WEEKLY BRIEF
        ========================= */}
        <section className="rounded-[8px] bg-white">
          <div className="flex items-center justify-between border-b border-[#F1F5F9] px-4 py-3 md:px-5">
            <h2 className="text-[15px] font-bold text-heading md:text-[16px]">
              Weekly Brief
            </h2>

            <Link
              to="/dashboard/weekly-brief"
              className="flex items-center gap-1 text-[11px] font-semibold text-[#635BFF] md:text-[16px]"
            >
              View Brief
              <LuArrowRight size={16} />
            </Link>
          </div>

          {weeklyBrief.map((brief, index) => (
            <div
              key={index}
              className={`flex items-center gap-5 px-4 py-4 md:px-5 ${
                index !== weeklyBrief.length - 1
                  ? "border-b border-[#F1F5F9]"
                  : ""
              }`}
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] bg-[#10B981] text-[#ECFDF5]">
                <LuArrowUpRight size={14} />
              </span>

              <p className="text-list opacity-90">{brief}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

export default Home;
