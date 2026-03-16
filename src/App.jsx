import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import Izbornik from './components/Izbornik'
import { Route, Routes } from 'react-router-dom'
import { RouteNames } from './constants'
import UslugePregled from './usluge/UslugePregled'

function App() {

  return (
    <Container>
      <Izbornik />
      <Routes>
        
      </Routes>
      <hr />

      &copy; Marija | Edunova | III.2026.
    </Container>
  )
}

export default App
