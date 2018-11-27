import React from 'react'
import Foto from './user.jpg'
export default class about extends React.Component{

    render(){
        return(
            <div class="card">
  <img src={Foto} style={{width:'100%'}}/>
  <h1>Denny Kharisma</h1>
  <p class="title">Mahasiswa</p>
  <p>Politeknik Negeri Malang</p>
  
 <p><button>Profile</button></p>
</div>
        )
    }
}