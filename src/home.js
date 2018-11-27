import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import fire from './kapanlagi/component/fire'
import logo from './logo.svg';
import App from './App';
import Login from './login'
import Register from './facebook'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'



export default class home extends Component{

constructor(){
super();
}

render(){
return(
    <Router>
    <div>

<ul>
            <li><Link to='/'>Home</Link> </li>
            <li><Link to='/registerpath'>Register</Link> </li>
            <li><Link to='/loginpath'>Login</Link> </li>
            </ul>
            <div>    <Route path='/registerpath' component={Register}/>
    <Route path='/loginpath' component={Login}/>
    </div>

    </div>
    </Router>
)

}

}

ReactDOM.render(<home namee = "John Doe"/>, document.getElementById('root'))