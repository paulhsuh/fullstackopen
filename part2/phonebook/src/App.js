import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import People from './components/People'
import PersonForm from './components/PersonForm'
import peopleServices from './services/people'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  useEffect( () => {
    peopleServices
      .getAll()
      .then( data => {
      setPersons(data)
    })
  }, [])

  const nameChange = (event) => {
    setNewName(event.target.value)
  }

  const personExists = () => (
    persons.find( (person) => person.name === newName)
  )

  const addNewPerson = () => {
    const newPerson = {
      name: newName,
      number: newNumber
    }
    peopleServices
      .add(newPerson)
      .then( (data) => {
        setPersons(persons.concat(data))
        setNewName('')
        setNewNumber('')
      })
  }

  const updatePerson = (person) => {
    const updatedPerson = { ...person, number: newNumber}
    peopleServices
      .update(person.id, updatedPerson)
      .then ( (data) => {
        setPersons(persons.map( (person) => person.name === data.name ? data : person))
        setNewName('')
        setNewNumber('')
      })
  }

  const addPerson = (event) => {
    event.preventDefault()
    const searchedPerson = personExists()
    if (searchedPerson) {
      const confirmed = window.confirm(`${searchedPerson.name} is already added to the phonebook, replace the old number with a new one?`)
      if (confirmed) {
        updatePerson(searchedPerson)
      }
    }
    else {
      addNewPerson()
    }
  }

  const removePerson = (person) => {
    const id = person.id
    if (window.confirm(`Delete ${person.name}?`)) {
      peopleServices
        .remove(id)
        .then (() => {
          setPersons(persons.filter( (person) => person.id !== id))
        })
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
      <People persons={persons} newSearch={newSearch} removePerson={removePerson}/>
    </div>
  )
}

export default App
