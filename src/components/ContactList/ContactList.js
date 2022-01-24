import { useDispatch, useSelector } from 'react-redux'
import { ContactElem } from '../ContactElem/ContactElem'
import s from '../ContactElem/ContactElem.module.css'
import contactOperation from '../../redux/contacts/contact-operations'
import { getVisibleContacts } from '../../redux/selector'

const ContactList = () => {
  const dispatch = useDispatch()
  const visibleContacts = useSelector(getVisibleContacts)
  const onContactDelete = (id) => dispatch(contactOperation.contactDelete(id))

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
