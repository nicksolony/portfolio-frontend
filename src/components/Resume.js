import React, {Component} from 'react'
import ResumeTop from './ResumeTop'
import ResumeSkills from './ResumeSkills'
import ResumeProjects from './ResumeProjects'
import ResumeExperience from './ResumeExperience'
import ResumeEducation from './ResumeEducation'
import ResumeCommunity from './ResumeCommunity'


class Resume extends Component {
    render() {
        return ( 
            <div id='Resume'>
                <h2>RESUME</h2>
                <table>
                    <tr>
                        <td className="ColumnLeft">
                            <ResumeTop/>
                            <ResumeSkills/>
                            <ResumeProjects/>
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

