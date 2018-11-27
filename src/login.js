import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import fire from './kapanlagi/component/fire'
import { error } from 'util';
import Axios from 'axios';
import Inputorang from './personinput'

class login extends Component{
state = {
    orang: [],
}
componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res =>{
        console.log(res);
        this.setState({orang: res.data})
    })
}
render(){   
return(
<div>
  <ul>

      {this.state.orang.map(person => <li key={person.id}>{person.username}</li>)}
  </ul>
<Inputorang/>
</div>

)

}

}

export default login