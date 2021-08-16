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

  state = {
    about: "Agile learner with proven multi-tasking capabilities, masterful organizational skills, and great detail orientation. Fluent in three languages, and holds an international MBA degree. Flexible web developer with experience in operations and project management and a background in remote team collaboration.",
    skills:['Ruby', 'Rails', 'SQL', 'Javascript', 'React', 'Redux', 'Sinatra', 'HTML', 'CSS', 'PHP', 'MySQL', 'RESTful API', 'MS Office', 'Google Suite', 'JIRA']
  }


  render() {
    return (
      <div className="App">
        <Router>
          
            <Header />
            <div className="content">
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <About content={this.state.about} />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Skills skills = {this.state.skills}/>
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
