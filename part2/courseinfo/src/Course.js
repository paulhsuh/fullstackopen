const Header = ({name}) => <h2>{name}</h2>

const Part = ({name, exercises}) => {
  return <p> {name} {exercises} </p>
}

const Content = ({parts}) => {
  return (<>
    {parts.map( (part) => <Part key = {part.id} name={part.name} exercises={part.exercises}/>) }
  </>)
}

const Total = ({parts}) => {
  const total = parts.reduce((accum,part) => accum+part.exercises, 0)
  return (<p>
    <strong>total of {total} exercises</strong>
  </p>)
}

const Course = ({name, parts}) => {
  return <>
    <Header name = {name}/>
    <Content parts = {parts}/>
    <Total parts = {parts}/>
  </>
}

export default Course