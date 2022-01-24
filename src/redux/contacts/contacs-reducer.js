import { createReducer } from '@reduxjs/toolkit'
import {
  addContactSuccess,
  fetchContactSuccess,
  contactDelete,
} from './contact-actions'
// import shortid from 'shortid'

// const contacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ]

const contactsReducer = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,

  [addContactSuccess]: (state, { payload }) => {
    // return [...state, payload]
    const reLockInput = state.find((contact) => contact.name === payload.name)

    if (reLockInput) {
      alert('Такой контакт уже есть в списке')
      return state
    } else {
      return [...state, payload]
    }
  },
  [contactDelete]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
})

export default contactsReducer
