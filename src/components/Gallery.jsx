import React,{Component} from "react";
import  "./styles/gallery.css";

export default class Gallery extends Component{
render = () => {
return(
<div className="card-group">
  <div className="card">
    <img src="../images/l.jpg" className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title text-center">Lucknow</h5>
      <p className="card-text text-center">“Instead of worrying about what you cannot control, shift your energy to what you can create.” ....</p>
    </div>
    <div className="card-footer">
      <small className="text-muted text-center">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card">
    <img src="../images/r.jpg" className="card-img-top"/>
    <div className="card-body">
      <h5 className="card-title text-center">Gorakhpur</h5>
      <p className="card-text text-center" >Gorakhpur Junction railway station is a major railway station in the state of Uttar Pradesh.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted text-center">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card">
    <img src="../images/t.jpg" className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title text-center">Agra</h5>
      <p className="card-text text-center">.During my Agra trip last year, I got to visit the Taj Mahal for the very first time and was left mesmerised by how magnificent it is in real life. </p>
    </div>
    <div className="card-footer">
      <small className="text-muted text-center">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
)
}
}