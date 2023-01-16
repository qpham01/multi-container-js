import React from 'react';
import { Link } from 'react-router-dom';

const show = () => {
    return (
        <div>
            In some other page!
            <Link to='/'>Got back home</Link>
        </div>
    );
};

export default show;
