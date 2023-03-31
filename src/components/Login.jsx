import React,{Component} from "react";
import  "./styles/login.css";
export default class Login extends Component{
render = () => {
return(
<form>
<div className="form-floating mb-3">
 <p> Email:</p><input type="email" className="form-control" id="floatingInput" />
  
</div><br/>
<div className="form-floating">
  <p>Password:</p><input type="password" className="form-control" id="floatingPassword"/>
  
</div><br/>
<div className="form-floating">
  <input className="btn btn-success" type="submit" value="Submit"/>

</div>
 </form>


)
}
}