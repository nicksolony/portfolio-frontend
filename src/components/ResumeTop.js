import React from 'react';

const ResumeTop = (data) => {

    return (
        <div>
            {data.resume.name} <br />
            {data.resume.address} | {data.resume.phone} | <a href=`mailto:${data.resume.email}`>{data.resume.email}</a>
        </div>
    )

}

export default ResumeTop;