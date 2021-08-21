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
    projects:[
      {
        name:"fixer-tube",
        links:[
            {type:'live',url:"https://fixer-tube.herokuapp.com/"},
            {type:'git',url:"https://github.com/nicksolony/fixer-tube"},
            {type:'youtube',url:"https://youtu.be/6AuazvySc9U"},
            {type:'blog',url:"https://nicksolonyy.medium.com/front-end-form-validation-in-react-33595dec8d6f?sk=b6a12799b8a6076aa51715f92f6088e9"}
          ],
        img:"./imgs/fixer-tube.jpg",
        desc:"Database of how-to-fix-things YouTube videos.",
        youtube:"https://www.youtube.com/embed/6AuazvySc9U"
      },
      {
        name:"Menu Creator",
        links:[
          {type:'git',url:"https://github.com/nicksolony/menu-creator"},
          {type:'youtube',url:"https://youtu.be/G5gYx6zxjlY"},
          {type:'blog',url:"https://nicksolonyy.medium.com/using-clonenode-to-save-your-time-and-sanity-b9b6f6cc9463?sk=f8687f7def4ab980ce8ee1233ee61734"}
        ],
        img:"./imgs/menu-creator.jpg",
        desc:"SPA to empower restaurant owners to manage and print daily menus.",
        youtube:"https://www.youtube.com/embed/G5gYx6zxjlY"
      },
      {
        name:"Movie_DB",
        links:[
          {type:'git',url:"https://github.com/nicksolony/movie_db"},
          {type:'youtube',url:"https://youtu.be/hE8MKbCivN8"},
          {type:'blog',url:"https://nicksolonyy.medium.com/code-hit-the-error-find-a-workaround-and-watch-your-time-c04814befad9?sk=e0ec931cd1ac1bbe19c401f679030a5a"}
        ],
        img:"./imgs/movie-db.jpg",
        desc:"Online database of films that includes cast and production crew.",
        youtube:"https://www.youtube.com/embed/hE8MKbCivN8"
      }
    ],
    resume:{
      name:"Nick Solonyy",
      address:"Corona, NY 11368",
      phone:"347-691-2935",
      email:"nicksolony@gmail.com",
      git: "https://github.com/nicksolony",
      linkedin: "https://www.linkedin.com/in/nick-solonyy/",
      blog: "http://medium.com/@nicksolonyy"
    }
    
  }

  

  render() {
    return (
      <div className="App">
        <Router>
          
            <Header />
            <div className="content">
              
            <About content={this.state.about} />
            
            <Skills skills = {this.state.skills} />
            
            <Projects projects ={this.state.projects} />
            
            <Resume resume = {this.state.resume} about={this.state.about}/>
            
            <Contact />
            </div>
        </Router>
      </div>
    );
}
}

export default App;
