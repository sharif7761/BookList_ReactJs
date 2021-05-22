import React from 'react';

const Author = () => {
    const author = 'Amelia Hepworth'
    return (
        <h5 style={{color:'#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>{ author.toUpperCase() }</h5>
    );
};

export default Author;