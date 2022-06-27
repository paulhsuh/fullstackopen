const Filter = ({newSearch, searchChange}) => {
  return (
    <div>
      Filter by: <input value={newSearch} onChange={searchChange}/>
    </div>
  )
} 

export default Filter