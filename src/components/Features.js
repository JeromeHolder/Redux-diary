import React from 'react'

// Icons from fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faGlobe, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
library.add(faGlobe, faLock, faCheckCircle)

export default class Features extends React.Component{
    render(){
        return (
            <div className="container features-icons text-center">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex">
                                <FontAwesomeIcon icon='globe' className="m-auto text-primary fa-5x icon"/>
                            </div>
                            <h3>Access Anywhere</h3>
                            <p className="lead mb-0">All you need is an internet connection!</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex">
                                <FontAwesomeIcon icon='lock' className="m-auto text-primary fa-5x icon"/>
                            </div>
                            <h3>Secure</h3>
                            <p className="lead mb-0">Site encryption ensures only you can access your diary.  Share only what you choose to!</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                            <div className="features-icons-icon d-flex">
                                <FontAwesomeIcon icon='check-circle' className="m-auto text-primary fa-5x icon"/>
                            </div>
                            <h3>Easy to Use</h3>
                            <p className="lead mb-0">Jump right in and make your first entry in minutes!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}