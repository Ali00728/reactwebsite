import React from 'react'
import { Switch,Route } from 'react-router'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Home from './Home'
import About from './About'
import Marketing from './Marketing'
import Services from './Services'
import Contact from './Contact'
import Menu from './Menu'

function App() {
  return (
   <>
   <Menu/>
   <Switch>
     <Route exact path="/" component={Home}/>
     <Route path="/about" component={About}/>
     <Route path="/marketing" component={Marketing}/>
     <Route path="/contact" component={Contact}/>
     <Route path="/services" component={Services}/>
   </Switch>
   </>
  )
}

export default App;
