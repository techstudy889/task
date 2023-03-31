
import React,{Component} from "react";
import {route,redirect} from "../Router";
import  "./styles/user.css";
export default class Users extends Component{

//lifecycle :mounting state 1 cycle
 constructor(props){
	super(props);
    this.state = {
            title:"",
            body:"",
            userId:"",
            tags:"",
			reactions:"",
            posts:[],
			msg:"",
	}
    }

    render = () =>{
        return (
            <div>
              <h1>Posts here....</h1>
			  
			  {this.state.msg}
             
              <form>
                    <p>title : <input type="text" 
                    value={this.state.title} 
                    onChange= { (event)=> 
                    {this.setState({title:event.target.value})}  
                    }   />
                    
                    </p>
                    <p>body : <input type="text" value={this.state.body} 
                    onChange= {(event)=>{this.setState({body:event.target.value})}}/></p>
                    <p>userId : <input type="number" value={this.state.userId} 
                    onChange= {(event)=>{this.setState({userId:event.target.value})}}/></p>
                    <p>tags : <input type="text" value={this.state.tags} 
                    onChange= {(event)=>{this.setState({tags:event.target.value})}}/></p>
					   <p>reactions : <input type="text" value={this.state.reactions} 
                    onChange= {(event)=>{this.setState({reactions:event.target.value})}}/></p>
                    <input  className="a" type="button" value="save" 
                    onClick={this.saveData}/> 
              </form>
            </div>
        )
    }

  saveData = () => {
    const url = 'http://localhost:5000/posts/';



	let newObject = {
		title:this.state.title,
		body:this.state.body,
		userId:this.state.userId,
		tags : this.state.tags,
		reactions : this.state.reactions,
	}
	
    let promise = fetch(url,{
        headers:{
            "Content-Type":"application/json",
        },
        method:"POST",
        body:JSON.stringify(newObject),
    });
    promise.then((response)=>{
        if(response.ok){
			this.setState({
				title:"",
				body:"",
				userId:"",
				tags:"",
				reactions:"",
				msg:<span className="success">User created Successfully</span>
				
			});
			
					return redirect('showusers');
			
	}
    }).then((data)=>{
        console.log(data)

    }).catch((error)=>{
        console.log(error);
		
		this.setState({

				msg:<span className="error">Oops! Try again later</span>
				
			});
			let ID1 = setTimeout(()=>{
				this .setState({
					msg:"",
				});
			},5000);
	
    });



  }
}