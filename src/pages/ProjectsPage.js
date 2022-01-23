import React from 'react';
import { Stack, Container } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';

function ProjectsPage () {
  return (
    <div className="ProjectsPage">
      <Container>
        <Stack className="mb-5" gap={3}>
          <h1>Projects</h1>
          <ProjectCard image="logo512.png" title="Example1" text="Nothing to say here."/>
          <ProjectCard image="logo512.png" title="Example2" text="No projects yet."/>
          <ProjectCard image="logo512.png" title="Example3" text="Place holder"/>
        </Stack>
      </Container>
    </div>
  );
}

export default ProjectsPage;
