import React, {Component} from 'react'
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, Button} from 'reactstrap';

export default class LandingNav extends Component {
    // State and toggle for Navbar
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  
    render() {
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand className='mynav navbar-brand' href="/">Welcome</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto mynav" navbar>
                    <Button className='mybtn' color='primary' href='/newentry'>Sign In</Button>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}