import React from 'react'
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, Button} from 'reactstrap'
import {Link} from 'react-router-dom'

export default class InternalNav extends React.Component {
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
                    <Link className='navlink' to='/viewentries'>View</Link>
                    <Link className='navlink' to='/newentry'>Add</Link>
                    <Button className='mybtn' color='primary' href='/'>Sign Out</Button>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}