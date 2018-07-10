import React from 'react'
import {connect} from 'react-redux'
import {addEntry} from '../redux/actions'
import InternalNav from '../components/InternalNav'
import NewEntryHeader from '../components/NewEntryHeader'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'

// const mapDispatchToProps = dispatch => ({
//     addEntry: (title, content) => dispatch(addEntry(title, content))
// })

let NewEntry = ({ dispatch }) => {
    let title, content


    return (
        <div>
            <InternalNav />
            <NewEntryHeader />
            <div className="container content">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <Form onSubmit={e => {
                            e.preventDefault()
                            if(!title.value.trimLeft() || !content.value.trimLeft()){
                                return
                            }
                            dispatch(addEntry(title.value, content.value))
                            title.value = ''
                            content.value = ''
                        }}>
                            <FormGroup>
                                {/* <Label for='name'>Name</Label> */}
                                <Input className="formStyle" type="title" name="title" placeholder="Title" id="name" innerRef={title}/>
                            </FormGroup>
                            <FormGroup>
                                {/* <Label for='email'>Name</Label> */}
                                <Input className="formStyle textarea" type="textarea" name="content" placeholder="Content" id="content" innerRef={content} />
                            </FormGroup>
                            
                            <Button type='submit' className='mybtn' color='primary'>Add</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

NewEntry = connect()(NewEntry)

export default NewEntry;

{/* <div>
                
                <div className="container content">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <Form onSubmit={e => {
                    e.preventDefault()
                    if(!title.value.trimLeft() || !content.value.trimLeft()){
                        return
                    }
                    dispatch(addEntry(title.value, content.value))
                    title.value = ''
                    content.value = ''
                }}
                >
                                <FormGroup>
                                    <Label for='name'>Name</Label>
                                    <Input className="formStyle" type="title" name="title" placeholder="Title" id="name" ref={node => {title = node}}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for='email'>Name</Label>
                                    <Input className="formStyle textarea" type="textarea" name="content" placeholder="Content" id="content" ref={node => {content = node}}/>
                                </FormGroup>
                                
                                <Button type='submit' className='mybtn' color='primary'>Add</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div> */}

// Original
{/* <form
    onSubmit={e => {
        e.preventDefault()
        if(!title.value.trimLeft() || !content.value.trimLeft()){
            return
        }
        dispatch(addEntry(title.value, content.value))
        title.value = ''
        content.value = ''
    }}
    className='content'            
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
</form> */}