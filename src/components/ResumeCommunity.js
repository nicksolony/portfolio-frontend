import React from 'react';

const ResumeCommunity = (data) => {

    return (
        <div>
            <h3>COMMUNITY ENGAGEMENT</h3>
            <ul>
                {data.community.map(entity=>{
                    return <li> {entity} </li>
                })}
            </ul>
        </div>
    )

}

export default ResumeCommunity;