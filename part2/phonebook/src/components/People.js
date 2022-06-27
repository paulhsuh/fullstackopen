const People = ({persons, newSearch, removePerson}) => {
  const displayNumbers = () => {
    const filteredPersons = persons.filter( (person) => {
      let name = person.name.toLowerCase()
      let search = newSearch.toLowerCase()
      return name.includes(search)
    })
    return filteredPersons.map( (person) => (
    <div key={person.name}>
      {person.name} {person.number} <button onClick={() => removePerson(person)}>Delete</button>
    </div>)
  )}


  return (
    <div>
      <h2> Numbers </h2>
      {displayNumbers()}
    </div>
  )
}

export default People