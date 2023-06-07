import { useState } from 'react'
import Form from './Form'
import Persons from './Persons'
import Notification from './Notification'
import { useEffect } from 'react'
import contactServer from './contactServer'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [notification, setNotification] = useState(null)
  useEffect(()=>{
    contactServer.getAll().then(response => setPersons(response))
  },[])

  function addPerson(event){
    event.preventDefault()
    //if duplicate
    let findDuplicate = persons.filter(person =>{
      return person.name.toLowerCase() === newName.toLowerCase();
    })
    findDuplicate.length?
      updateNumber({name: newName, number: newNumber, id: findDuplicate[0].id})
    :
      contactServer.addNew({name: newName, number: newNumber})
      .then(response => {
        setPersons(persons.concat(response))
        clearInputs();
        notify(`added new contact ${newName}`)
      })
  }

  function removePerson(data){
    if(window.confirm(`Delete ${data.name} ?`)){
      let newPersons = persons.filter(person => person.id !== data.id);
      contactServer
      .deleteContact(data.id)
      .then(()=>{
        setPersons(newPersons)
        notify(`removed ${data.name} from contacts`)
      })
      .catch(err =>{
        notify(`error while removing ${data.name}. Maybe it is already removed?`)
      })
    }
  }

  function updateNumber(data){
    let confirmed = window.confirm(`${data.name} already exists. Do you want to update its number?`);
    if(confirmed){
      let newPersons = persons.map(person => {
        if(person.id === data.id){
          return data
        } else {
          return person
        }
      })
      contactServer
      .updateContact(data)
      .then(() => {
        setPersons(newPersons)
        clearInputs();
      })
    }
  }

  function clearInputs(){
    setNewName("")
    setNewNumber("")
  }

  function notify(message){
    setNotification(message);
    setTimeout(()=>{setNotification(null)}, 5000)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Form  handlers= {{addPerson, newName, setNewName, newNumber, setNewNumber}}></Form>
      <Notification message={notification}></Notification>
      <Persons persons={persons} deleteHandler={removePerson}></Persons>
    </div>
  )
}

export default App