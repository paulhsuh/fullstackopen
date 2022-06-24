import { useState } from 'react'

const Button = ({onClick, text}) => (
  <button onClick = {onClick}>
    {text}
  </button>
)

const Display = ({state, text}) => (
  <p>
    {text} {state}
  </p>
)

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
      <h2>Statistics</h2>
      <Display state={good} text="Good:"/>
      <Display state={neutral} text="Neutral:"/>
      <Display state={bad} text = "Bad:"/>
    </div>
  )
}

export default App