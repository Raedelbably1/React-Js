import React from 'react';

const DataElement = ({ img, name, phone, email, position, }) => (
    <div style={{ textAlign: 'center', margin: '10px', flex: '1 0 200px', backgroundColor: 'black', color:'white' }}>
        <img src={img} alt={name} style={{ width: '150px', height: '150px' }} />
        <div style={{ marginTop: '10px' }}>
            <h2>{name}</h2>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>position:{position}</p>
        </div>
    </div>
);

export default DataElement;



