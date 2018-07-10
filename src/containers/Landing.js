import React, {Component} from 'react'
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, Button} from 'reactstrap';



// Icons from fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faGlobe, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
library.add(faGlobe, faLock, faCheckCircle)
library.add(faFacebookF, faTwitter, faInstagram)



export default class Landing extends Component {
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
      <div>
        {/* Nav */}
        <Navbar color="light" light expand="md">
          <NavbarBrand className='mynav navbar-brand' href="/">Welcome</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto mynav" navbar>
              <Button color='primary' href='/'>Sign In</Button>
            </Nav>
          </Collapse>
        </Navbar>

        {/* Main Picture */}
        <header className="masthead text-white text-center">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h1 className="mb-5">Keep your diary online!  Secure access from anywhere in the world!</h1>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form>
                  <div className="form-row">
                    <div className="col-12 col-md-9 mb-2 mb-md-0">
                      <input type="email" className="form-control form-control-lg" placeholder="Enter your email..."/>
                    </div>
                    <div className="col-12 col-md-3">
                      <Button type="submit" className="btn btn-block btn-lg btn-primary" color='primary'>Sign Up!</Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </header>

        {/* Features */}
        <div className="container features-icons text-center">
          
          <div className="row">

            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <FontAwesomeIcon icon='globe' className="m-auto text-primary fa-5x"/>
                </div>
                <h3>Access Anywhere</h3>
                <p className="lead mb-0">All you need is an internet connection!</p>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <FontAwesomeIcon icon='lock' className="m-auto text-primary fa-5x"/>
                </div>
                <h3>Secure</h3>
                <p className="lead mb-0">Site encryption ensures only you can access your diary.  Share only what you choose to!</p>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <FontAwesomeIcon icon='check-circle' className="m-auto text-primary fa-5x"/>
                </div>
                <h3>Easy to Use</h3>
                <p className="lead mb-0">Jump right in and make your first entry in minutes!</p>
              </div>
            </div>

          </div>

        </div>

        {/* Footer */}
        <footer className="footer bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
                <ul className="list-inline mb-2">
                  <li className="list-inline-item">
                    <a href="/">About</a>
                  </li>
                  <li className="list-inline-item">&sdot;</li>
                  <li className="list-inline-item">
                    <a href="/contact">Contact</a>
                  </li>
                  <li className="list-inline-item">&sdot;</li>
                  <li className="list-inline-item">
                    <a href="/">Terms of Use</a>
                  </li>
                  <li className="list-inline-item">&sdot;</li>
                  <li className="list-inline-item">
                    <a href="/">Privacy Policy</a>
                  </li>
                </ul>
                <p className="text-muted small mb-4 mb-lg-0">&copy; Jerome Holder 2018. All Rights Reserved.</p>
              </div>
              <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item mr-3">
                    <a href="/">
                      <FontAwesomeIcon icon={['fab','facebook-f']} className="fa fa-2x fa-fw"/>
                    </a>
                  </li>
                  <li className="list-inline-item mr-3">
                    <a href="/">
                      <FontAwesomeIcon icon={['fab','twitter']} className="fa fa-2x fa-fw"/>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/">
                      <FontAwesomeIcon icon={['fab','instagram']} className="fa fa-2x fa-fw"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>


      </div>
    );
  }
}