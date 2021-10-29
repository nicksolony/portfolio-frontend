import React from 'react';

const ResumeEducation = (data) => {

    return (
        <div>
            <h3>Education</h3>
            <table className="innerTable"> 
                {data.education.map(school=>{
                    return <row>
                    <tr>
                        <td className="leftInnerColumn">{school.institution}<br/>
                        {school.field} <br/>
                        </td>
                        
                        <td className="rightInnerColumn">{school.location}<br/>
                        {school.dates} <br/>
                        </td>
                    </tr>
                    </row>
                })}    
            </table>
        </div>
    )

}

export default ResumeEducation;