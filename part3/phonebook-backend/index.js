let data = require("./data.json")
const express = require("express")
const uniqid = require("uniqid")
const app = express()

app.get("/",(request, response)=>{
    let html = `
    <div>Nothing much on this page, here are some links to other pages</div>
    <div><a href="/info">/info</a></div>
    <div><a href="/api/persons">/api/persons</a></div>`
    response.send(html)
})

app.get("/api/persons",(request, response)=>{
    response.send(data)
})

app.use(express.json())
app.post("/api/persons",(request, response)=>{
    let newPerson = request.body;
    newPerson.id = uniqid()
    data = data.concat(newPerson)
    response.end()
})

app.get("/api/persons/:id",(request, response)=>{
    let {id} = request.params;
    let person = data.find(person=> person.id.toString() === id.toString())
    if(person){
        response.send(person)
    }else{
        response.statusMessage = "Invalid ID";
        response.status(404).end("404 Invalid ID")
    }
})

app.delete("/api/persons/:id",(request, response)=>{
    let {id} = request.params;
    data = data.filter(person=> person.id.toString() !== id.toString())
    response.status(204).end()
})

app.get("/info",(request, response)=>{
    let date = new Date()
    let html = `
    <div>Phonebook has info for ${data.length} people.</div>
    <div>${date}</div>`
    response.send(html)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`)
})