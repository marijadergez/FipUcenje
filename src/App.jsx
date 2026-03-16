import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import Izbornik from './components/Izbornik'

function App() {

  return (
    <Container>
      <Izbornik />

      <hr />

      &copy; Marija | Edunova | III.2026.
    </Container>
  )
}

export default App
