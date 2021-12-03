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
        name:"Fixer-tube",
        links:[
            {type:'live',url:"https://fixer-tube.herokuapp.com/"},
            {type:'git',url:"https://github.com/nicksolony/fixer-tube"},
            {type:'youtube',url:"https://youtu.be/6AuazvySc9U"},
            {type:'blog',url:"https://nicksolonyy.medium.com/front-end-form-validation-in-react-33595dec8d6f?sk=b6a12799b8a6076aa51715f92f6088e9"}
          ],
        img:"./imgs/fixer-tube.jpg",
        desc:"Database of how-to-fix-things YouTube videos.",
        youtube:"https://www.youtube.com/embed/6AuazvySc9U",
        bullets:['Designed Rails backend API to enable the client-side app to fetch and store data.','Created a custom set_slug method in Rails Models to ensure that each record in the database has a slug.','Applied front-end form validation using the local state to speed up error handling during form submission.','Utilized nested routing and slugs in URL using react-router-dom to show app structure and the page contents']
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
        youtube:"https://www.youtube.com/embed/G5gYx6zxjlY",
        bullets:['Built a Single Page Application using HTML, CSS, and JavaScript to communicate with a backend API.','Leveraged Node.cloneNode() method to DRY code and re-use elements in JavaScript.','Enhanced visual layout of the application by applying CSS styling.']
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
        youtube:"https://www.youtube.com/embed/hE8MKbCivN8",
        bullets:['Coded Ruby on Rails application to manage data using forms.', 'Assigned validations to the main attributes to ensure database integrity.','Established standard and 3rd party(Facebook) user authentication to protect the database entries.']
      }
    ],
    resume:{
      name:"Nick Solonyy",
      address:"Corona, NY 11368",
      phone:"347-691-2935",
      email:"nicksolony@gmail.com",
      git: "https://github.com/nicksolony",
      linkedin: "https://www.linkedin.com/in/nick-solonyy/",
      blog: "http://medium.com/@nicksolonyy",
      jobs:[
        {
          company:"Hilson Management Corporation",
          location: "New York, NY",
          position: "Executive Administrative Assistant",
          from:"10/2020",
          to:"Present",
          bullets:['Review and optimize processes of a Real Estate management company to facilitate accurate and quick task turnaround.','Created a follow-up system that improved the rental arrears collection rate by 20%.']
        },
        {
          company:"NYIM Training/ NYC Career Centers",
          location: "New York, NY",
          position: "Office Manager",
          from:"02/2016",
          to:"10/2020",
          bullets:['Directed and ran day-to-day operations of a software training company.','Optimized training scheduling system to complete the booking within one call.']
        },
        {
          company:"Metaweb Technologies (Google) via Upwork",
          location: "Remote",
          position: "Team Co-Lead",
          from:"01/2012",
          to:"02/2016",
          bullets:[`Managed and successfully completed over 100 projects on Google Knowledge Graph.`,'Developed project guidelines and tracking charts minimizing errors and expediting project completion.','Supervised a team of 60 employees and monitored their activities and performance.']
        }
      ],
      education:[{
        institution:"Flatiron School Software Engineering Bootcamp",
        field:"Intensive Part-Time Software Engineering",
        location:"Online",
        dates:"11/2019 - 12/2020"
      },
      {
        institution:"Kyiv National Economic University",
        field:"Master of Business Administration (Organizational Management)",
        location:"Kyiv, Ukraine",
        dates:"06/2014"
      }
      ],
      community:['Sponsor @ Mykolaivka Orphanage, Ukraine','Humanitarian Volunteer Translator @ Tarjimly'],
      pdf:"https://drive.google.com/uc?id=1pwWWkUVjMxwICHuPeZSbMYKoVdb5_9mw&export=download"
      
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
            
            <Resume state = {this.state} />
            <hr/>
            <Contact info = {this.state.resume}/>
            </div>
        </Router>
      </div>
    );
}
}

export default App;
