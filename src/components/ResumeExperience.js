import React from 'react';

const ResumeExperience = (data) => {
    return (
        <div>
            <h3>Experience</h3>
            <table>
                {data.jobs.map(job=>{
                    return <row>
                    <tr>
                        <td className="ColumnLeft">
                            {job.company}<br/>
                            {job.position}

                        </td>
                        <td className="ColumnRight">{job.location}<br/>
                        {job.from} - {job.to}
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2"> 
                        <ul>
                            {job.bullets.map(bullet=>{
                                return <li>
                                    {bullet}
                                </li>
                            })}
                        </ul>
                        </td>
                    </tr>
                    </row>
                })}
            </table>
        </div>
    )

}

export default ResumeExperience;