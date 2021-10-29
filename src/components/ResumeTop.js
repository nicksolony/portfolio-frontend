import React from 'react';

const ResumeTop = (data) => {

    return (
        <div>
            {data.resume.name} <br />
            {data.resume.address} | {data.resume.phone} | <a href={`mailto:${data.resume.email}`}>{data.resume.email}</a> | <a href={data.resume.git} target="_blank" rel="noopener noreferrer" >Github</a> | <a href={data.resume.linkedin} target="_blank" rel="noopener noreferrer" >LinkedIn</a> | <a href={data.resume.blog} target="_blank" rel="noopener noreferrer">Blog</a>
            <br/>
            
            <p>{data.about}</p>
        </div>
    )

}

export default ResumeTop;