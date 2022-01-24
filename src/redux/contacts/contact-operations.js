import axios from 'axios'
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from './contact-actions'
axios.defaults.baseURL = 'https://61ec322ef3011500174d20fc.mockapi.io'
// axios.defaults.baseURL = 'https:// http://localhost:3030'

const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactRequest())

  return axios
    .get('/contacts')
    .then(({ data }) => {
      console.log(data)
      return dispatch(fetchContactSuccess(data))
    })
    .catch((error) => dispatch(fetchContactError(error)))
}

const addContact = (name, number) => (dispatch) => {
  const contact = {
    name,
    number,
  }
  // console.log(contact)
  dispatch(addContactRequest())

  return axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error)))
}

export default {
  addContact,
  fetchContacts,
}
