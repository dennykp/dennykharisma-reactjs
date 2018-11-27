import React, {Component} from 'react'
import './style.scss';
import '../index.js';
import fire from './component/fire';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
class register extends Component{

    constructor(props){
        super(props)
        this.state = {
          email :'',
          password : '',
          cekauth:{
            message: ''
          }
        }
      }
      signIn(){
        console.log('this state:', this.state)
        const {email,password} = this.state
        fire.auth().createUserWithEmailAndPassword(email,password).catch(cekauth=>{
          this.setState({cekauth})
     
        });
        
      }
    render(){
        return(
           <div>
           <br/>
               <form class="sign-up">
    <h1 class="sign-up-title">Sign Up</h1>
    <div>{this.state.cekauth.message}</div>

     <input type="text" class="sign-up-input" 
    placeholder="your Name...?" autofocus/>
    <input type="text" class="sign-up-input" 
      onChange={event => this.setState({email:event.target.value})}
    placeholder="your email...?" autofocus/>
   
    <input type="password" class="sign-up-input" placeholder="password"
      onChange={event => this.setState({password:event.target.value})}
    />
<br/><br/>
     
    <button type="button" value="Sign In!" onClick={() => this.signIn()} class="sign-up-button">Sign up</button>
    
  </form>
            </div>
        )
    }
}
export default register
