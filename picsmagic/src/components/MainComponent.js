import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import HelpCenter from './HelpCenter';
import {Switch, Route,Redirect} from 'react-router-dom';
import { createBrowserHistory as createHistory } from "history";
const history = createHistory();

class Main extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div >
          <Header/>
            <Switch history={history}>
              <Route path="/home" exact component={Home} />
              <Route path="/helpcenter" component={HelpCenter} />
              <Redirect to="/home"></Redirect>
            </Switch>
          <Footer />
      </div>
    );
  }
}

export default Main;
