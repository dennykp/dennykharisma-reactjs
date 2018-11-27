import React, {Component} from 'react'
import './style.scss';
import '../index.js';
import Homeregister from './register' 
import Homelogin from './login' 
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import fire from './component/fire'
import Sukseslogin from './sukseslogin'
class login extends Component{
    constructor(props){
        super(props)
        this.state ={
          user:{}
        }
      }
      
      componentDidMount(){
        this.authListener();
      }
      authListener(){
        fire.auth().onAuthStateChanged((user)=>{
          if(user){
            this.setState({user});
      
          }
          else
          this.setState({user:null})
        })
      }

    render(){
        return(
            <Router>
         
         
   

{this.state.user ? (<Sukseslogin/> ): (<ul className="nav-list">

  <li ><a class="nav-link"><Link to='/loginpath'>Login </Link></a></li>

  <Route path='/registerpath' component={Homeregister}/>
            <Route path='/loginpath' component={Homelogin}/>   
</ul>

)}
       

          
            </Router>
        )
    }
}
export default login
