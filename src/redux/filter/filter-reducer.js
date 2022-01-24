import { contactsFilter } from '../filter/filter-actions'
import { createReducer } from '@reduxjs/toolkit'

const filterReducer = createReducer('', {
  [contactsFilter]: (state, { payload }) => (state = payload),
})

export default filterReducer
