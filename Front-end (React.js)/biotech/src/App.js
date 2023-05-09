import React from 'react'
import './app.css'
import { Navbar } from './components'
import {About, Blog, Features, Footer, Header, Services, Testimonials} from './containers'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import {Appointment,Login,Dashboard,Register} from './pages'


const App = () => {
  return (
      <div className='App'>
        <Routes>
          <Route path='/appointment' element={<Appointment page='form'/>}/>
          <Route path='/appointment-confirm' element={<Appointment page='confirm'/>}/>
          <Route path='/dashboard-login' element={<Login/>}/>
          <Route path='/dashboard-register' element={<Register/>}/>
          <Route path='/dashboard/*' element={<Dashboard/>}/>
          <Route path='/' element={
            <>
              <Navbar/>
              <Header/>
              <Features/>
              <About/>
              <Services/>
              <Testimonials/>
              <Blog/>
              <Footer/>
            </>
          }/>
          
        </Routes>
      </div>
  )
}

export default App