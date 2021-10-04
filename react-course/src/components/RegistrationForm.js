import React, { useState } from 'react'

export default function RegistrationForm() {
    const [user, setUser] = useState(
        {
            firstName: "",
            lastName: "",
            gender: "",
            city: "",
            isActive: false,
            message: ""
        }
    )


    const handleChange = (e) => {
        //setUser({...user, [e.target.name]:e.target.value})
        console.log(user)
        // rest and spread parameters
        setUser({...user, [e.target.name]: e.target.type === "checkbox" ? e.target.checked: e.target.value})
    }

    console.log(user)
    return (
        <div>
            <input onChange={handleChange} name="firstName" value={user.firstName} placeholder="firstname" type="text" />
            <input onChange={handleChange} name="lastName" value={user.lastName} placeholder="lastname" type="text" />

            <select onChange={handleChange} name="city" id="city" value={user.city}>
                <option value="pune">Pune</option>
                <option value="mumbai">Mumbai</option>
                <option value="banglore">Banglore</option>
                <option value="delhi">Delhi</option>
            </select>


<label htmlFor="gender">Gender</label>
            <input onChange={handleChange} value="male" type="radio" name="gender"  />
            <label htmlFor="">Male</label>
            <input onChange={handleChange} value="female" type="radio" name="gender" id="" />
            <label htmlFor="">Female</label>

            <input onChange={handleChange} type="checkbox" name="isActive" checked={user.isActive} value={true} />



            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.city}</p>

        </div>
    )
}
