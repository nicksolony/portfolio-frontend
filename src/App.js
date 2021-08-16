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
    skills:['Ruby', 'Rails', 'SQL', 'Javascript', 'React', 'Redux', 'Sinatra', 'HTML', 'CSS', 'PHP', 'MySQL', 'RESTful API', 'MS Office', 'Google Suite', 'JIRA'],
    projects:[{name:"fixer-tube",git:"https://github.com/nicksolony/fixer-tube",img:"./imgs/fixer-tube.jpg",desc:"Database of how-to-fix-things YouTube videos.",live:"https://fixer-tube.herokuapp.com/",youtube:"https://www.youtube.com/embed/6AuazvySc9U",blog:"https://nicksolonyy.medium.com/front-end-form-validation-in-react-33595dec8d6f?sk=b6a12799b8a6076aa51715f92f6088e9"},{name:"Menu Creator",git:"https://github.com/nicksolony/menu-creator",img:"./imgs/fixer-tube.jpg",desc:"SPA to empower restaurant owners to manage and print daily menus.",youtube:"https://www.youtube.com/embed/G5gYx6zxjlY",blog:"https://nicksolonyy.medium.com/using-clonenode-to-save-your-time-and-sanity-b9b6f6cc9463?sk=f8687f7def4ab980ce8ee1233ee61734"}]
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
            <Projects projects ={this.state.projects}/>
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
