import React, { Component } from 'react'
import Logo from './sepatu.jpg'
import Logo2 from './sepatu2.jpg'
import Logo3 from './sepatu3.jpg'
import Logo4 from './sepatu4.jpg'
import Title from './title'

export default class shopcontent extends Component{

  render(){
    return(
<div>

<Title/>


<div class="responsive">
<div class="card">
  <img src={Logo} style={{width:'100%'}}/>
  <h1>Adidas</h1>
  <p class="title">$ 3.00</p>
  <p>Stock : 2 Pcs</p>
  
 <p><button>Cart</button></p>
</div>
</div>


<div class="responsive">
<div class="card">
  <img src={Logo2} style={{width:'100%'}}/>
  <h1>Puma</h1>
  <p class="title">$ 5.00</p>
  <p>Stock : 2 Pcs</p>
  
 <p><button>Cart</button></p>
</div>
</div>

<div class="responsive">
<div class="card">
  <img src={Logo3} style={{width:'100%'}}/>
  <h1>New Balance</h1>
  <p class="title">$ 6.00</p>
  <p>Stock : 2 Pcs</p>
  
 <p><button>Cart</button></p>
</div>
</div>

<div class="responsive">
<div class="card">
  <img src={Logo4} style={{width:'100%'}}/>
  <h1>Adidas New</h1>
  <p class="title">$ 9.00</p>
  <p>Stock : 4 Pcs</p>
  
 <p><button>Cart</button></p>
</div>
</div>

<div class="responsive">
<div class="card">
  <img src={Logo} style={{width:'100%'}}/>
  <h1>Adidas</h1>
  <p class="title">$ 3.00</p>
  <p>Stock : 2 Pcs</p>
  
 <p><button>Cart</button></p>
</div>
</div>


<div class="responsive">
<div class="card">
  <img src={Logo2} style={{width:'100%'}}/>
  <h1>Puma</h1>
  <p class="title">$ 5.00</p>
  <p>Stock : 2 Pcs</p>
  
 <p><button>Cart</button></p>
</div>
</div>

<div class="responsive">
<div class="card">
  <img src={Logo3} style={{width:'100%'}}/>
  <h1>New Balance</h1>
  <p class="title">$ 6.00</p>
  <p>Stock : 2 Pcs</p>
  
 <p><button>Cart</button></p>
</div>
</div>

<div class="responsive">
<div class="card">
  <img src={Logo4} style={{width:'100%'}}/>
  <h1>Adidas New</h1>
  <p class="title">$ 9.00</p>
  <p>Stock : 4 Pcs</p>
  
 <p><button>Cart</button></p>
</div>
</div>
<div class="clearfix"></div>

</div>

    )
  }
}