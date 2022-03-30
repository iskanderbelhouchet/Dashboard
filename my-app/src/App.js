import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import AdminNavbar from './Components/AdminNavbar'
import Sidebar from './Components/Sidebar'
import AddCategory from './Pages/AddCategory'
function App () {
  return (
    <Router>
      <div>
        <AdminNavbar />
        <div className='row'>
        <Sidebar />
        <Switch>
          <Route path='/Dashboard'>
            <Dashboard />
          </Route>
          <Route path='/AddCategory'>
            <AddCategory />
          </Route>
        </Switch>

        </div>
      </div>
    </Router>
  )
}

export default App
