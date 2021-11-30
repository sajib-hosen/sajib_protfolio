import React from 'react';
import { Link } from 'react-router-dom';

const Honda = () => {
    return (
        <div>
            <p>This is honda</p>
            <button className='text-white'><Link to="/">Home</Link></button>
        </div>
    );
};

export default Honda;