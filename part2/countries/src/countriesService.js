import axios from "axios"

let getAll = ()=>{
return axios
.get("https://studies.cs.helsinki.fi/restcountries/api/all")
}

export default {getAll}