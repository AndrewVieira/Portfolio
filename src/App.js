import { Routes, Route } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      <Navbar>
          <Container>
            <Nav>
              <Navbar.Brand href="/">Andrew Vieira</Navbar.Brand>
            </Nav>
            <Nav>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/resume">Resume</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Container>
      </Navbar>

      <Routes>
        <Route path="/" element= { <AboutPage/> }/>
        <Route path="/projects" element= { <ProjectsPage/> }/>
        <Route path="/resume" element= { <ResumePage/> }/>
        <Route path="/contact" element= { <ContactPage/> }/>
      </Routes>
    </div>
  );
}

export default App;
