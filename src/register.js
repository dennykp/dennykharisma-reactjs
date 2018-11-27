import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import fire from './kapanlagi/component/fire'
import { error } from 'util';


class register extends Component{
render(){   
return(
<div>
    <form>
        <h3>Register</h3>
        <label>Username</label>

   <input 
   type="text" placeholder="Username"/>
        <label>Email: </label>

<input 
type="text" placeholder="Email"/>
   <label>Password</label>
   <input  
   type="password" placeholder="Password"/>
 

   
   <button >Sign in</button>
    </form>
</div>

)

}
}
export default register