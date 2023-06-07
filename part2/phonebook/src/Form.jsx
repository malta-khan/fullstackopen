function Form(props) {
    let {addPerson, newName, setNewName, newNumber, setNewNumber} = props.handlers;
    return (<form onSubmit={addPerson}>
        <div>
            name: <input value={newName} onChange={(e)=>{setNewName(e.target.value)}}></input>
        </div>
        <div>
            number: <input value={newNumber} onChange={(e)=>{setNewNumber(e.target.value)}} type='tel'></input>
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>
    );
}

export default Form;