import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';

function App () {
  return (
    <div className="App">
      <Navbar>
          <Container>
            <Nav>
              <Navbar.Brand href="/">Andrew Vieira</Navbar.Brand>
            </Nav>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/skills">Skills</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Container>
      </Navbar>

      <Routes>
        <Route path="/" element= { <AboutPage/> }/>
        <Route path="/projects" element= { <ProjectsPage/> }/>
        <Route path="/skills" element= { <SkillsPage/> }/>
        <Route path="/contact" element= { <ContactPage/> }/>
        <Route path="*" element= { <Navigate to="/"/> }/>
      </Routes>
    </div>
  );
}

export default App;
