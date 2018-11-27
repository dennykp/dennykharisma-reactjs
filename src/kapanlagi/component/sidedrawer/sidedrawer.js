import React from 'react'
import './sidedrawer.css'
import Shopp from './shoping'
import About from './about'
import Team from './team'
import Contact from './contact'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Logout from '../sukseslogin'
import Setting from './setting'

const sideDrawer = props =>{
let drawerClasses = 'side-drawer';
if(props.show){
    drawerClasses = 'side-drawer open'
}


    return(
        <Router>
        <div>
<nav className={drawerClasses}>
    <ul>
        <li> <a href="productpath">Home</a></li>
         <li> <a href="/productpath">Product</a></li>
         <li> <a href="/aboutpath">About</a></li>
         <li> <a href="/contactpath">Contact</a></li>
         <li> <a href="/settingpath">Setting</a></li>
     <div className="buttonfull"> <a href="/contactpath"><Logout/></a></div>   
    </ul>
</nav>
<div className="content">
<Route path='/productpath' component={Shopp}/>
<Route path='/aboutpath' component={About}/>
<Route path='/contactpath' component={Contact}/>
<Route path='/settingpath' component={Setting}/>
</div>
</div>
</Router>
    )

};

export default sideDrawer