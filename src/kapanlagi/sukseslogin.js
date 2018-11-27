import React, {Component} from 'react'
import fire from './component/fire'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

export default class sukseslogin extends Component{
    constructor (props){
super(props)
this.keluar = this.keluar.bind(this)
    }
    
    keluar(){
        fire.auth().signOut();
      }
    
render(){

    return(  <div>
    <a href="#">Signout</a><button onClick={this.keluar}>Sign Out</button>
 
</div>   

    )
}

}