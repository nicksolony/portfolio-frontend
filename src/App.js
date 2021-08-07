import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';


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


    </div>
  );
}

export default App;
