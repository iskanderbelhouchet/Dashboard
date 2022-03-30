import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import Sidebar from './Sidebar'
import Dashboard from '../Pages/Dashboard'
import AddAdmin from '../Pages/AddAdmin'
import AddCategory from '../Pages/AddCategory'
import AddCertifications from '../Pages/AddCertifications'
import ManageInstructors from '../Pages/ManageInstructors'
import ManageStudents from '../Pages/ManageStudents'
import ManageAdmins from '../Pages/ManageAdmins'
import ManageProfile from '../Pages/ManageProfile'
import PaymentSettings from '../Pages/PaymentSettings'
import SystemSettings from '../Pages/SystemSettings'
import WebsiteSettings from '../Pages/WebsiteSettings'
import MailBox from '../Pages/MailBox'
import Roles from '../Pages/Roles'

function App () {
  return (
    <Router>
      <div>
        <AdminNavbar />
        <Sidebar />
        <Switch>
          <Route path='/Dashboard'>
            <Dashboard />
          </Route>
          <Route path='/AddAdmin'>
            <AddAdmin />
          </Route>
          <Route path='/WebsiteSettings'>
            <WebsiteSettings />
          </Route>
          <Route path='/PaymentSettings'>
            <PaymentSettings />
          </Route>
          <Route path='/SystemSettings'>
            <SystemSettings />
          </Route>
          <Route path='/ManageProfile'>
            <ManageProfile />
          </Route>
          <Route path='/ManageInstructors'>
            <ManageInstructors />
          </Route>
          <Route path='/ManageStudents'>
            <ManageStudents />
          </Route>
          <Route path='/ManageAdmins'>
            <ManageAdmins />
          </Route>
          <Route path='/AddCategory'>
            <AddCategory />
          </Route>
          <Route path='/AddCertifications'>
            <AddCertifications />
          </Route>
          <Route path='/MailBox'>
            <MailBox />
          </Route>
          <Route path='/Roles'>
            <Roles />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
