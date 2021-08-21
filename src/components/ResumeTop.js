import React from 'react';

const ResumeTop = (data) => {

    return (
        <div>
            {data.resume.name} <br />
            {data.resume.address} | {data.resume.phone} | <a href={`mailto:${data.resume.email}`}>{data.resume.email}</a> | <a href={data.resume.git}>Github</a> | <a href={data.resume.linkedin}>LinkedIn</a> | <a href={data.resume.blog}>Blog</a>
            <br/>
            <br/>
            <p>{data.about}</p>
        </div>
    )

}

export default ResumeTop;