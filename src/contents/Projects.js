import React, {Component} from 'react'
import ProjectItem from '../components/ProjectItem'

class Projects extends Component {
    render() {
        return ( 
            <div id='Projects'>
                <h2>PROJECTS</h2>
            <ul>
                <li><ProjectItem /></li>
                <li>Project 2</li>
                <li>Project 3</li>
                <li>Project 4</li>
            </ul>
        </div>
        )
    }
}

export default Projects

