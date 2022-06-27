import axios from 'axios'

const baseURL = 'http://localhost:3001/persons'

const getAll = () => (
  axios
  .get(baseURL)
  .then( response => response.data)
)

const add = () => (
  axios
    .post(baseURL)
    .then(response => response.data)
)

export default {
  getAll,
  add
}