import React, { useContext } from 'react'
import Book from './Book';
import { BookContext } from './BookContext'

export default function BookList() {
    const [books, setBooks] = useContext(BookContext);
    return (
        <div>
            {books && books.map((book, id) => {
                console.log(books);

                return(
                    <Book bookName={book.bookName} price={book.price}/>
                )
                
            })}
        </div>
    )
}
