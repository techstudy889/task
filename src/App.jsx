import React,{Component} from "react";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Login from "./components/Login";
import About from "./components/About";
import ShowUsers from "./components/ShowUsers";
import Users from "./components/Users";
import {route} from "./Router";
import config from  "./config/config.json";
export default class App extends Component{
	

	
	
		constructor(props){
		super(props)
	this.id=window.localStorage.getItem('hash').split('/')[1];
	this.view ={
		login:<Login/>,
		home:<Home/>,
		gallery:<Gallery/>,
		about:<About/>,
		createuser:<Users/>,
		showusers:<ShowUsers/>,
	
	}
	
	}
	componentDidMount(){
		
		console.log("this method is running from app.jsx")
	}

	renderView = () => {
	return this.view[route];
}
render = () => {
return(
<React.Fragment>

<Header/>
{this.renderView()}
<Footer/>
</React.Fragment>
)
}

}