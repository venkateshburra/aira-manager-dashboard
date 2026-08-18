import { Link, useParams } from "react-router-dom";
import {
  LuBell,
  LuChevronLeft,
  LuClock3,
  LuSend,
  LuZap,
} from "react-icons/lu";

import { needsAttention } from "../data/dashboardData";

function NeedsAttentionDetail() {
  const { id } = useParams();

  const item = needsAttention.find(
    (item) => item.id === Number(id)
  );

  if (!item) {
    return (
      <main className="min-h-screen bg-[#F5F5F3] p-4 md:p-6">
        <div className="rounded-[8px] bg-white p-6">
          <h1 className="heading">Item not found</h1>

          <Link
            to="/dashboard/needs-attention"
            className="mt-4 inline-flex text-[16px] font-semibold text-[#635BFF]"
          >
            Back to Needs Attention
          </Link>
        </div>
      </main>
    );
  }

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


      {/* ================= DETAIL ================= */}

      <div className="mt-4 space-y-4">

        {/* ================= MAIN CARD ================= */}

        <section className="rounded-[8px] bg-white p-5 md:p-6">

          {/* Top */}

          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

            <div>

              <p className="text-[11px] font-bold uppercase tracking-wide text-[#EF4444]">
                Needs Attention
              </p>

              <h2 className="mt-2 heading font-bold leading-7">
                {item.title}
              </h2>

              <p className="mt-2 list-text font-semibold opacity-90">
                {item.description}
              </p>

            </div>


            {/* Impact + time */}

            <div className="flex shrink-0 flex-col items-start gap-2 md:items-end">

              <span className="rounded-full bg-[#FEF2F2] px-3 py-1 text-[10px] font-bold text-[#EF4444]">
                {item.impact} Impact
              </span>

              <div className="flex items-center gap-1.5 text-[11px] text-[#64748B]">
                Today,
                <LuClock3 size={13} />
                10:42 AM
              </div>

            </div>

          </div>


          {/* ================= INFO BOXES ================= */}

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {/* Blocking */}

            <div className="rounded-[6px] border border-[#EEF2F6] p-4">

              <p className="text-[10px] font-medium uppercase text-[#64748B]">
                Blocking For
              </p>

              <p className="mt-2 text-[16px] font-bold text-[#635BFF]">
                {item.waitingSince || "48h"}
              </p>

              <p className="mt-1 text-[9px] text-[#94A3B8]">
                Since May 21, 10:30 AM
              </p>

            </div>


            {/* Affected Team */}

            <div className="rounded-[6px] border border-[#EEF2F6] p-4">

              <p className="text-[10px] font-medium uppercase text-[#64748B]">
                Affected Team
              </p>

              <p className="mt-2 text-[14px] font-bold text-[#111827]">
                Engineering
              </p>

              <p className="mt-1 text-[9px] text-[#94A3B8]">
                12 members
              </p>

            </div>


            {/* Impact */}

            <div className="rounded-[6px] border border-[#EEF2F6] p-4">

              <p className="text-[10px] font-medium uppercase text-[#64748B]">
                Impact
              </p>

              <p className="mt-2 text-[14px] font-bold text-[#111827]">
                API Rollout
              </p>

              <p className="mt-1 text-[9px] text-[#94A3B8]">
                Customer Portal
              </p>

            </div>


            {/* Risk */}

            <div className="rounded-[6px] border border-[#EEF2F6] p-4">

              <p className="text-[10px] font-medium uppercase text-[#64748B]">
                Risk If Delayed
              </p>

              <p className="mt-2 text-[14px] font-bold text-[#635BFF]">
                High
              </p>

              <p className="mt-1 text-[9px] text-[#94A3B8]">
                Delivery at risk
              </p>

            </div>

          </div>

        </section>


        {/* ================= WHAT'S HAPPENING ================= */}

        <section className="rounded-[8px] bg-white p-5 md:p-6">

          <h2 className="text-[14px] font-bold text-[#111827]">
            What's happening
          </h2>

          <div className="mt-3 rounded-[6px] bg-[#F5E3E0] p-4">

            <p className="text-[12px] font-medium leading-5 text-[#334155]">
              Engineering requested Infrastructure approval on{" "}
              <span className="font-semibold text-[#635BFF]">
                #api-integration
              </span>{" "}
              2 days ago.
            </p>

            <p className="mt-1 text-[11px] leading-5 text-[#64748B]">
              No response yet. 3 follow-ups have been sent with no reply.
            </p>

          </div>

        </section>


        {/* ================= RECOMMENDED ACTION ================= */}

        <section className="rounded-[8px] bg-[#E4E5FA] p-5 md:p-6">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div className="flex gap-4">

              {/* Icon */}

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF0FF] text-[#635BFF]">
                <LuZap size={18} />
              </div>


              {/* Content */}

              <div>

                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#635BFF]">
                  Recommended Action
                </p>

                <h2 className="mt-1 heading font-bold">
                  Follow up with Infrastructure Lead.
                </h2>

                <p className="mt-1 list-text">
                  A quick nudge can help unblock this and keep the rollout on track.
                </p>

              </div>

            </div>


            {/* Button */}

            <button
              type="button"
              className="flex h-10 shrink-0 items-center justify-center gap-2 rounded-[7px] bg-[#635BFF] px-5 text-[12px] font-semibold text-white shadow-md transition hover:bg-[#5548e8]"
            >
              <LuSend size={14} />
              Send Nudge
            </button>

          </div>

        </section>


        {/* Back */}

        <Link
          to="/dashboard/needs-attention"
          className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#635BFF]"
        >
          <LuChevronLeft size={16} />
          Back to Needs Attention
        </Link>

      </div>

    </main>
  );
}

export default NeedsAttentionDetail;