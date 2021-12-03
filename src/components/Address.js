import React from 'react';

const Address = (data) => {
    
    return ( 
        <div>
            <p>{data.info.name}</p>
            <p>{data.info.address}</p>
            <p>{data.info.phone}</p>
            <p><a href={`mailto:${data.info.email}`}>{data.info.email}</a></p>
        </div>
    )
}
    
export default Address;