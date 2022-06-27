import axios from 'axios'
import {useState, useEffect} from 'react'

function Country( {countryInfo} ) {
  return (
    <div>
      <h1>{countryInfo.name.common}</h1>
      <p>Capital: {countryInfo.capital}</p>
      <p>Area: {countryInfo.area}</p>
      <h3>Languages</h3>
      <ul>
        {Object.values(countryInfo.languages).map( (language, idx) => (
          <li key = {idx}>
            {language}
          </li>
        ))}
      </ul>
      <div>
        {countryInfo.flag}
      </div>
    </div>
  )
}

function Countries({filteredCountries, displayCountry, setDisplayCountry}) {

  // const countryMatch = (country) => {
  //   if (search === '') return false;

  //   const countryName = country.name.common.toLowerCase()
  //   const filter = search.toLowerCase()

  //   return countryName.includes(filter)
  // }

  // const queriedCountries = (allCountries.filter( country => {
  //   return countryMatch(country)
  // }))

  const content = () => {
    if (filteredCountries.length > 10) {
      return "Too many matches, specify another filter"
    }
    else if (displayCountry.name) {
      return <Country countryInfo = {displayCountry} />
    }
    else if (filteredCountries.length === 1){
      return <Country countryInfo={filteredCountries[0]} />
    }
    else if (filteredCountries.length !== 1) {
      return (<ul> {filteredCountries.map( country => (
        <li key = {country.name.official}>
          {country.name.common}
          <button onClick={() => setDisplayCountry(country)}>View</button>
        </li>) )}
      </ul>)
      }
    }

  return (
    <div>
      {content()}
    </div>
  )
}

function Search({search, handleSearchChange}) {
  return (
    <div>
      Find countries: <input value={search} onChange={handleSearchChange}/>
    </div>
  )
}

function App() {
  const [search, setSearch] = useState('')
  const [allCountries, setAllCountries] = useState([])
  const [displayCountry, setDisplayCountry] = useState({})
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect( () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then( (response) => {
        setAllCountries(response.data)
      })
  } , [] )

  const countryMatch = (country, search) => {
    if (search === '') return false;

    const countryName = country.name.common.toLowerCase()
    const searchName = search.toLowerCase()

    return countryName.includes(searchName)
  }

  const filterCountries = search => (allCountries.filter( country => {
    return countryMatch(country, search)
  }))


  const handleSearchChange = (event) => {
    setSearch(event.target.value)
    setFilteredCountries(filterCountries(event.target.value))
    setDisplayCountry({})
  }
  
  return (
    <div>
      <Search search={search} handleSearchChange={handleSearchChange} />
      <Countries filteredCountries={filteredCountries} displayCountry={displayCountry} setDisplayCountry={setDisplayCountry}/>
    </div>
  );
}

export default App;
