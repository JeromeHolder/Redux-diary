import React from 'react'

let SingleEntry = ({toDisplay}) => {
    const {title, content} = toDisplay[0]
    return (
        <li>
            <h1>{title}</h1>
            <h3>{content}</h3>
        </li>
    )
}
export default SingleEntry