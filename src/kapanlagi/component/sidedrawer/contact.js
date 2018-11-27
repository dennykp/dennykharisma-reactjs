import React from 'react'
import Kontakmap from './sepatu2.jpg'
export default class contact extends React.Component{

    render(){
        return(
            <div >
                <div class="container">
  

   <h1> <p>Kontak Us</p></h1>
  </div>
  <div class="row">
    <div class="column">
      <img src={Kontakmap} style={{width:'100%'}}/>
    </div>
    <div class="column">
      <form action="/action_page.php">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Indonesia</option>
          <option value="canada">Malasia</option>
          <option value="usa">Singapore</option>
        </select>
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Pesan Anda..." style={{height:'170px'}}></textarea>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  </div>
</div>

        )
    }
}