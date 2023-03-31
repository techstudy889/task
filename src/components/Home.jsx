import React,{Component} from "react";


export default class Home extends Component{
render = () => {
return(

<div>
  <p className="text-center fs-1"><strong>About my website</strong></p>
     	
<div id="demo" className="carousel slide" data-bs-ride="carousel">

  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="../images/la.jpg" alt="Los Angeles" className="d-block w-100"/>
    </div>
    <div className="carousel-item">
      <img src="../images/chicago.jpg" alt="Chicago" className="d-block w-100"/>
    </div>
    <div className="carousel-item">
      <img src="../images/ny.jpg" alt="New York" className="d-block w-100"/>
    </div>
  </div>


  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>
<br/>
<br/>
<div className="clearfix">
  <img src="../images/p4.jpeg" className="col-md-4 float-md-end mb-4 ms-md-4"/>
  <p className="text-center">
  Posts are the quickest way to communicate with your audience and reach potential
  customers. You'll get the most out of your Page when your audience 
  sees that you're active, and posts are a free way to do that.
  Anyone who visits your Page should see a post that is both recent and meaningful.
  If you don't have a particular promotion or post in mind, 
  explore ideas for posts on your Page.<br/><br/>
 <strong> Benefits</strong><br/>
When customers have more access to your business information and updates, they can make better decisions as they browse. This allows you to:
<br/>
 <strong className="fs-1">*</strong>Directly communicate with your local customers.<br/>
 
  <strong className="fs-1">*</strong>Improve your customer experience with timely information.<br/>
  <strong className="fs-1">*</strong>Promote your sales, specials, events, news, and offers.<br/>


  </p>
  
</div>
<div className="card-group">
  <div className="card">
    <img src="../images/p.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Bussiness</h5>
      <p className="card-text">Success is not final failure is not fatal: it is the courage to continue that counts. ...</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card">
    <img src="../images/p3.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Education</h5>
      <p className="card-text"> One book, one pen, one child and one teacher can change the world...</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card">
    <img src="../images/p1.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Life</h5>
      <p className="card-text">Instead of worrying about what you cannot control, shift your energy to what you can create....</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
</div>

)
}
}