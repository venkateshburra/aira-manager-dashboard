import { LuBell, LuMessageSquare, LuUserRound, LuZap, LuBriefcaseBusiness, LuClock3, LuTrendingUp, LuTriangleAlert } from "react-icons/lu";

const healthAreas = [
  {
    title: "Response Health",
    description: "How quickly your team responds in conversations",
    status: "Good",
    score: 89,
    icon: LuMessageSquare,
    iconBg: "bg-[#ECFDF5]",
    iconColor: "text-[#10B981]",
    bar: "bg-[#10B981]",
  },
  {
    title: "Ownership Clarity",
    description: "Clarity of ownership and next steps in discussions",
    status: "Fair",
    score: 76,
    icon: LuUserRound,
    iconBg: "bg-[#FFFBEB]",
    iconColor: "text-[#F59E0B]",
    bar: "bg-[#F59E0B]",
  },
  {
    title: "Decision Velocity",
    description: "Speed of making and confirming decisions",
    status: "Good",
    score: 88,
    icon: LuZap,
    iconBg: "bg-[#EFF6FF]",
    iconColor: "text-[#3B82F6]",
    bar: "bg-[#10B981]",
  },
  {
    title: "Blocked Work",
    description: "Work items waiting on responses or decisions",
    status: "Needs Attention",
    score: 62,
    icon: LuBriefcaseBusiness,
    iconBg: "bg-[#FAF5FF]",
    iconColor: "text-[#A855F7]",
    bar: "bg-[#F97316]",
  },
  {
    title: "Follow-up Health",
    description: "Timeliness and quality of follow-ups",
    status: "Fair",
    score: 71,
    icon: LuClock3,
    iconBg: "bg-[#FDF2F8]",
    iconColor: "text-[#EC4899]",
    bar: "bg-[#F59E0B]",
  },
];

const scoreFactors = [
  {
    type: "good",
    title: "Decisions happening faster",
    description: "Decision velocity improved by 10% across key projects.",
  },
  {
    type: "warning",
    title: "Blocked work increased",
    description: "More threads are waiting on responses for over 24 hours.",
  },
  {
    type: "warning",
    title: "Ownership gaps detected",
    description: "12 conversations have unclear ownership or next steps.",
  },
  {
    type: "good",
    title: "Decisions happening faster",
    description: "Decision velocity improved by 10% across key projects.",
  },
  {
    type: "warning",
    title: "Ownership gaps detected",
    description: "12 conversations have unclear ownership or next steps.",
  },
  {
    type: "good",
    title: "Decisions happening faster",
    description: "Decision velocity improved by 10% across key projects.",
  },
];

const trendData = [
  25,
  35,
  48,
  70,
  66,
  52,
  70,
  82,
];

