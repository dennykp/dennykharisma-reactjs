import React, { Component } from 'react';
import './App.css';
import './index.js';
import fire from './kapanlagi/component/fire'
import Signin from './kapanlagi/login'
import Dash from './Dashboard'
import Slideshow from './kapanlagi/slideshow'
class App extends React.Component {

constructor(props){
  super(props);
  this.state={
    user:{},
  }
  this.authListener = this.authListener.bind(this);
}
componentDidMount(){
  this.authListener();
}
authListener(){
  fire.auth().onAuthStateChanged((user)=>{
    if(user){
      this.setState({user});
    }
    else{
      this.setState({user:null})
    }
  })
}

  render() {

    return (
  <div>
    {this.state.user ? (<Dash/>): (<Slideshow/>)}




    </div>

    

    )
    ;
 
  }
}

export default App