export const needsAttention = [
  {
    id: 1,
    title: "Infrastructure approval blocking API rollout",
    description:
      "Engineering is waiting on infrastructure team to approve firewall changes required for the API rollout.",
    impact: "High",
    waitingFor: "Infrastructure Lead",
    waitingSince: "48h",
    conversations: 18,
    tags: ["Engineering", "Infrastructure", "API Rollout"],
  },
  {
    id: 2,
    title: "Interview approvals pending for 3 candidates",
    description:
      "Offer approvals are pending with hiring managers for more than 36 hours.",
    impact: "Medium",
    waitingFor: "Hiring Managers",
    waitingSince: "48h",
    conversations: 18,
    tags: ["Hiring", "Talent Acquisition"],
  },
  {
    id: 3,
    title: "Customer escalation awaiting response",
    description:
      "A key enterprise customer hasn't received a response regarding the reported issue.",
    impact: "l=Low",
    waitingFor: "Customer Success",
    waitingSince: "32h",
    conversations: 9,
    tags: ["Customer Success", "Product"],
  },
  {
    id: 4,
    title: "Finance approval required for cloud spend",
    description:
      "Additional cloud spend approval is pending for AWS infrastructure.",
    impact: "Medium",
    waitingFor: "Finance Lead",
    waitingSince: "48h",
    conversations: 9,
    tags: ["Finance", "Operations"],
  },
  {
    id: 5,
    title: "Legal review pending for vendor contract",
    description:
      "Vendor contract is waiting for legal review for the last 28 hours.",
    impact: "Low",
    waitingFor: "Legal Team",
    waitingSince: "28h",
    conversations: 11,
    tags: ["Legal", "Procurement"],
  },
];

export const emergingRisks = [
  {
    id: 1,
    title: "Hiring velocity slowing",
    description:
      "Interview feedback delays have included significantly this week and may impact critical hires.",
    impactDescription:
      "Interview feedback delays have included significantly this week and may impact critical hires.",
    impact: "High",
    score: 85,
    tags: ["Talent Acquisition", "Talent"],
    recommendedAction: "Review retention strategy",
  },

  {
    id: 2,
    title: "Finance approvals taking longer",
    description:
      "Approval turnaround time has increased for procurement and vendor payments.",
    impact: "Medium",
    score: 65,
    tags: ["Finance", "Procurement"],
    recommendedAction: "Follow up with Finance Team",
  },

  {
    id: 3,
    title: "Marketing campaign response slowing",
    description:
      "External vendor responses for campaign assets are slower than usual.",
    impact: "Low",
    score: 32,
    tags: ["Marketing", "Vendor"],
    recommendedAction: "Check with vendor",
  },

    {
    id: 4,
    title: "Hiring velocity slowing",
    description:
      "Interview feedback delays have included significantly this week and may impact critical hires.",
    impactDescription:
      "Interview feedback delays have included significantly this week and may impact critical hires.",
    impact: "High",
    score: 85,
    tags: ["Talent Acquisition", "Talent"],
    recommendedAction: "Review retention strategy",
  },

  {
    id: 5,
    title: "Finance approvals taking longer",
    description:
      "Approval turnaround time has increased for procurement and vendor payments.",
    impact: "Medium",
    score: 65,
    tags: ["Finance", "Procurement"],
    recommendedAction: "Follow up with Finance Team",
  },

  {
    id: 6,
    title: "Marketing campaign response slowing",
    description:
      "External vendor responses for campaign assets are slower than usual.",
    impact: "Low",
    score: 32,
    tags: ["Marketing", "Vendor"],
    recommendedAction: "Check with vendor",
  },
];
export const weeklyBrief = [
  "Execution health improved by 6% this week.",
  "Execution health improved by 6% this week.",
  "Execution health improved by 6% this week.",
  "Execution health improved by 6% this week.",
  "Execution health improved by 6% this week.",
];