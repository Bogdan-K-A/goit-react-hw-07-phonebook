import axios from 'axios'
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  contactDeleteRequest,
  contactDeleteSuccess,
  contactDeleteError,
} from './contact-actions'

axios.defaults.baseURL = 'https://61ec322ef3011500174d20fc.mockapi.io'

export const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactRequest())

  return axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch((error) => dispatch(fetchContactError(error)))
}

export const addContact = (name, number) => (dispatch) => {
  const contact = {
    name,
    number,
  }

  dispatch(addContactRequest())

  return axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error)))
}

export const contactDelete = (comtactId) => (dispatch) => {
  dispatch(contactDeleteRequest())

  return axios
    .delete(`/contacts/${comtactId}`)
    .then(() => dispatch(contactDeleteSuccess(comtactId)))
    .catch((error) => dispatch(contactDeleteError(error)))
}
