export type ProjectId =
  | "capstone-project"
  | "learn-flow"
  | "find-out-your-tax";

export type Project = {
  id: ProjectId;
  year: string;
  technologies: string[];
  href: string;
};