function ExecutionHealth() {
  return (
    <main className="min-h-screen bg-[#F5F5F3] p-3 sm:p-4 md:p-5 lg:p-6">

      {/* ================= HEADER ================= */}

      <header className="flex items-center justify-between rounded-[8px] bg-white px-5 py-5 md:px-6">

        <div>
          <h1 className="heading">
            Execution Health
          </h1>

          <p className="mt-1 subheading">
            Real-time view of how your team is executing.
          </p>
        </div>

        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#F8FAFC] text-heading"
        >
          <LuBell size={19} />

          <span className="absolute right-[9px] top-[7px] h-[5px] w-[5px] rounded-full bg-[#635BFF]" />
        </button>

      </header>


      {/* ================= TOP CONTENT ================= */}

      <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-[1.35fr_1fr]">

        {/* ================= HEALTH BY AREA ================= */}

        <section className="rounded-[8px] bg-white p-5 md:p-6">

          <h2 className="text-[16px] font-bold text-[#111827]">
            Health by Area
          </h2>

          <div className="mt-3 space-y-2">

            {healthAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className={`flex flex-wrap items-center gap-3 py-4 ${
                    index !== healthAreas.length - 1
                      ? "border-b border-[#F1F5F9]"
                      : ""
                  }`}
                >

                  {/* Icon */}

                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${area.iconBg}`}
                  >
                    <Icon
                      size={18}
                      className={area.iconColor}
                      strokeWidth={1.8}
                    />
                  </div>


                  {/* Text */}

                  <div className="min-w-0 flex-">

                    <h4 className="text-[14px] font-bold text-[#111827]">
                      {area.title}
                    </h4>

                    <p className="mt-0.5 max-w-[250px] opacity-80 text-[14px] mt-2 leading-4">
                      {area.description}
                    </p>

                  </div>


                  {/* Status */}

                  <div className="hidden w-[90px] shrink-0 sm:block">

                    <span
                      className={`inline-flex rounded-[6px] px-2 py-1 text-[10px] font-medium ${
                        area.status === "Good"
                          ? "bg-[#ECFDF5] text-[#10B981]"
                          : area.status === "Fair"
                            ? "bg-[#FFFBEB] text-[#F59E0B]"
                            : "bg-[#FFF7ED] text-[#F97316]"
                      }`}
                    >
                      {area.status}
                    </span>

                  </div>


                  {/* Progress */}

                  <div className="flex w-[150px] shrink-0 items-center gap-3">

                    <div className="h-[5px] flex-1 overflow-hidden rounded-full bg-[#E2E8F0]">

                      <div
                        className={`h-full rounded-full ${area.bar}`}
                        style={{
                          width: `${area.score}%`,
                        }}
                      />

                    </div>

                    <span className="w-[48px] text-right text-[12px] font-semibold text-[#111827]">
                      {area.score}
                      <span className="font-normal text-[#94A3B8]">
                        /100
                      </span>
                    </span>

                  </div>

                </div>
              );
            })}

          </div>

        </section>


        {/* ================= WHAT'S DRIVING SCORE ================= */}

        <section className="rounded-[8px] bg-white p-5 md:p-6">

          <h2 className="text-[16px] font-bold text-[#111827]">
            What's Driving Your Score
          </h2>

          <div className="mt-3 space-y-4">

            {scoreFactors.map((factor, index) => {

              const isGood = factor.type === "good";

              return (
                <div
                  key={`${factor.title}-${index}`}
                  className={`flex items-center gap-3 py-3 ${
                    index !== scoreFactors.length - 1
                      ? ""
                      : ""
                  }`}
                >

                  {/* Icon */}

                  <div
                    className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                      isGood
                        ? "bg-[#ECFDF5]"
                        : "bg-[#FFF7ED]"
                    }`}
                  >
                    {isGood ? (
                      <LuTrendingUp
                        size={15}
                        className="text-[#10B981]"
                      />
                    ) : (
                      <LuTriangleAlert
                        size={15}
                        className="text-[#F59E0B]"
                      />
                    )}
                  </div>


                  {/* Content */}

                  <div>

                    <h4 className="text-[14px] font-bold text-[#111827]">
                      {factor.title}
                    </h4>

                    <p className="mt-0.5 text-[14px] opacity-80 mt-1 leading-4">
                      {factor.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </section>

      </div>


      {/* ================= HEALTH TREND ================= */}

      <section className="mt-4 rounded-[8px] bg-white p-5 md:p-6">

        <div className="flex items-center justify-between">

          <h2 className="text-[16px] font-bold text-[#111827]">
            Health Trend
          </h2>

          <button
            type="button"
            className="flex items-center gap-2 rounded-[6px] border border-[#E2E8F0] px-3 py-1.5 text-[10px] text-[#475569]"
          >
            Last 4 Weeks
            <span className="text-[9px]">⌄</span>
          </button>

        </div>


        {/* Chart */}

        <div className="relative mt-5 h-[210px] overflow-hidden">

          {/* Horizontal lines */}

          <div className="absolute inset-0 flex flex-col justify-between">

            {[100, 75, 50, 25, 0].map((value) => (
              <div
                key={value}
                className="flex items-center gap-2"
              >
                <span className="w-6 text-[8px] text-[#94A3B8]">
                  {value}
                </span>

                <div className="h-px flex-1 bg-[#F1F5F9]" />
              </div>
            ))}

          </div>


          {/* Area chart */}

          <svg
            viewBox="0 0 800 190"
            preserveAspectRatio="none"
            className="absolute left-8 right-0 top-0 h-[190px] w-[calc(100%-32px)]"
          >

            <defs>
              <linearGradient
                id="healthGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#6366F1"
                  stopOpacity="0.35"
                />

                <stop
                  offset="100%"
                  stopColor="#6366F1"
                  stopOpacity="0.03"
                />
              </linearGradient>
            </defs>

            <polygon
              points={`0,${190 - trendData[0] * 1.7} 
                114,${190 - trendData[1] * 1.7}
                228,${190 - trendData[2] * 1.7}
                342,${190 - trendData[3] * 1.7}
                456,${190 - trendData[4] * 1.7}
                570,${190 - trendData[5] * 1.7}
                684,${190 - trendData[6] * 1.7}
                800,${190 - trendData[7] * 1.7}
                800,190
                0,190`}
              fill="url(#healthGradient)"
            />

            <polyline
              points={`0,${190 - trendData[0] * 1.7}
                114,${190 - trendData[1] * 1.7}
                228,${190 - trendData[2] * 1.7}
                342,${190 - trendData[3] * 1.7}
                456,${190 - trendData[4] * 1.7}
                570,${190 - trendData[5] * 1.7}
                684,${190 - trendData[6] * 1.7}
                800,${190 - trendData[7] * 1.7}`}
              fill="none"
              stroke="#6366F1"
              strokeWidth="2"
            />

          </svg>


          {/* Months */}

          <div className="absolute bottom-0 left-8 right-0 flex justify-between">

            {["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "2023"].map(
              (month) => (
                <span
                  key={month}
                  className="text-[8px] text-[#94A3B8]"
                >
                  {month}
                </span>
              )
            )}

          </div>

        </div>

      </section>

    </main>
  );
}

export default ExecutionHealth;