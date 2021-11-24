import axios from "axios";

export default axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    // headers: "Access-Control-Allow-Origin: *"

})

