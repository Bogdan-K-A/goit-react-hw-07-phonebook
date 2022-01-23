import { Container } from './components/container/Container'
import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'
import ContactFilter from './components/ContactFilter/ContactFilter'

function App() {
  return (
    <Container>
      <h1>Phoneboock</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <ContactFilter />
      <ContactList />
    </Container>
  )
}

export default App
