function Details({data}) {
    if(data){
    return ( <table style={{paddingTop:100}}>
      <tbody>
        <tr>
          <th>Common Name</th>
          <td>{data.name.common}</td>
        </tr>
        <tr>
          <th>Official Name</th>
          <td>{data.name.official}</td>
        </tr>
        <tr>
          <th>Capital</th>
          <td>{data.capital}</td>
        </tr>
        <tr>
          <th>Area</th>
          <td>{data.area} Km²</td>
        </tr>
        <tr>
          <th>Languages</th>
          <td>
          <ul>
            {Object.values(data.languages).map((language)=>{
              return <li key={language}>{language}</li>
              })}
          </ul>
          </td>
        </tr>
        <tr>
          <th>Flag</th>
          <td><img src={data.flags.png}></img></td>
        </tr>
      </tbody>
    </table> );
  }
}

export default Details;