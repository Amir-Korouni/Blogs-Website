export type Category = {
  category: "Front-end" | "Back-end" | "AI" | "DevOps" | "General";
  slug: "front-end" | "back-end" | "ai" | "devops" | "general";
};

export type AdminCategory = {
  id: string;
  category: string;
  slug: string;
};
