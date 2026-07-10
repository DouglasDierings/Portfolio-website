import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  title: string;
  description: string;
  linkLabel: string;
};

export function ProjectCard({
  project,
  title,
  description,
  linkLabel,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card-header">
        <span className="card-year">{project.year}</span>
        <span className="project-number" aria-hidden="true">
          {project.id.replaceAll("-", " / ")}
        </span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a
        className="project-link"
        href={project.href}
        rel="noreferrer"
        target="_blank"
      >
        {linkLabel}
        <span aria-hidden="true">{"\u2197"}</span>
      </a>
    </article>
  );
}
