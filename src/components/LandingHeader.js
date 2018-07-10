import React from 'react'
import {Button} from 'reactstrap'

export default class LandingHeader extends React.Component{
    render(){
        return(
            <header className="masthead text-white text-center landingHeader">
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
                                        <input type="email" className="form-control form-control-lg mybtn" placeholder="Enter your email..."/>
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <Button type="submit" className="btn btn-block btn-lg btn-primary mybtn" color='primary'>Sign Up!</Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}