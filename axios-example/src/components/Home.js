import http from '../service/Http-common'
import React, { useEffect, useState } from 'react'
import apiCalls from '../service/api-calls'

export default function Home() {


    // console.log(http.get("/users"))

//     http.get("/users").then((response)=>{
// console.log(response.data)
//     })

let [data, setData]= useState()

useEffect(() => {
    apiCalls.getAlbums()
    
   
}, [data])


    return (
        <div>
            
        </div>
    )
}
