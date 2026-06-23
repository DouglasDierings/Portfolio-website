import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  title: string;
  description: string;
  linkLabel: string;
  tagsLabel: string;
};

export function ProjectCard({
  project,
  title,
  description,
  linkLabel,
  tagsLabel,
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
      <div className="tag-row" aria-label={tagsLabel}>
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>
      <a
        className="project-link"
        href={project.href}
        rel="noreferrer"
        target="_blank"
      >
        {linkLabel}
        <span aria-hidden="true">&nearr;</span>
      </a>
    </article>
  );
}
