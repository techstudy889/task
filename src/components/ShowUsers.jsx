import React,{Component} from "react";
import  "./styles/showusers.css";
import {route,redirect} from "../Router";
export default class ShowUsers extends Component{
	//mounting state
	constructor(props){
		console.log('This is mouting state : 1st Cycle');
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
	componentDidMount(){
		console.log('This is Update state : 2nd Cycle');
		const url = 'http://localhost:5000/posts/';

		/************Start of Promise Fetch Api ***************/
		let promise = fetch(url);
		promise.then((response)=>{
			return response.json();
		}).then((data)=>{
			//Object Json
			if(Array.isArray(data)){
				console.log('runing');
				this.setState({
					posts:data	
				})
			}
		}).catch((error)=>{
			console.log(error);
		})
		/************End of Promise Fetch Api ***************/	
	}
	componentWillMount(){		
		console.log("Unmounted is 3rd cycle");
	}
    render = () =>{
		console.log(this.state.posts,"render");
        return (
            <div>
			
               <h1>All posts are Here..... </h1>
			   {this.state.msg}
			   <table border="1" rules="all">
			   <thead>
			   <tr>
					<th>ID</th>
					<th>Title</th>
					<th>Body</th>
					<th>userId</th>
					<th>Tags</th>	
					<th>Reactions</th>	
				</tr>
			   </thead>
			   <tbody>
						{this.getRecords()}
			   </tbody>
			   </table> 						
            </div>
        )
    }
	getRecords = () =>{
		return this.state.posts.map((item,index)=>{
			return (
			<tr key={item.id}>
				<td>{item.id}</td>
				<td>{item.title}</td>
			
				<td>{item.body}</td>
					<td>{item.userId}</td>
				<td>{item.tags}</td>	
				<td>{item.reactions}</td>	
				
			</tr>
			 )
		})
	}
		
}
		

	
