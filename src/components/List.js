import React from 'react'
import {Link} from 'react-router-dom'
import InternalNav from './InternalNav'
import ListHeader from './ListHeader'

// Gets the list of entries in state and prints the list to the DOM
    // Each title is a link with the onclick setting the display value in state
const List = ({ entries, onLinkClick }) => (
    <div>
        <InternalNav />
        <ListHeader />
        <div className='container content'>
            {entries.map((entry) => {
                return  <div className="row" key={entry.id}>
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <div className="post-preview">
                                    <Link to={'/viewentries/'+entry.id} {...entry} onClick={() => onLinkClick(entry.id)} className='post-title'>{entry.title}</Link>
                                    <p className="post-meta">Posted on {entry.timestamp}</p>
                                </div>
                                <hr/>
                            </div>
                        </div>
            })}
        </div>
    </div>
)

export default List