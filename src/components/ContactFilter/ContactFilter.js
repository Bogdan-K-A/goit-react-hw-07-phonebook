import { useDispatch } from 'react-redux'
import { contactsFilter } from '../../redux/filter/filter-actions'
import s from './ContactFilter.module.css'

const ContactFilter = () => {
  const dispatch = useDispatch()
  const onChange = (filter) => dispatch(contactsFilter(filter))

  return (
    <label className={s.filterInputBox}>
      <input
        className={s.filterInput}
        placeholder="Find contacts by name"
        type="text"
        // value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  )
}

export default ContactFilter
