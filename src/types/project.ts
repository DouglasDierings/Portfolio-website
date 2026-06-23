export type ProjectId = "task-manager" | "portfolio" | "api-service";

export type Project = {
  id: ProjectId;
  year: string;
  technologies: string[];
  href: string;
};
