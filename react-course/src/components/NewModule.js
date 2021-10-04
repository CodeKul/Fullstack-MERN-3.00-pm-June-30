import React from 'react'

import image from "../images/image.png"

import "./NewModule.css"

export default function NewModule() {
    return (
        <div className="NewModule">

            <h1 style={{color: "red"}}>React Basics</h1>
            <img src="https://images.unsplash.com/photo-1633295174543-b63811578a94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" alt="" />
       
       <img src={image} alt="" />
        </div>
    )
}
