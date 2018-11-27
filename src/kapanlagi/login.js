import React, {Component} from 'react'
import './style.scss';
import '../index.js';
import Homeregister from './register' 
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import fire from './component/fire';
import Register from './register'

class login extends Component{
    constructor(props){
        super(props)
        this.state = {
          email :'',
          password : '',
          cekauth:{
            message: '',
            cek:0
          }
        }
        this.signupp = this.signupp.bind(this);
      }
      signIn(){
        console.log('this state:', this.state)
        const {email,password} = this.state
        fire.auth().signInWithEmailAndPassword(email,password).catch(cekauth=>{
          this.setState({cekauth})
     
        });
        
      }
      signupp(){
        this.setState({cek:1});
      }
    render(){
        return(
          
           <div>
        <br/>
        {this.state.cek==1 ? (<Register/>): 
               <form class="sign-up">
    <h1 class="sign-up-title">Login in</h1>
    <div>{this.state.cekauth.message}</div>


    <input type="email" class="sign-up-input" 
      onChange={event => this.setState({email:event.target.value})}
    placeholder="Email..." autofocus/>
   
    <input type="password" class="sign-up-input" placeholder="Choose a password"
      onChange={event => this.setState({password:event.target.value})}
    />
      
    <br/><br/>
    <button type="button" value="Sign In!" onClick={() => this.signIn()} class="sign-in-button">Sign in</button>
<br/><br/>
     <button type="button" onClick={this.signupp} class="sign-up-button">Sign Up Here !!!</button>
 <br/><br/><br/>
 <p>*Email : admin@gmail.com<br/>
 *Password: admin123 - you can Register for login</p> 
  </form>
        }
 
            </div>
        
        )
    }
}
export default login
