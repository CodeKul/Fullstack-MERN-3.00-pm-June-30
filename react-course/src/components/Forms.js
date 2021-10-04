import React, { useState } from 'react'

export default function Forms() {
    const [firstName, setFirstName] = useState("")

    const [lastName, setLastName] = useState("")


  //  https://blog.logrocket.com/forms-in-react-in-2020/

    function handleChange(e) {
    //    setData(...data, [e.target.name]= e.target.value);
    setFirstName(e.target.value)

    }


    function handleLastName(e) {
        //    setData(...data, [e.target.name]= e.target.value);
        setLastName(e.target.value)
    
        }
    return (
        <div>
            <form action="">

                <input onChange={handleChange} value={firstName} name="firstName" type="text" />

                <input onChange={handleLastName} value={lastName} name="lastName" type="text" />

                {firstName} 
                {lastName}
            </form>
        </div>
    )
}
