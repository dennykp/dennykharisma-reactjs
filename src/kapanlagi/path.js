import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Registerr from './register'
import Login from './login'
class path extends Component{
  
    render(){
        return(
          <Router>
     <div>
   <Link to='/signuppath'>Signup ?</Link><br/>


  <Route path='/signuppath' component={Registerr}/>
  <Route path='/loginpath' component={Login}/>
  </div>
            </Router>
        )
    }
}
export default path
