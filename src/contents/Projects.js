import React, {Component} from 'react'
import ProjectItem from '../components/ProjectItem'

class Projects extends Component {
    render() {
        return ( 
            <div id='Projects'>
                <h2>PROJECTS</h2>
                <div className="sectionContent">
                <table>
                <tr>
                    
                    {this.props.projects.map((project)=><td><ProjectItem item={project}  /></td>)}
                </tr>
            </table>
            </div>
        </div>
        )
    }
}

export default Projects

