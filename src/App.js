import { Routes, Route, Link } from 'react-router-dom';

import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/contact">Contact</Link>
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
