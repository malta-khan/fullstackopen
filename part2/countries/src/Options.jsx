function Options({data, query, updateDetails}) {

  let filteredData = data.filter((country)=>{
    if(query === ""){
      return false
    }
    return country.name.common.toLowerCase().includes(query.toLowerCase())
  })
  let message = ""
  if(query === ""){
    message = "Type Something"
  } else if (query !== "" && filteredData.length>10){
    message = "Too many results, keep typing"
    filteredData = [];
  } else if (query !== "" && filteredData.length===0){
    message = `No results for '${query}', try something else`
  }

  return <div>
    <div>{message}</div>
    <table>
      <tbody>
    {filteredData.map((country=>{
      return <tr key={country.name.common}>
      <td>{country.name.common}</td>
        <td>
          <button onClick={()=>{updateDetails(country)}}>Show</button>
        </td>
      </tr>
    }))}
      </tbody>
    </table>
  </div>;
}

export default Options;