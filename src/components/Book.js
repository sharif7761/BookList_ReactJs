import React from 'react';
import Image from "./Image";
import Title from "./Title";
import Author from "./Author";

const Book = ({img, title, author, children}) => {
    // const {img, title, author} = props
    return (
        <article className='book'>
            <Image img={img} />
            <Title title={title} />
            <Author author={author} />
            {children}
        </article>
    );
};

export default Book;