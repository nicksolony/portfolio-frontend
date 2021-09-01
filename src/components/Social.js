import React from 'react'

const Social = (data) => {
    
    return ( 
        <div>
            <ul>
                <li><a href={data.info.git}>Github</a></li>
                <li><a href={data.info.linkedin}>LinkedIn</a></li>
                <li><a href={data.info.blog}>Blog</a></li>
            </ul>
        </div>
    )
}

export default Social;
