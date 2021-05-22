import React from 'react';

const Author = ({author}) => {
    // const {author} = props
    return (
        <h5 style={{color:'#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>{ author }</h5>
    );
};

export default Author;