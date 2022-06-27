import { useState, useEffect } from 'react'
import axios from 'axios'


const People = ({persons, newSearch}) => {
  const displayNumbers = () => {
    const filteredPersons = persons.filter( (person) => {
      let name = person.name.toLowerCase()
      let search = newSearch.toLowerCase()
      return name.includes(search)
    })
    return filteredPersons.map( (person) => (
    <div key={person.name}>
      {person.name} {person.number}
    </div>)
  )}


  return (
    <div>
      <h2> Numbers </h2>
      {displayNumbers()}
    </div>
  )
}

const Filter = ({newSearch, searchChange}) => {
  return (
    <div>
      Filter by: <input value={newSearch} onChange={searchChange}/>
    </div>
  )
} 

const PersonForm = ({addPerson, newName, nameChange, newNumber, numberChange}) => {
  return (
  <form onSubmit={addPerson}>
    <h2>Add new person</h2>
    <div>
      name: <input value={newName} onChange={nameChange}/>
    </div>
    <div>
      number: <input value={newNumber} onChange={numberChange}/>
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  useEffect( () => {
    axios
      .get('http://localhost:3001/persons')
      .then( response => {
      setPersons(response.data)
    })
  }, [])

  const nameChange = (event) => {
    setNewName(event.target.value)
  }

  const personExists = () => (
    persons.find( (person) => person.name === newName)
  )

  const addPerson = (event) => {
    event.preventDefault()
    if (personExists()) {
      alert(`${newName} is already added to phonebook.`)
    }
    else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
  }

  const numberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const searchChange = (event) => {
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter newSearch = {newSearch} searchChange={searchChange}/>
      <PersonForm addPerson = {addPerson} newName={newName} nameChange={nameChange} newNumber={newNumber} numberChange={numberChange} />
      <People persons={persons} newSearch={newSearch}/>
    </div>
  )
}

export default App
