export type Category = {
  category: "Front-end" | "Back-end" | "AI" | "DevOps" | "General";
  slug: "front-end" | "back-end" | "ai" | "devops" | "general";
};

export type AdminCategory = {
  id: string;
  category: string;
  slug: string;
};

export const CategoryChart = [
  { title: "Front-end", desktop: 186 },
  { title: "Back-end", desktop: 306 },
  { title: "AI", desktop: 400 },
  { title: "DevOps", desktop: 75 },
  { title: "General", desktop: 216 },
];
