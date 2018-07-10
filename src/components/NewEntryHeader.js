import React from 'react'

export default class NewEntryHeader extends React.Component{
    render(){
        return(
            <header className="masthead text-white text-center newEntryHeader">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <h1 className="mb-5">What's happening today?</h1>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}