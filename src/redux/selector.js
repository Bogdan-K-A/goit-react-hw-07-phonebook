export const getContacts = (state) => state.contacts
// export const Filter = (state) => state.filter

export const getVisibleContacts = (state) => {
  const contacts = state.contacts
  const filter = state.filter

  const normalizedFilter = filter.toLowerCase()
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter),
  )
}
