import React from 'react'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { Menu } from './Menu'
import AddStudent from '../Pages/Students/AddStudent'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <AddStudent />
        <Menu />
        <Footer />
      </div>

    )
  }
}

export { App }
