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
                <h2>Resume</h2>
                <table>
                    <tr>
                        <td className="ColumnLeft">
                            <ResumeTop resume = {this.props.state.resume} about = {this.props.state.about}/>
                            
                            <ResumeSkills skills= {this.props.state.skills}/>
                            
                            <ResumeProjects projects = {this.props.state.projects}/>
                        </td>
                        <td width="10vw"></td>
                        <td className="ColumnRight">
                            <ResumeExperience jobs={this.props.state.resume.jobs}/>
                            <ResumeEducation education={this.props.state.resume.education}/>
                            <ResumeCommunity community={this.props.state.resume.community}/>
                        </td>
                    </tr>
                </table>
                
            </div>
        )
    }
}

export default Resume

