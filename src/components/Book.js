import React from 'react';
import Image from "./Image";
import Title from "./Title";
import Author from "./Author";

const Book = ({img, title, author}) => {
    // const {img, title, author} = props
    return (
        <article className='book'>
            <Image img={img} />
            <Title title={title} />
            <Author author={author} />
        </article>
    );
};

export default Book;