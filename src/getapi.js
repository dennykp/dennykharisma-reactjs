import React,{Component} from 'react'

export default class getapi extends Component{
constructor(props){
super(props);
this.state = {
items:[], 
isLoaded :false,
}
}

componentDidMount(){
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(json => {
    this.setState({
        isLoaded :true,
        items: json
    })
})
}

render(){
    var{isLoaded,items} = this.state
    if(!isLoaded){
      return  <div>isLoading...</div>
    }
    else{
     
    return(
        
        <div className="App">
        
        <div>Data is Loaded</div>
<table border="1">
<caption>Table</caption>
<td>Nama</td>
<td>Email</td>
<td>Lokasi</td>
<td>FOund</td>
      {items.map(item => (
<tr key = {item.id} >
<td>{item.name} </td> 
<td>{item.email} </td>
<td>{item.address.geo.lat}</td>
{item.email == "Sincere@april.biz" ? <u>Found</u> : "Not found"}
</tr>


      ))}
  </table>
        </div>

    )
}
}
}