import { useEffect } from "react"
import countries from "./countriesService"
import { useState } from "react"
import Options from "./Options"
import Details from "./Details"
const App = () => {
  let [countriesData, setCountriesData] = useState(null)
  let [searchValue, SetSearchValue] = useState("")
  let [countryDetails, setCountryDetails] = useState(null);
  useEffect(()=>{
    countries
    .getAll()
    .then(result=>{
      setCountriesData(result.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  if(countriesData){
    return <div>
    <input value={searchValue} onChange={(e)=>{SetSearchValue(e.target.value)}}></input>
    <Options query={searchValue} data={countriesData} updateDetails={setCountryDetails}></Options>
    <Details data={countryDetails}></Details>
    </div>
  }
  return <div>Connecting to api...</div>

}

export default App