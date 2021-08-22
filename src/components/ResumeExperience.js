import React from 'react';

const ResumeExperience = (data) => {
    return (
        <div>
            <h3>Experience</h3>
            <table>
                {data.jobs.reverse().map(job=>{
                    return <tr>
                        <td className="ColumnLeft">
                            {job.company}<br/>
                            {job.position}
                        </td>
                        <td className="ColumnRight">{job.location}<br/>
                        {job.from} - {job.to}
                        </td>
                    </tr>
                })}
            </table>
        </div>
    )

}

export default ResumeExperience;