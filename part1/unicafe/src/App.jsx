import { useState } from 'react'

const Button = ({label, clickHandler})=> <button onClick={clickHandler}>{label}</button>
const StatisticsLine = ({label, value})=> <tr><td>{label}</td><td>{value}</td></tr>
const Statistics = ({data})=>{
  if(data.good === 0 && data.neutral === 0 && data.bad === 0){
    return <div>
      <h1>statistics</h1>
      <div>no feedback given</div>
    </div>
  }

  let total = data.good + data.neutral + data.bad;
  let average = ((data.good - data.bad) / total).toFixed(1);
  let positive = (data.good / total * 100).toFixed(1).toString() + "%";
 return <div>
  <h1>statistics</h1>
  <table>
  <StatisticsLine label={"good"} value={data.good}></StatisticsLine>
  <StatisticsLine label={"neutral"} value={data.neutral}></StatisticsLine>
  <StatisticsLine label={"bad"} value={data.bad}></StatisticsLine>
  <StatisticsLine label={"total"} value={total}></StatisticsLine>
  <StatisticsLine label={"average"} value={average}></StatisticsLine>
  <StatisticsLine label={"positive"} value={positive}></StatisticsLine>
  </table>
 </div>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button label={"good"} clickHandler={() => setGood(good+1)}></Button>
        <Button label={"neutral"} clickHandler={() => setNeutral(neutral+1)}></Button>
        <Button label={"bad"} clickHandler={() => setBad(bad+1)}></Button>
      </div>
      <Statistics data = {{good, neutral, bad}}></Statistics>
    </div>
  )
}

export default App