import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import HelpCenter from './HelpCenter';
import { createBrowserHistory as createHistory } from "history";
import {Switch, Route,Redirect, Router} from 'react-router-dom';
const history = createHistory();

class Main extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div >
        <Router history={history}>
          <Header/>
            <Route path="/home" exact component={Home} />
            <Route path="/helpcenter" component={HelpCenter} />
            <Redirect to="/home"></Redirect>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default Main;
