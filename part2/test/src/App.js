import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShow] = useState(true)

  const notesToShow = showAll ? notes : notes.filter( (note) => note.important)

  const addNote = (event) => {
    event.preventDefault()
    console.log("button clicked", event.target)
    const noteObject = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 5
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }
  
  const handleChange = (event) => {
    console.log("input changed", event.target.value)
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map(note => <Note key={note.id} content={note.content}/>)}
      </ul>
      <div>
        <button onClick = { () => setShow(!showAll)}> Show {showAll ? "important" : "all"}</button>
      </div>
      <form onSubmit={addNote}>
        <input value = {newNote} onChange={handleChange}/>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default App
