import React from 'react';

const Address = (data) => {
    
    return ( 
        <div>
            {data.info.name}<br/>
            {data.info.address}<br/>
            {data.info.phone}<br/>
            <a href={`mailto:${data.info.email}`}>{data.info.email}</a>
        </div>
    )
}
    
export default Address;