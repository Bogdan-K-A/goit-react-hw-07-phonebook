import { useDispatch, useSelector } from 'react-redux'
import { ContactElem } from '../ContactElem/ContactElem'
import s from '../ContactElem/ContactElem.module.css'
import { contactDelete } from '../../redux/contacts/contact-actions'
import { getContacts, getFilter } from '../../redux/selector'

const ContactList = () => {
  const contacts = useSelector(getContacts)
  const filter = useSelector(getFilter)
  const dispatch = useDispatch()
  const onContactDelete = (id) => dispatch(contactDelete(id))
  // console.log(contacts)
  // console.log(filter)

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase()
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter),
    )
  }

  const visibleContacts = getVisibleContacts()

  return (
    <>
      <ul>
        {visibleContacts.map(({ id, name, number }) => (
          <li className={s.contactItem} key={id}>
            <ContactElem
              name={name}
              number={number}
              onContactDelete={() => {
                onContactDelete(id)
              }}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default ContactList
