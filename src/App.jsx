import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import Izbornik from './components/Izbornik'
import { Route, Routes } from 'react-router-dom'
import { RouteNames } from './constants'
import UslugePregled from './pages/usluge/UslugePregled'
import Home from './pages/Home'
import UslugeNovi from './pages/usluge/UslugeNovi'
import UslugePromjena from './pages/usluge/UslugePromjena'


function App() {

  return (
    <Container>
      <Izbornik />
      <Routes>
          <Route path={RouteNames.HOME} element={<Home/>}  />
          <Route path={RouteNames.KONTAKT} element={<h1>Kontakt</h1>}  />
          <Route path={RouteNames.USLUGE} element={<UslugePregled />}  />
          <Route path={RouteNames.USLUGE_PROMJENA} element={<UslugePromjena />}  />
          <Route path={RouteNames.USLUGE_NOVI} element={<UslugeNovi />}  />
      </Routes>
      <hr />

      &copy; Marija | Edunova | III.2026.
    </Container>
  )
}

export default App
