import React, {Component} from 'react'
import FacebookLogin from 'react-facebook-login'

export default class facebook extends Component{
state = {
    isLoggedIn :false,
    userID:'',
    name:'',
    email:'',
    picture:'',
    user_friends: ''

}
responseFacebook = response =>{
    console.log(response)
    this.setState({
      isLoggedIn: true,
        userID: response.userID,
        name:response.name,
        email: response.email,
        picture: response.picture.data.url,
        user_friends: response.user_friends
    })
}
componentClick = () => console.log('clicked')
render(){
    let fbcontent
    if (this.state.isLoggedIn) {
        fbcontent = (
            <div style={{
width: '400px',
margin:'auto',
background:'#f4f4f4',
padding:'20px'
            }}>
           <center><img src={this.state.picture} height="100px" alt={this.state.name}/></center> 
     <h2>Welcome {this.state.name}</h2>
     <h3>Email: {this.state.email}</h3>
     <h3>Gender: {this.state.user_friends}</h3>
            </div>
        )
        
    }
    else {
      fbcontent = (<FacebookLogin 
        appId="1717553018348645"
        autoLoad={true}
        fields="name,email,picture"
        onClick={this.componentClick}
        callback={this.responseFacebook}/>
        )  
    }
    return <div>{fbcontent}<h1></h1></div>
}
}