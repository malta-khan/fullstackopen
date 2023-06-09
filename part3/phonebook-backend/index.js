const data = require("./data.json")
const express = require("express")
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
app.get("/info",(request, response)=>{
    let date = new Date()
    let html = `
    <div>Phonebook has info for ${data.length} people.</div>
    <div>${date}</div>`
    response.send(html)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})