import http from "./Http-common";

// http.get("/courses")
// .then((response)=>{
//     console.log(response)
// })


const getUsers = () =>{
    return http.get("/users")
    
}


const getAlbums = () =>{
    return http.get("/albums")
    
}


const getPhotos = () =>{
    return http.get("/photos")
    
}

const getComments = () =>{
    return http.get("/comments")
    
}


let apiCalls = {
    getUsers, getAlbums, getComments, getPhotos
}


export default apiCalls;
