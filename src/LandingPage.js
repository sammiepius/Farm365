import React, { Component } from "react";
import { Jumbotron,Button } from "reactstrap";
import "./App.css";


class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div>
        
        <Jumbotron
          className="col-xs-12  col-sm-12  col-md-12  col-lg-12 jumbotron"
          style={{ marginTop: "5vh", backgroundColor: "white" }}
        >
          <h5 className="text-center display-3">Welcome to FARM365</h5>
          <p className="lead">
         <center>We provide a complete supply chain for a wide variety of products</center> 
          </p>
<br/><br/>
         <center > <a href="https://www.farm365.farm/"><Button size="sm" style={{backgroundColor: 'brown'}}>Go To Home Page</Button></a></center>
        </Jumbotron>
      </div>
    );
  }
}

export default LandingPage;
