import React from 'react';
import {connect} from 'react-redux';
import {addEntry} from '../redux/actions';
import {Link} from 'react-router-dom'

let NewEntry = ({ dispatch }) => {
    let title, content


    return (
        <div>
            <Link to="/viewentries">link</Link>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if(!title.value.trimLeft() || !content.value.trimLeft()){
                        return
                    }
                    dispatch(addEntry(title.value, content.value))
                    title.value = ''
                    content.value = ''
                }}            
            >
                <input
                    ref={node => {
                        title = node
                    }}
                    placeholder='Entry Title'
                />
                <input
                    ref={node => {
                        content = node
                    }}
                    placeholder='Content'
                />
                <button type='submit'>Add Entry</button>
            </form>
        </div>
    )
}

NewEntry = connect()(NewEntry)

export default NewEntry;