import { createAction } from '@reduxjs/toolkit'

// import shortid from 'shortid'

export const fetchContactRequest = createAction('contacts/fetchContactRequest')
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess')
export const fetchContactError = createAction('contacts/fetchContactError')

export const addContactRequest = createAction('contacts/addContactRequest')
export const addContactSuccess = createAction('contacts/addContactSuccess')
export const addContactError = createAction('contacts/addContactError')

// export const addContact = createAction(ADD, (name, number) => ({
//   payload: {
//     name,
//     number,
//     id: shortid.generate(),
//   },
// }))

export const contactDelete = createAction('contactDelete')

export const getContactFromLocaleStorage = createAction('getContacts')
