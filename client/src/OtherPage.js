import React from 'react';
import { Link } from 'react-router-dom';

export default() => {
    return (
        <div>
            In some other page!
            <Link to='/'>Got back home</Link>
        </div>
    );
};