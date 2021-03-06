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

export default PersonForm