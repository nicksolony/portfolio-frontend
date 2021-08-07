import React, {Component} from 'react'
import ProjectItem from './ProjectItem'

class Projects extends Component {
    render() {
        return ( 
            <div id='Projects'>
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

