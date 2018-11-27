import React from 'react'

export default class FormStudent extends React.Component{
    //state
constructor(){
    super()
    this.state ={
        showmenu :true,
    }
    
    this.showmenu= this.showmenu.bind(this);
}
showmenu(event) {
    event.preventDefault();
    
    this.setState({
      showMenu: true,
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.showMenu}>
          Show menu
        </button>
        
        {
          this.state.showMenu
            ? (
              <div className="menu">
                <button> Menu item 1 </button>
                <button> Menu item 2 </button>
                <button> Menu item 3 </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}