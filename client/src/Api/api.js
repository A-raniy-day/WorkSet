//import axios from "axios";
const search = async q => {
    const res = await fetch(`http://localhost:3001/search?q=${q}`)
    console.log(res)
    const response = await res
    return response.data
}

module.exports.search = search