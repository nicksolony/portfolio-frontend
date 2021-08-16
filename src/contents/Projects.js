import React, {Component} from 'react'
import ProjectItem from '../components/ProjectItem'

class Projects extends Component {
    render() {
        return ( 
            <div id='Projects'>
                <h2>PROJECTS</h2>
                <table className="sectionContent">
                <tr>
                    
                    {this.props.projects.map((project)=><ProjectItem item={project} />)}
                </tr>
            </table>
            <img src="../imgs/fixer-tube.jpg" alt="" height="100%" width="100%"/>
        </div>
        )
    }
}

export default Projects

