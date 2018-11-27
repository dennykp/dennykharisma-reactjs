import React, { Component } from 'react';
import './App.css';
import './index.js';
import fire from './kapanlagi/component/fire'



class signup extends React.Component {
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
  fire.auth().signUpWithEmailAndPassword(email,password).catch(cekauth=>{
    this.setState({cekauth})
  });
  
}
  render() {

    return (
      <div className="form-inline">
      <h2>Sign In</h2>
      <div className ="form-group">
      <input className="form-control" type="text" placeholder="email"
      onChange={event => this.setState({email:event.target.value})}
      /> 
      <br/>
      <input className="form-control" type="password" placeholder="Password"
       onChange={event => this.setState({password:event.target.value})}
      /> 
      <br/>
      <button className="btn btn-primary" type="button"
  onClick={() => this.signIn()} >Sign in
      </button>
      </div>
      <div>{this.state.cekauth.message}</div>
      </div>
   
    )
    ;
 
  }
  
}

export default signup