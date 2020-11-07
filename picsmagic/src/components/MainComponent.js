import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import HelpCenter from './HelpCenter';
import {Switch, Route,Redirect} from 'react-router-dom';
import { createBrowserHistory as createHistory } from "history";
const history = createHistory();
const images=
    [
    {name:"images/mcmaster0.jpg", id:1},
    {name:"images/mcmaster1.jpg", id:2},
    {name:"images/mcmaster2.jpg", id:3},
    {name:"images/mcmaster3.jpg", id:4},
    {name:"images/mcmaster4.jpg", id:5},
    {name:"images/mcmaster5.jpg", id:6},
    ]

class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      imageLib:images,
      imageSelected:{name:"images/mcmaster0.jpg",id:"1"},
      curId:6
    }
  }
  render() {
    const HomePage=(props)=>{
      return(
        <Home {...props} 
        imageLib={this.state.imageLib} 
        imageSelected={this.state.imageSelected}
        curId={this.state.curId}
        changeImageSelected={(value)=>this.setState({imageSelected:value})} 
        changeImageLib={(value)=>this.setState({imageLib:value})}
        changeCurId={(value)=>this.setState({curId:value})} 
        />
      );
    }
    return (
      <div >
          <Header/>
            <Switch history={history}>
              <Route path="/home" exact component={HomePage} />
              <Route path="/helpcenter" component={HelpCenter} />
              <Redirect to="/home"></Redirect>
            </Switch>
          <Footer />
      </div>
    );
  }
}

export default Main;
