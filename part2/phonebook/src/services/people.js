import axios from 'axios'

const baseURL = '/api/persons'

const getAll = () => (
  axios
  .get(baseURL)
  .then( response => response.data)
)

const add = (newObject) => (
  axios
    .post(baseURL, newObject)
    .then(response => response.data)
)

const remove = (id) => (
  axios
    .delete(`${baseURL}/${id}`)
)

const update = (id, newObject) => (
  axios
    .put(`${baseURL}/${id}`, newObject)
    .then(response => response.data)
)

export default {
  getAll,
  add,
  remove,
  update
}