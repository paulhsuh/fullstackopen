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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <div>
    <h1> Web Development Curriculum </h1>
    {courses.map( (course) => <Course key = 
    {course.id} name = {course.name} parts = {course.parts}/>)}
  </div>
}

export default App