import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import AdminNavbar from './Components/AdminNavbar'
import Sidebar from './Components/Sidebar'

function App () {
  return (
    <Router>
      <div>
        <AdminNavbar />
        <Switch>
          <Route path='/Dashboard'>
            <Dashboard />
          </Route>
        </Switch>
        <Sidebar />
      </div>
    </Router>
  )
}

export default App
