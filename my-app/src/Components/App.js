import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import AdminNavbar from './AdminNavbar'
import Sidebar from './Sidebar'
import AddAdmin from '../Pages/AddAdmin'

function App () {
  return (
    <Router>
      <div>
        <AdminNavbar />
        <Switch>
          <Route path='/Dashboard'>
            <Dashboard />
          </Route>
          <Route path='/AddAdmin'>
            <AddAdmin />
          </Route>
        </Switch>
        <Sidebar />
      </div>
    </Router>
  )
}

export default App
