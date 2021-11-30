import React from 'react';
import { Link } from 'react-router-dom';

const ManagementApp = () => {
    return (
        <div>
            <div className='text-white' >
                <div>

                    <div>
                        <img />
                    </div>
                    <div>
                        description
                    </div>

                </div>
            </div>
            <button className='text-white'><Link to="/">Home</Link></button>
        </div>
    );
};

export default ManagementApp;