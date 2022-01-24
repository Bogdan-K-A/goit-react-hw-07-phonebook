import { createReducer } from '@reduxjs/toolkit'
import {
  addContactSuccess,
  fetchContactSuccess,
  contactDeleteSuccess,
} from './contact-actions'

const contactsReducer = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,

  [addContactSuccess]: (state, { payload }) => [...state, payload],

  [contactDeleteSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
})

export default contactsReducer
