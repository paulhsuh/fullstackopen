import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import People from './components/People'
import PersonForm from './components/PersonForm'

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
