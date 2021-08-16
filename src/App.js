import React,{Component} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import About from './contents/About';
import Skills from './contents/Skills';
import Projects from './contents/Projects';
import Resume from './contents/Resume';
import Contact from './contents/Contact';


import './App.css';
// import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          
            <Header />
            <div className="content">
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <About />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Skills />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Projects />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Resume />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Contact/>
            </div>
        </Router>
      </div>
    );
}
}

export default App;
