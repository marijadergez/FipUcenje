import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import Izbornik from './components/Izbornik'
import { Route, Routes } from 'react-router-dom'
import { RouteNames } from './constants'
import UslugePregled from './usluge/UslugePregled'
import Home from './pages/Home'



function App() {

  return (
    <Container>
      <Izbornik />
      <Routes>
          <Route path={RouteNames.HOME} element={<Home/>}  />
          <Route path={RouteNames.KONTAKT} element={<h1>Kontakt</h1>}  />
          <Route path={RouteNames.USLUGE} element={<UslugePregled />}  />


      </Routes>
      <hr />

      &copy; Marija | Edunova | III.2026.
    </Container>
  )
}

export default App
