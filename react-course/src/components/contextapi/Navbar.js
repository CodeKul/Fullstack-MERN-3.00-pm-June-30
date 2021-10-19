import React, { useContext } from 'react'
import { BookContext } from './BookContext'

export default function Navbar() {
    const [books, setBooks] = useContext(BookContext)
    return (
        <div>
            <nav 
            style={{
                height: "40px",
                backgroundColor: "black",
                color: "white",
                textAlign: "center",
                marginBottom: "20px"
            }}>
                Books: {books.length}
            </nav>
        </div>
    )
}
