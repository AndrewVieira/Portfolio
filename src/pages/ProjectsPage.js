import { Container } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';

function ProjectsPage() {
  return (
    <div className="ProjectsPage">
      <Container>
        <h1>Projects Page</h1>
        <ProjectCard image="logo512.png" title="Example1" text="Nothing to say here."/>
        <ProjectCard image="logo512.png" title="Example2" text="No projects yet."/>
        <ProjectCard image="logo512.png" title="Example3" text="Place holder"/>
      </Container>
    </div>
  );
}

export default ProjectsPage;