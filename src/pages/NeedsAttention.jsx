import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LuBell,
  LuChevronDown,
  LuClipboardList,
  LuArrowRight
} from "react-icons/lu";

import { needsAttention } from "../data/dashboardData";

function getImpactStyle(impact) {
  switch (impact?.toLowerCase()) {
    case "high":
      return {
        border: "border-l-[#EF4444]",
        icon: "text-[#EF4444]",
        iconBg: "bg-[#FEF2F2]",
        dot: "bg-[#EF4444]",
      };

    case "medium":
      return {
        border: "border-l-[#F59E0B]",
        icon: "text-[#F59E0B]",
        iconBg: "bg-[#FFFBEB]",
        dot: "bg-[#F59E0B]",
      };

    default:
      return {
        border: "border-l-[#10B981]",
        icon: "text-[#10B981]",
        iconBg: "bg-[#ECFDF5]",
        dot: "bg-[#10B981]",
      };
  }
}

function NeedsAttention() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems =
    activeFilter === "All"
      ? needsAttention
      : needsAttention.filter(
          (item) =>
            item.impact.toLowerCase() === activeFilter.toLowerCase()
        );

  return (
    <main className="min-h-screen bg-[#F5F5F3] p-3 sm:p-4 md:p-5 lg:p-6">

      {/* ================= HEADER ================= */}

      <header className="flex min-h-[96px] items-center justify-between rounded-[8px] bg-white px-5 py-5 md:px-6">
        <div>
          <h1 className="text-[20px] font-bold leading-6 text-[#111827] md:text-[22px]">
            Needs Attention
          </h1>

          <p className="mt-1 text-[14px] leading-5 text-[#64748B] md:text-[15px]">
            Items that need your action or decision.
          </p>
        </div>

        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#F8FAFC] text-[#111827]"
        >
          <LuBell size={19} />

          <span className="absolute right-[9px] top-[7px] h-[5px] w-[5px] rounded-full bg-[#635BFF]" />
        </button>
      </header>


      {/* ================= CONTENT ================= */}

      <section className="mt-4 rounded-[8px]">


        {/* ================= FILTER BAR ================= */}

        <div className="flex flex-col gap-4 bg-white p-4 rounded-[8px] border-b border-[#F1F5F9] pb-3 lg:flex-row lg:items-center lg:justify-between">

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


        {/* ================= LIST ================= */}

        <div className="mt-4 space-y-6">

          {filteredItems.map((item) => {
            const style = getImpactStyle(item.impact);

            return (
              <div
                key={item.id}
                className={`rounded-[8px] border border-[#EEF2F6] border-l-4 bg-white px-4 py-5 ${style.border} md:px-5`}
              >

                <div className="grid gap-5 lg:grid-cols-[minmax(0,2.2fr)_1fr_1fr_120px] lg:items-center">


                  {/* ================= MAIN INFO ================= */}

                  <div className="flex flex-col flex-wrap xl:flex-nowrap lg:flex-row min-w-0 gap-4">

                    {/* Icon */}

                    <div
                      className={`flex h-15 w-15 shrink-0 items-center justify-center rounded-full ${style.iconBg}`}
                    >
                      <LuClipboardList
                        size={28}
                        strokeWidth={1.8}
                        className={style.icon}
                      />
                    </div>


                    {/* Content */}

                    <div className="min-w-0 space-y-3">

                      <h2 className="heading font-bold leading-7 max-w-[320px]">
                        {item.title}
                      </h2>

                      <p className="list-text font-semibold opacity-90 max-w-[360px]">
                        {item.description}
                      </p>


                      {/* Tags */}

                      <div className="mt-3 flex flex-wrap items-center gap-2">

                        {item.tags.map((tag, index) => (
                          <div
                            key={tag}
                            className="flex items-baseline gap-6"
                          >

                            <span className="rounded-full bg-[#F1F5F9] px-3 py-1 text-[12px] font-medium text-[#475569]">
                              {tag}
                            </span>

                            {index !== item.tags.length - 1 && (
                              <span className="text-[20px] text-[#64748B]">
                                •
                              </span>
                            )}

                          </div>
                        ))}

                      </div>

                    </div>

                  </div>


                  {/* ================= WAITING ================= */}

                  <div className="border-l border-[#F1F5F9] pl-5">

                    <p className="list-text">
                      Waiting for
                    </p>

                    <p className="mt-1 text-[16px] font-semibold text-[#111827]">
                      {item.waitingFor}  
                    </p>

                    <p className="mt-3 list-text">
                      Waiting since
                    </p>

                    <p className="mt-1 text-[16px] font-semibold text-[#111827]">
                      {item.waitingSince}
                    </p>

                  </div>


                  {/* ================= IMPACT ================= */}

                  <div className="border-l border-[#F1F5F9] pl-5">

                    <p className="list-text">
                      Impact
                    </p>

                    <div className="mt-1 flex items-center gap-2">

                      <span
                        className={`h-2 w-2 rounded-full ${style.dot}`}
                      />

                      <span className="text-[16px] font-semibold text-[#111827]">
                        {item.impact}
                      </span>

                    </div>

                    <p className="mt-3 list-text">
                      Conversations
                    </p>

                    <p className="mt-1 text-[16px] font-semibold text-[#111827]">
                      {item.conversations}
                    </p>

                  </div>


                  {/* ================= DETAILS ================= */}

                  <Link
                    to={`/dashboard/needs-attention/${item.id}`}
                    className="flex items-center gap-1 whitespace-nowrap text-[16px] font-semibold text-[#635BFF] hover:underline"
                  >
                    View details
                    <span className="text-[16px]">
                        <LuArrowRight size={16} />
                    </span>
                  </Link>

                </div>

              </div>
            );
          })}

        </div>


        {/* ================= PAGINATION ================= */}

        <div className="mt-4 flex flex-col gap-3 border-t border-[#F1F5F9] pt-4 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[14px] text-[#64748B]">
            Showing 1 to {filteredItems.length} of 15 items
          </p>

          <div className="flex items-center gap-1">

            <button className="h-8 rounded-md border border-[#E2E8F0] px-3 text-[10px] text-[#64748B]">
              Back
            </button>

            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`h-8 w-8 rounded-md text-[10px] ${
                  page === 2
                    ? "bg-[#635BFF] text-white"
                    : "border border-[#E2E8F0] text-[#64748B]"
                }`}
              >
                {page}
              </button>
            ))}

            <button className="h-8 rounded-md border border-[#E2E8F0] px-3 text-[10px] text-[#64748B]">
              Next
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}

export default NeedsAttention;