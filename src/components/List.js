import React from 'react'
import {Link} from 'react-router-dom'

const List = ({ entries, onLinkClick }) => (
    <ul>
        {entries.map((entry) => {
            return  <li key={entry.id}>
                        <Link  {...entry} onClick={() => onLinkClick(entry.id)} to={'/viewentries/'+entry.id} >{entry.title}</Link>
                        <p>{entry.content}</p>
                        <p>{entry.timestamp}</p>
                        <p>{entry.id}</p>
                    </li>
        })}
    </ul>
)

export default List