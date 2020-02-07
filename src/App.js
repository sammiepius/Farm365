import React from "react";
import SignUp from "./signup";
import Login from "./Login/login";
import Login2 from "./Login/farmerslogin";
import Header from './nav'
import Vendors from "./vendors";
import FarmerInfo from "./farmerinfo";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import VendorsData from "./vendorsdata";
import FarmersData from './farmersdata'
import LandingPage from './LandingPage'

// navigator.serviceWorker.register('/sw.js')

const App = () => {
  return (
    <div >
      <Router>
      <div>
        {/* <MyData /> */}
         < Header/>
        <Switch>
        <Route path='/' exact component={LandingPage}/>
        <Route path='/Vendors' exact component={Vendors}/>
        <Route path='/FarmerInfo' component={FarmerInfo}/>
         <Route path='/SignUp' component={SignUp}/>
        <Route path='/Login' component={Login}/>
        <Route path='/Login2' component={Login2}/>
        <Route path='/VendorsData' component={VendorsData}/>
        <Route path='/FarmersData' component={FarmersData}/>
         {/* <Redirect from='/LandingPage/' to="/https://farm365.farm/" /> */}
        
        </Switch> 
      </div>
     </Router>
     </div>
  );
};



export default App;
