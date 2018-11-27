import React, {Component} from 'react';

import Logo from './component/sidedrawer/sepatu.jpg'
import Logo2 from './component/sidedrawer/sepatu2.jpg'
import Logo3 from './component/sidedrawer/sepatu3.jpg'
import Login from './login'


export default class slideshow extends Component {

    constructor(props){
super(props)
this.state ={
    started: 0,
}
this.function_start= this.function_start.bind(this)
    }

function_start(){
this.setState({started:1});
}

render(){
    return (
<div>
        {this.state.started==1 ? (<Login/>): 
    
    <div class="card">
  
  <div class="container">
    <h1><b>Welcome</b></h1> 
    <p>Shooping & Happy</p> 
  </div>

        <div class="slider">
          <input checked="" type="radio" name="slider" id="slide0" selected="false"/>
          <input type="radio" name="slider" id="slide1" selected="false"/>
          <input type="radio" name="slider" id="slide2" selected="false"/>
          <div class="slides">
            <div class="slide">
              <img src={Logo} width="350px" height="400"/>
              <label class="next" for="slide1"></label>
              <div class="description">Adidas New</div>
            </div>
            <div class="slide">
              <label class="prev" for="slide0"></label>
              <img src={Logo2} width="350px" height="400"/>
              <label class="next" for="slide2"></label>
              <div class="description">Puma, new</div>
            </div>
            <div class="slide">
              <label class="prev" for="slide1"></label>
              <img src={Logo3} width="350px" height="400"/>
              <div class="description">Adidas Like</div>
            </div>
          </div>
          <div class="nav">
            <label class="bottom" for="slide0"></label>
            <label class="bottom" for="slide1"></label>
            <label class="bottom" for="slide2"></label>
          </div><br/>
      
        </div>
        
        <br/>Klik Start untuk melanjutkan<br/>
        
        <button type="submit" onClick={this.function_start}>Get Started</button>
        </div>
    }
        
     </div>
        );
      }
}
