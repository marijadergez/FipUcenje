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
        <Route path={RouteNames.HOME} element={<h1>ne rad i mi routa Home bez ovog txta {RouteNames.HOME} </h1>}  />
        <Route path={RouteNames.UslugePregled} element={<UslugePregled />}  />
          <Route path={RouteNames.KONTAKT} />
     


      </Routes>
      <hr />

      &copy; Marija | Edunova | III.2026.
    </Container>
  )
}

export default App
