import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import fire from './kapanlagi/component/fire'
import { error } from 'util';
import Axios from 'axios';


class personinput extends Component{
state = {
   name: '',
}
handlehange = event => {
    this.setState({name: event.target.value});

} 

handleSubmit = event => {
    event.preventDefault();

    const user = {
        name :this.state.name
    }
    Axios.post('https://jsonplaceholder.typicode.com/users',{user})
    .then(res =>{
        console.log(res)
        console.log(res.data)
    })
}

render(){   
return(
<div>
<form onSubmit={this.handleSubmit}>
<label>Person Name: <input type="text" onChange={this.handlehange} name="name"></input></label>
<button type="submit">Submit</button>
</form>
</div>

)

}

}

export default personinput