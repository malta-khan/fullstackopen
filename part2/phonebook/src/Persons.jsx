import { useState } from "react";

function Person({data, deleteHandler}){
    return <tr className="bg-slate-50">
        <td className="border border-slate-200 p-1 text-slate-800">{data.name}</td>
        <td className="border border-slate-200 p-1 text-slate-800">{data.number}</td>
        <td className="border border-slate-200 p-1 text-red-800"><button onClick={()=>{deleteHandler(data)}}>Delete</button></td>
        </tr>
}

function Persons({persons, deleteHandler}) {
    const [filterString, setFilterString] = useState("");
    let contactsToShow = persons.filter(person=>{
        return person.name.toLowerCase().includes(filterString.toLowerCase());
    })
    return (<div className="p-4 mt-6">
        <div className="flex justify-between items-end">
        <h2 className="font-semibold text-xl text-slate-700">Contacts in database</h2>
        <input className="border border-slate-400 rounded-sm bg-slate-50 p-1 w-56" placeholder="Type here to search" value={filterString} onChange={(e)=>{setFilterString(e.target.value)}}></input>
        </div>
        <table className="w-full mt-6">
            <tbody>
            {contactsToShow.map(person => <Person data={person} deleteHandler={deleteHandler} key={person.id}></Person>)}
            {contactsToShow.length === 0 && filterString !== "" && <tr><td>no contacts found with filter "{filterString}"</td></tr>}
            {contactsToShow.length === 0 && filterString === "" && <tr><td>empty phone book</td></tr>}
            </tbody>
        </table>
    </div>);
}

export default Persons;