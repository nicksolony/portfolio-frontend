import React from 'react';

const ResumeEducation = (data) => {

    return (
        <div>
            <h3>Education</h3>
            <table>
                {data.education.map(school=>{
                    return <row>
                    <tr>
                        <td className="ColumnLeft">{school.institution}<br/>
                        {school.field} <br/>
                        </td>
                        
                        <td className="ColumnRight">{school.location}<br/>
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