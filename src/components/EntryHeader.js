import React from 'react'

export default class EntryHeader extends React.Component{
    render(){
        return(
            <header className="masthead text-white text-center entryHeader">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <h1 className="mb-5">{this.props.title}</h1>
                        </div>
                        <div className="col-xl-9 mx-auto">
                            <h3 className="mb-5">{this.props.timestamp}</h3>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}