import React, { useContext, useState } from 'react'
import { BookContext } from './BookContext'

export default function AddNewBook() {
    const [books, setBooks] = useContext(BookContext)

    const [bookName, setBookName]= useState("")
    const [price, setPrice] = useState("")


    const addBook = () => {
        setBooks((prev) => [...prev, {bookName: bookName, price:price}])
    }

    return (
        <div>
            

            <input 
            type="text"
            placeholder="Book Name"
            value={bookName} 
            onChange={(e) => setBookName(e.target.value)}/>

<input 
            type="text"
            placeholder="Book Price"
            value={price} 
            onChange={(e) => setPrice(e.target.value)}/>

            <button onClick={addBook}>Add Book</button>



        </div>
    )
}
