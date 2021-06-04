import { ContentList, ContentListItem } from '@/components/ContentList';
import projects from '@/content/projects';

export function ProjectsList() {
  return (
    <ContentList>
      {Object.keys(projects).map(key => {
        const project = projects[key];

        return (
          <ContentListItem
            key={key}
            href={project.href}
            title={project.title}
            description={project.description}
          />
        );
      })}
    </ContentList>
  );
}
