import React from "react";
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import Online from './online';
import logo from '../assets/images/pagoefectivo.png';
import Cash from './Cash';
import SelectLanguaje from './SelectLanguaje'

const App = () => (
  <Router>
    <div className="container">
    <div className="row">
    <div className="col-6 col-md-2">
      <img className="img-fluid" src={logo} alt="logo" />
    </div>
    <SelectLanguaje />
    </div>
    <ul className="header ">
      <li><NavLink  exact className="title" activeStyle={{fontWeight: 'bold', color: '#e0aa00',border:'1px solid #e0aa00', borderRadius:'5px', borderBottom:'0px'}} to="/reto-redbus-en" >Online Banking</NavLink></li>
      <li><NavLink   className="title" activeStyle={{fontWeight: 'bold', color: '#e0aa00',border:'1px solid #e0aa00', borderRadius:'5px', borderBottom:'0px'}} to="/reto-redbus-cash-en" >Pay by Cash</NavLink></li>
    </ul>
    <div className="content"> 
    <Route exact path="/reto-redbus-en" component={Online} />
    <Route exact path="/reto-redbus-cash-en" component={Cash} />
    </div>
    </div>
  </Router>
);

export default App;