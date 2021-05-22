import React from 'react';

const Image = (props) => {
    const {img} = props
    return (
        <img src={img} alt='book'/>
    );
};

export default Image;