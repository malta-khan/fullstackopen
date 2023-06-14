function Form(props) {
    let {addPerson, newName, setNewName, newNumber, setNewNumber} = props.handlers;
    return (<form onSubmit={addPerson} className="flex flex-col bg-slate-200 p-2 py-6 items-center">
        <div className="flex w-96 mt-3">
            <label className="w-20">name:</label>
            <input className="border border-slate-500 rounded-sm bg-slate-50 p-1 flex-1" value={newName} onChange={(e)=>{setNewName(e.target.value)}}></input>
        </div>
        <div className="flex w-96 mt-3">
            <label className="w-20">number:</label>
            <input className="border border-slate-500 rounded-sm bg-slate-50 p-1 flex-1" value={newNumber} onChange={(e)=>{setNewNumber(e.target.value)}} type='tel'></input>
        </div>
        <div className="flex w-96 mt-3 justify-end">
            <button type="submit" className="bg-green-300 px-3 py-1 rounded-sm border border-green-500">Save</button>
        </div>
    </form>
    );
}

export default Form;