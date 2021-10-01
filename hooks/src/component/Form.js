import React, { useState } from "react";

export default function Form() {

//   const [data, setData] = useState({
//       fname: "",
//       email: ""
//   });


let initialData = {
    fname: "",
    email: "",
    gender: ""
}
  const [data, setData] = useState(initialData)

  const handleChange = (e) => {
    setData({...data,
         [e.target.name]: e.target.value });
   
  };

  return (
    <div>
      <form action="">
        <input name="fname" value={data.fname} onChange={handleChange} type="text" />

        <input name="email" value={data.email} onChange={handleChange} type="email" />

        <label htmlFor="">Gender</label>

        <input type="radio" name="gender" checked={data.gender === "male"} value="male" id="male" />
        <label htmlFor="">Male</label>


        <input type="radio" name="gender"  checked={data.gender === "female"} value="female" id="female" />
        <label htmlFor="">Female</label>

{console.log(data)}
        

        <input type="submit" />
      </form>
    </div>
  );
}
