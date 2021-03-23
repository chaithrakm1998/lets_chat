import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login/Login.components";
import SignUp from "./components/Signup/Signup.components";
import HomePage from "./pages/homepage/homepage.components";
import About  from './pages/about/About';
import'bootstrap/dist/css/bootstrap.css';
import DetailsPage from './pages/detailspage/detailspage.components'

function App() {
  return (
    <Router>
      <div className="App">
      
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/homepage" component={HomePage} />
            <Route path="/about" component={About}/>
            <Route exact path="/detailspage/:id"  component={DetailsPage}/>
          </Switch>
      
    </div>

    </Router>
    
  );
}

export default App;