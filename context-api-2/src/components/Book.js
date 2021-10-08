import React from 'react'

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// https://blog.logrocket.com/guide-to-react-usereducer-hook/

// https://blog.logrocket.com/react-hooks-state-management/
export default function Book({bookName, price, id}) {

    return (
        <div>
            <li key={id}>
               Book Name : {bookName} 
               Book price : {price}
            </li>
          
        </div>
    )
}
