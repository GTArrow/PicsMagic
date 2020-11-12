import React, {Component} from 'react';
import {Navbar, Nav, NavbarToggler, Collapse,NavItem, NavbarBrand} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen:false
        };
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render(){
        return(
            <React.Fragment>
            <Navbar dark expand="md">
            <div className="row">
                <NavbarToggler onClick={()=>this.toggleNav()}/>
                <NavbarBrand className="ml-4" href="/"> 
                    <img src="images/logo.png" height="40"  alt="PicsMagic"/>
                </NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <span className="fa fa-home fa-lg"></span> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/helpcenter">
                                <span className="fa fa-info-circle fa-lg"></span> Help Center
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
            </Navbar>
            </React.Fragment>
        );
    }
}
export default Header;