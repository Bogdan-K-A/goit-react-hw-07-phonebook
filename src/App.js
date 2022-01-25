import { Container } from './components/container/Container'
import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'
import ContactFilter from './components/ContactFilter/ContactFilter'
import { useSelector } from 'react-redux'
import { getLoading } from './redux/selector'

function App() {
  const loading = useSelector(getLoading)

  return (
    <Container>
      <h1>Phoneboock</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <ContactFilter />
      {loading && <h2>Loading...</h2>}
      <ContactList />
    </Container>
  )
}

export default App
