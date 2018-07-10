import React from 'react'
import {Link} from 'react-router-dom'

// Icons from fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
library.add(faFacebookF, faTwitter, faInstagram)

export default class Footer extends React.Component{
    render(){
        return (
            <footer className="footer bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
                            <ul className="list-inline mb-2">
                            <li className="list-inline-item">
                                <Link to="/">About</Link>
                            </li>
                            <li className="list-inline-item">&sdot;</li>
                            <li className="list-inline-item">
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li className="list-inline-item">&sdot;</li>
                            <li className="list-inline-item">
                                <Link to="/">Terms of Use</Link>
                            </li>
                            <li className="list-inline-item">&sdot;</li>
                            <li className="list-inline-item">
                                <Link to="/">Privacy Policy</Link>
                            </li>
                            </ul>
                            <p className="text-muted small mb-4 mb-lg-0">&copy; Jerome Holder 2018. All Rights Reserved.</p>
                        </div>
                        <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
                            <ul className="list-inline mb-0">
                            <li className="list-inline-item mr-3">
                                <Link to="/">
                                <FontAwesomeIcon icon={['fab','facebook-f']} className="fa fa-2x fa-fw"/>
                                </Link>
                            </li>
                            <li className="list-inline-item mr-3">
                                <Link to="/">
                                <FontAwesomeIcon icon={['fab','twitter']} className="fa fa-2x fa-fw"/>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/">
                                <FontAwesomeIcon icon={['fab','instagram']} className="fa fa-2x fa-fw"/>
                                </Link>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}