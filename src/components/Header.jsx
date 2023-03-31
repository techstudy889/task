import React,{Component} from "react";

import  "./styles/header.css";

export default class Header extends Component{
	
render = () => {
return(

<nav className="navbar navbar-expand-sm bg-dark">

  <div className="container-fluid">
   
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#home">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#gallery">Gallery</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#login">Login</a>
      </li>
	      <li className="nav-item">
        <a className="nav-link" href="#about">About</a>
      </li>
	  	      <li className="nav-item">
        <a className="nav-link" href="#createuser">User</a>
      </li>	      <li className="nav-item">
        <a className="nav-link" href="#showusers">Show User</a>
      </li>
    </ul>
  </div>

</nav>


)
}
}