import React,{Component} from "react";
import  "./styles/about.css";

export default class About extends Component{
render = () => {
return(
<div>
<h2> Here are some posts</h2>
<div>
              <img className="float-left"  src="../images/d.jpeg" alt="New York"/>
              <img className="float-left" src="../images/a.jpeg" alt="New York"/>
              <img className="float-left" src="../images/b.jpeg" alt="New York"/>
              

</div>
<div>
              <img className="float-left"  src="../images/c.jpeg" alt="New York"/>
              <img className="float-left" src="../images/e.jpeg" alt="New York"/>
              <img className="float-left" src="../images/f.jpeg" alt="New York"/>
              
</div>
</div>


)
}
}