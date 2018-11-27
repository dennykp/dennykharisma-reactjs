import React,{Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Login from './login'
import Signup from './register'
import Shopcontent from './shopcontent'


export default class homeslider extends Component{

    render(){
return(
    <Router>
    <div>
    <Link to='/signinpath'>Login</Link>|
    <Link to='/signuppath'>signup</Link>|
    
            <Route path='/signinpath' component={Login}/>
        <Route path='/signuppath' component={Signup}/>
        <Route path='/shopcontentpath' component={Shopcontent}/>
        </div>

        </Router>
)
    }
}