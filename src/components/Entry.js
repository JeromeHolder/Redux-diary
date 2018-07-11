import React from 'react'
import InternalNav from './InternalNav'
import EntryHeader from './EntryHeader'

// Gets the entry to display and prints to the DOM
let SingleEntry = ({toDisplay}) => {
    const {title, content, timestamp} = toDisplay[0]
    return (
        <div>
            <InternalNav />
            <EntryHeader title={title} timestamp={timestamp}/>
            <article className='content'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            {content}
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
export default SingleEntry