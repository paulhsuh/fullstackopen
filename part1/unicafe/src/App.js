import { useState } from 'react'

const Button = ({onClick, text}) => (
  <button onClick = {onClick}>
    {text}
  </button>
)

const StatisticLine = ({label, content}) => {
  if (label==="Positive:"){
    return <tr>
      <td> {label} </td> 
      <td> {content} % </td>
    </tr>
  }
  return <tr>
    <td> {label} </td> 
    <td> {content} </td>
  </tr>
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  let body;
  if (good === 0 && neutral === 0 && bad===0){
    body = <p>No feedback given</p>
  }
  else {
    body =<table>
      <tbody>
        <StatisticLine content={good} label="Good:"/>
        <StatisticLine content={neutral} label="Neutral:"/>
        <StatisticLine content={bad} label = "Bad:"/>
        <StatisticLine label ="Average:" content={(total) / 3}/>
        <StatisticLine label="Total:" content={total}/>
        <StatisticLine label="Positive:" content={total ? good/total : "Not available"}/>
      </tbody>
    </table>
  }
  return <div>
    <h2>Statistics</h2>
    {body}
  </div>
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addOne = (update, state) => {
    return () => update(state+1)
  }

  const addGood = addOne(setGood, good)
  const addNeutral = addOne(setNeutral, neutral)
  const addBad = addOne(setBad, bad)
  
  return (
    <div>
      <h1>Please leave feedback!</h1>
      <Button onClick={addGood} text="Good"/>
      <Button onClick = {addNeutral} text="Neutral"/>
      <Button onClick = {addBad} text="Bad"/>
      <Statistics good={good} neutral={neutral} bad={bad} />
      
    </div>
  )
}

export default App