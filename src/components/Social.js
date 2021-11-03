import React from 'react'

const Social = (data) => {
    
    return ( 
        <div>
            
                <p><a href={data.info.git}>Github</a></p>
                <p><a href={data.info.linkedin}>LinkedIn</a></p>
                <p><a href={data.info.blog}>Blog</a></p>
            
        </div>
    )
}

export default Social;
