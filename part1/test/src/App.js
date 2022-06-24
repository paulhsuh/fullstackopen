import { useState } from 'react'

const History = ({allClicks}) => {
  debugger
  let output;
  if (allClicks.length === 0) {
    output = <div>
      Click the buttons to start
    </div>
  }
  else {
    output = <div>
      Current history: {allClicks.join(' ')}
    </div>
  }
  debugger
  return output;
}

const Button = ({onClick, text}) => {
  return (
    <button onClick = {onClick}>
      {text}
    </button>
  )
}

const Display = ({counter}) => {
  return (
    <div>{counter}</div>
  )
}

const App = () => {
  const [ left, setLeft ] = useState(0)
  const [ right, setRight ] = useState(0)
  const [ allClicks, setAll ] = useState([])


  const clickLeft = () => {
    setLeft(left + 1)
    setAll(allClicks.concat('L'))
  }
  const clickRight = () => {
    setRight(right + 1)
    setAll(allClicks.concat('R'))
  }
  
  return (
    <div>
      <Display counter={left}/>
      <Button onClick={clickLeft} text="Left"/>
      <Display counter={right}/>
      <Button onClick={clickRight} text="Right"/>
      <History allClicks={allClicks}/>
    </div>
  )
}

export default App