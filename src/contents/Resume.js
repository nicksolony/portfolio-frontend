import React, {Component} from 'react'
import ResumeTop from '../components/ResumeTop'
import ResumeSkills from '../components/ResumeSkills'
import ResumeProjects from '../components/ResumeProjects'
import ResumeExperience from '../components/ResumeExperience'
import ResumeEducation from '../components/ResumeEducation'
import ResumeCommunity from '../components/ResumeCommunity'

class Resume extends Component {
    render() {
        return ( 
            <div id='Resume' className="component">
                <h2>RESUME</h2>
                <table>
                    <tr>
                        <td className="ColumnLeft">
                            <ResumeTop resume = {this.props.state.resume} about = {this.props.state.about}/>
                            <br/>
                            <ResumeSkills skills= {this.props.state.skills}/>
                            <br/>
                            <ResumeProjects projects = {this.props.state.projects}/>
                        </td>
                        <td className="ColumnRight">
                            <ResumeExperience/>
                            <ResumeEducation/>
                            <ResumeCommunity/>
                        </td>
                    </tr>
                </table>
                
            </div>
        )
    }
}

export default Resume

