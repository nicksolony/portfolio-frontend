import React from 'react';
import Header from './components/Header';
import About from './contents/About';
import Skills from './contents/Skills';
import Projects from './contents/Projects';
import Resume from './contents/Resume';
import Contact from './contents/Contact';


//need to get logo from Anya to add it here

import './App.css';
// import './App.scss';
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact/>


    </div>
  );
}

export default App;
