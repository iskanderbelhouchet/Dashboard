import React from 'react'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { Menu } from './Menu'
import { Dashboard } from '../Pages/Dashboard/Dashboard'
import Example from '../Pages/Example/Example'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
export default class App extends React.Component {
  render () {
    return (
      <Router>
      <div>
        <Header />
        
        <Switch>
          <Route path="/example">
            <Example />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>


        <Menu />
        <Footer />
      </div>
      </Router>

    )
  }
}

export { App }
