import axios from "axios";
const baseUrl = "/api/persons";

function getAll(){
    return axios.get(baseUrl)
    .then(response => response.data)
}
function addNew(person){
   return axios.post(baseUrl, person)
    .then(response => response.data)
}
function deleteContact(id){
   return axios.delete(`${baseUrl}/${id}`)
}
function updateContact(data){
   return axios.put(`${baseUrl}/${data.id}`, data)
    .then(response => response.data)
}
export default {getAll, addNew, deleteContact, updateContact}