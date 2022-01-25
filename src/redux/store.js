import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { filterReducer } from '../redux/filter/filter-reducer'
import { contactsReducer, loading } from '../redux/contacts/contacs-reducer'

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loading: loading,
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
})
