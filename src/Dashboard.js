import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.js';
import Homekl from './kapanlagi/home'
import fire from './kapanlagi/component/fire'
import Menu from './kapanlagi/menu'
import Signin from './kapanlagi/signin'
import Homeslider from './kapanlagi/homeslider'
import Menubaru from './kapanlagi/component/Toolbar/toolbar'
import Sidedrawer from './kapanlagi/component/sidedrawer/sidedrawer'
import Backdrop from './kapanlagi/component/backdrop/backdrop'
import Shopp from './kapanlagi/shopcontent'
import shopcontent from './kapanlagi/shopcontent';
class Dashboard extends React.Component {
state = {
sideDrawerOpen: false
};

drawerToggleClickHandler = () => {
this.setState((prevState)=> {
  return {sideDrawerOpen: !prevState.sideDrawerOpen};
});

};
backdropClickHandler = () => {
  this.setState({sideDrawerOpen:false});
}
  render() {

let backdrop;

if(this.state.sideDrawerOpen){

  backdrop = <Backdrop click={this.backdropClickHandler}/>;
}
    return (
      
  <div style={{height:'100%'}}>
<Menubaru drawerClickHandler={this.drawerToggleClickHandler}/>
<Sidedrawer show={this.state.sideDrawerOpen}/>
{backdrop}

<main style={{marginTop: '0px'}}>

</main>


    </div>

    

    )
    ;
 
  }
}

export default Dashboard