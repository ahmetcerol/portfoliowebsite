import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme , lightTheme} from './utils/Themes';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Skills from './components/Skills';
import Education from './components/Education'
import { BrowserRouter as Router } from 'react-router-dom';
import Experience from './components/Experience';
import { useState } from 'react';
import Project from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * @author: Ahmet Can Erol
 * Date: 17.10.2023
 * Project Details: It's finished.
 */

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [currentTheme, setCurrentTheme] = useState(darkTheme);
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === darkTheme ? lightTheme : darkTheme);
  };

  return (
   <ThemeProvider theme={currentTheme}>
    <Router>
    <Navbar toggleTheme={toggleTheme}/>
    
    <Body>
        <Hero/>
        <Wrapper>
        <Skills/>
        <Experience/>
        </Wrapper>
        <Wrapper>
        <Project openModal={openModal} setOpenModal={setOpenModal} />
        </Wrapper>
        <Wrapper>
          <Education/>
          <Contact/>
        </Wrapper>
        {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
    </Body>
    <Footer/>
    </Router>
   </ThemeProvider>
  );
}

export default App;
