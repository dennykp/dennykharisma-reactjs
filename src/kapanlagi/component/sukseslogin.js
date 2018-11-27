import React, {Component} from 'react'
import fire from './fire'
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

    return(  <div><br/><br/><br/><br/><br/>
<div className="buttonfull">
<button onClick={this.keluar}>Logout</button></div>
    
 
</div>   

    )
}

}