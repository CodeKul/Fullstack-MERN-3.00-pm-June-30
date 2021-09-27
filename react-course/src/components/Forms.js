import React, { useState } from 'react'

export default function Forms() {
    const [data, setData] = useState()


  //  https://blog.logrocket.com/forms-in-react-in-2020/

    function handleChange(e) {
       setData(...data, [e.target.name]= e.target.value);

    }
    return (
        <div>
            <form action="">

                <input onChange={handleChange} value="fname" name="fname" type="text" />

                {fname}
            </form>
        </div>
    )
}
