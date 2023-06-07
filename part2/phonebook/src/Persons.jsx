import { useState } from "react";

function Person({data, deleteHandler}){
    return <div>{data.name} {data.number} <button onClick={()=>{deleteHandler(data)}}>Delete</button></div>
}

function Persons({persons, deleteHandler}) {
    const [filterString, setFilterString] = useState("");
    let contactsToShow = persons.filter(person=>{
        return person.name.toLowerCase().includes(filterString.toLowerCase());
    })
    return (<div>
        <h2>Numbers</h2>
        Search: <input value={filterString} onChange={(e)=>{setFilterString(e.target.value)}}></input>
        <div>
            {contactsToShow.map(person => <Person data={person} deleteHandler={deleteHandler} key={person.id}></Person>)}
            {contactsToShow.length === 0 && filterString !== "" && <div>no contacts found with filter "{filterString}"</div>}
            {contactsToShow.length === 0 && filterString === "" && <div>empty phone book</div>}
        </div>
    </div>);
}

export default Persons;