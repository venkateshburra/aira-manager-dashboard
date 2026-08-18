import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LuBell,
  LuChevronDown,
  LuChevronRight,
  LuTriangleAlert,
} from "react-icons/lu";

import { emergingRisks } from "../data/dashboardData";

function getRiskStyle(impact) {
  switch (impact?.toLowerCase()) {
    case "high":
      return {
        border: "border-l-[#EF4444]",
        icon: "text-[#EF4444]",
        iconBg: "bg-[#FEF2F2]",
        badge: "border-[#EF4444] text-[#EF4444] bg-[#FEF2F2]",
      };

    case "medium":
      return {
        border: "border-l-[#F59E0B]",
        icon: "text-[#F59E0B]",
        iconBg: "bg-[#FFFBEB]",
        badge: "border-[#F59E0B] text-[#F59E0B] bg-[#FFFBEB]",
      };

    default:
      return {
        border: "border-l-[#10B981]",
        icon: "text-[#10B981]",
        iconBg: "bg-[#ECFDF5]",
        badge: "border-[#10B981] text-[#10B981] bg-[#ECFDF5]",
      };
  }
}

function EmergingRisks() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredRisks =
    activeFilter === "All"
      ? emergingRisks
      : emergingRisks.filter(
          (item) =>
            item.impact?.toLowerCase() === activeFilter.toLowerCase()
        );

  return (
    <main className="min-h-screen bg-[#F5F5F3] p-3 sm:p-4 md:p-5 lg:p-6">

      {/* ================= HEADER ================= */}

      <header className="flex items-center justify-between rounded-[8px] bg-white px-5 py-5 md:px-6">

        <div>
          <h1 className="heading">
            Emerging Risks
          </h1>

          <p className="mt-1 subheading">
            Early warning signals that could become bigger issues if not addressed.
          </p>
        </div>

        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#F8FAFC] text-heading"
        >
          <LuBell size={18} />

          <span className="absolute right-[9px] top-[7px] h-[5px] w-[5px] rounded-full bg-[#635BFF]" />
        </button>

      </header>


      {/* ================= CONTENT ================= */}

      <section className="mt-4 rounded-[8px]">

        {/* ================= FILTER BAR ================= */}

        <div className="flex flex-col gap-4 bg-white p-4 border-b border-[#F1F5F9] pb-3 lg:flex-row lg:items-center lg:justify-between">

          {/* Filters */}

          <div className="flex items-center gap-7 overflow-x-auto">

            {["All", "High", "Medium", "Low"].map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`relative flex items-center gap-2 pb-3 text-[13px] font-medium md:text-[14px] ${
                  activeFilter === filter
                    ? "text-[#635BFF]"
                    : "text-[#64748B]"
                }`}
              >
                {filter}

                {/* Count / dot */}

                {filter === "All" && (
                  <span className="rounded-full bg-[#EEF0FF] px-2 py-0.5 text-[10px] font-semibold text-[#635BFF]">
                    23
                  </span>
                )}

                {filter === "High" && (
                  <span className="rounded-full bg-[#FEF2F2] px-2 py-0.5 text-[10px] font-semibold text-[#EF4444]">
                    8
                  </span>
                )}

                {filter === "Medium" && (
                  <span className="rounded-full bg-[#FFFBEB] px-2 py-0.5 text-[10px] font-semibold text-[#F59E0B]">
                    11
                  </span>
                )}

                {filter === "Low" && (
                  <span className="rounded-full bg-[#ECFDF5] px-2 py-0.5 text-[10px] font-semibold text-[#10B981]">
                    4
                  </span>
                )}

                {activeFilter === filter && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#635BFF]" />
                )}
              </button>
            ))}

          </div>


          {/* Dropdowns */}

          <div className="flex flex-wrap gap-2">

            <button className="flex h-9 items-center gap-5 rounded-[7px] border border-[#E2E8F0] bg-white px-3 text-[12px] text-[#475569]">
              All Teams
              <LuChevronDown size={14} />
            </button>

            <button className="flex h-9 items-center gap-5 rounded-[7px] border border-[#E2E8F0] bg-white px-3 text-[12px] text-[#475569]">
              All Categories
              <LuChevronDown size={14} />
            </button>

            <button className="flex h-9 items-center gap-5 rounded-[7px] border border-[#E2E8F0] bg-white px-3 text-[12px] text-[#475569]">
              Sort: Priority
              <LuChevronDown size={14} />
            </button>

          </div>

        </div>


        {/* ================= RISK LIST ================= */}

        <div className="mt-4 space-y-6">

          {filteredRisks.map((item) => {

            const style = getRiskStyle(item.impact);

            return (
              <div
                key={item.id}
                className={`rounded-[7px] border border-[#F1F5F9] border-l-4 bg-white p-4 ${style.border}`}
              >

                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 lg:items-start">
 

                  {/* ================= MAIN RISK ================= */}

                  <div className="flex flex-col flex-wrap xl:flex-nowrap lg:flex-row min-w-0 gap-4">

                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${style.iconBg}`}
                    >
                      <LuTriangleAlert
                        size={15}
                        strokeWidth={1.8}
                        className={style.icon}
                      />
                    </div>


                    <div className="min-w-0">

                      <h2 className="heading font-semibold">
                        {item.title}
                      </h2>

                      <p className="mt-2 max-w-[330px] list-text leading-5">
                        {item.description || item.impactDescription}
                      </p>


                      {/* Tags */}

                      <div className="mt-2 flex flex-wrap gap-3">

                        {item.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-[#F3F4F6] px-3 py-1 text-[12px] font-medium text-[#475569]"
                          >
                            {tag}
                          </span>
                        ))}

                      </div>

                    </div>

                  </div>


                  {/* ================= RISK SCORE ================= */}

                  <div className="border-t space-y-3 border-[#F1F5F9] pt-4 xl:text-center lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">

                    <p className="text-[12px] font-medium uppercase tracking-wide text-[#64748B]">
                      Risk Score
                    </p>

                    <p className="mt-1 text-[36px] font-semibold leading-8 text-[#111827]">
                      {item.score}
                    </p>

                    <span
                      className={`mt-1 inline-flex rounded-[4px] border px-2 py-1 text-[10px] font-medium ${style.badge}`}
                    >
                      {item.impact?.toUpperCase()} RISK
                    </span>

                  </div>


                  {/* ================= WHY WE SEE THIS ================= */}

                  <div className="border-t border-[#F1F5F9] pt-4 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">

                    <h3 className="text-[14px] font-semibold text-[#111827]">
                      Why we see this
                    </h3>

                    <ul className="mt-4 space-y-2">

                      <li className="flex gap-2 max-w-[200px] text-[14px] leading-4 text-[#64748B]">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#CBD5E1]" />
                        Avg interview feedback time increased 8h to 26hrs.
                      </li> 

                      <li className="flex gap-2 max-w-[200px] text-[14px] leading-4 text-[#64748B]">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#CBD5E1]" />
                        14 candidates waiting for feedback.
                      </li>

                      <li className="flex gap-2 max-w-[200px] text-[14px] leading-4 text-[#64748B]">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#CBD5E1]" />
                        Feedback pending with 7 managers.
                      </li>

                    </ul>

                  </div>


                  {/* ================= IMPACT ================= */}

                  <div className="border-t border-[#F1F5F9] pt-4 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">

                    <h3 className="text-[14px] font-semibold text-[#111827]">
                      Potential Impact & Recommended Action
                    </h3>

                    <p className="mt-2 max-w-[230px] text-[14px] leading-4 text-[#64748B]">
                      Project delays in the Apollo launch due to loss of key institutional knowledge.
                    </p>

                    <p className="mt-3 text-[12px] font-medium text-[#475569] underline">
                      Recommended action
                    </p>

                    <Link
                      to={`/dashboard/emerging-risks/${item.id}`}
                      className="mt-1 inline-flex items-center gap-1 text-[16px] font-semibold text-[#635BFF]"
                    >
                      {item.recommendedAction || "Review retention strategy"}
                      <LuChevronRight size={16} />
                    </Link>

                  </div>

                </div>

              </div>
            );
          })}

        </div>


        {/* ================= PAGINATION ================= */}

        <div className="mt-4 flex flex-col gap-3 border-t border-[#F1F5F9] pt-4 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[14px] text-subheading">
            Showing 1 to {Math.min(filteredRisks.length, 5)} of 15 items
          </p>

          <div className="flex items-center gap-1">

            <button
              type="button"
              className="flex h-7 items-center gap-1 rounded border border-[#E2E8F0] px-2 text-[9px] text-list"
            >
              Back
            </button>

            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                type="button"
                className={`flex h-7 w-7 items-center justify-center rounded text-[9px] ${
                  page === 2
                    ? "bg-[#635BFF] text-white"
                    : "border border-[#E2E8F0] text-list"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              className="flex h-7 items-center gap-1 rounded border border-[#E2E8F0] px-2 text-[9px] text-list"
            >
              Next
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}

export default EmergingRisks;