import React from 'react';

const ResumeSkills = (data) => {

    return (
        <div>
            <h3>Technical Skills</h3>
            {data.skills.join(", ")}
        </div>
    )

}

export default ResumeSkills;