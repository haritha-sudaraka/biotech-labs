import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Navbar,Sidebar} from './components';
import {AddReport,AddTest,Appointments,Home,ManageAppointments,Reports,Tests} from './dashboard_pages';
import { useStateContext } from './contexts/ContextProvider';
import './dashboard.css'

const Dashboard = () => {
  const {activeMenu} = useStateContext();
  return (
    // <BrowserRouter>
      <div className="flex relative">
        {activeMenu ? (
          <div className="w-72 fixed sidebar bg-white ">
            <Sidebar/>
          </div>
        ) : (
          <div className="w-0">
            <Sidebar/>
          </div>
        )}
        <div className={`bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
          <div className="fixed md:static bg-main-bg navbar w-full ">
            <Navbar/>
          </div>
          <div>
            <Routes>
              <Route path='/' element={<Home/>}/>

              {/* Appointments */}
              <Route exact path='/appointments' element={<Appointments/>}/>
              <Route exact path='/manage-appointments' element={<ManageAppointments/>}/>

              {/* Reports */}
              <Route exact path='/add-report' element={<AddReport/>}/>
              <Route exact path='/reports' element={<Reports/>}/>

              {/* Tests */}
              <Route exact path='/add-test' element={<AddTest/>}/>
              <Route exact path='/tests' element={<Tests/>}/>
            </Routes>
          </div>
        </div>
      </div>
    // </BrowserRouter>
    
  )
}

export default Dashboard