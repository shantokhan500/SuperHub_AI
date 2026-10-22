export type HubModule = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  category: string;
  icon: string;
  color: string;
  features: string[];
  status: "MVP candidate" | "Planned";
};

export const modules: HubModule[] = [
  {
    slug: "study-center",
    number: "01",
    title: "AI Study Center",
    shortTitle: "Study Center",
    description: "Turn notes and documents into clear explanations, summaries, and practice quizzes.",
    category: "Learn",
    icon: "GraduationCap",
    color: "violet",
    features: ["PDF summaries", "Study notes", "MCQ and quiz generation", "Study planner"],
    status: "MVP candidate",
  },
  {
    slug: "career-job-ai",
    number: "02",
    title: "Career & Job AI",
    shortTitle: "Career & Jobs",
    description: "Prepare a stronger CV, practice interviews, and organize job applications.",
    category: "Grow",
    icon: "BriefcaseBusiness",
    color: "blue",
    features: ["CV builder", "Cover letters", "Interview practice", "Application tracker"],
    status: "MVP candidate",
  },
  {
    slug: "smart-business",
    number: "03",
    title: "Smart Business Manager",
    shortTitle: "Smart Business",
    description: "Keep products, stock, sales, expenses, and business reports in one place.",
    category: "Work",
    icon: "Store",
    color: "orange",
    features: ["Product inventory", "Sales records", "Expenses and dues", "Reports"],
    status: "Planned",
  },
  {
    slug: "service-marketplace",
    number: "04",
    title: "Service Marketplace",
    shortTitle: "Services",
    description: "Discover local tutors, technicians, and service providers with useful profiles.",
    category: "Connect",
    icon: "Users",
    color: "green",
    features: ["Search by category", "Provider profiles", "Booking requests", "Reviews and reports"],
    status: "Planned",
  },
  {
    slug: "freelancer-hub",
    number: "05",
    title: "Freelancer Hub",
    shortTitle: "Freelancer Hub",
    description: "Showcase skills, find projects, send proposals, and collaborate with a team.",
    category: "Work",
    icon: "Workflow",
    color: "cyan",
    features: ["Portfolio", "Project listings", "Proposals", "Team collaboration"],
    status: "Planned",
  },
  {
    slug: "community-connect",
    number: "06",
    title: "Community Connect",
    shortTitle: "Community",
    description: "Coordinate community events, announcements, volunteering, and transparent reports.",
    category: "Connect",
    icon: "HeartHandshake",
    color: "rose",
    features: ["Community pages", "Events", "Volunteer tasks", "Donation reports"],
    status: "Planned",
  },
  {
    slug: "travel-planner",
    number: "07",
    title: "Travel Planner",
    shortTitle: "Travel",
    description: "Explore destinations and create practical trips around a budget and itinerary.",
    category: "Explore",
    icon: "Map",
    color: "teal",
    features: ["Destination directory", "Trip itinerary", "Budget estimate", "Saved places"],
    status: "Planned",
  },
  {
    slug: "takatrack",
    number: "08",
    title: "TakaTrack Finance",
    shortTitle: "Finance",
    description: "Track personal income, expenses, monthly budgets, and savings goals.",
    category: "Manage",
    icon: "Wallet",
    color: "emerald",
    features: ["Income and expenses", "Categories", "Budgets", "Monthly reports"],
    status: "Planned",
  },
  {
    slug: "bangladoc-ai",
    number: "09",
    title: "BanglaDoc AI",
    shortTitle: "BanglaDoc AI",
    description: "Extract, summarize, and work with documents in Bangla and English.",
    category: "Create",
    icon: "FileText",
    color: "amber",
    features: ["PDF text extraction", "OCR-ready workflow", "Translation", "Summary and export"],
    status: "MVP candidate",
  },
  {
    slug: "careerpath-ai",
    number: "10",
    title: "CareerPath AI",
    shortTitle: "CareerPath",
    description: "Understand your current skills and build a structured learning roadmap.",
    category: "Grow",
    icon: "Route",
    color: "indigo",
    features: ["Skill assessment", "Learning roadmap", "Project suggestions", "Progress tracking"],
    status: "MVP candidate",
  },
];

export function getModule(slug: string) {
  return modules.find((item) => item.slug === slug);
}
