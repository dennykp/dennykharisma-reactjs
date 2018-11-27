import React from 'react'
import './toolbar.css'
import Drawertogglebutton from '../sidedrawer/drawertogglebutton'
import Opencart from '../sidedrawer/opencart'

const toolbar = props => (

<header className="toolbar">
    <nav className="toolbar__navigation">
        <div>
<Drawertogglebutton click={props.drawerClickHandler}/>

        </div>
        <div className="toolbar__logo"><a href="">Online Shoes</a></div>
<div className="spacer"/>
        <div className="toolbar_navigation-items">
<ul>
<Opencart/>
</ul>

        </div>


    </nav>
</header>

)
export default toolbar