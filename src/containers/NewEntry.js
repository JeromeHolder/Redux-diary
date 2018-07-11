import React from 'react'
import {connect} from 'react-redux'
import {addEntry} from '../redux/actions'
import InternalNav from '../components/InternalNav'
import NewEntryHeader from '../components/NewEntryHeader'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'

let NewEntry = ({ dispatch }) => {
    return (
        <div>
            <InternalNav />
            <NewEntryHeader />
            <div className="container content">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <Form onSubmit={e => {
                            e.preventDefault()
                            if(!this.title.value.trimLeft() || !this.content.value.trimLeft()){
                                return
                            }
                            dispatch(addEntry(this.title.value, this.content.value))
                            this.title.value = ''
                            this.content.value = ''
                        }}>
                            <FormGroup>
                                <Label for='title' hidden>Name</Label>
                                <Input className="formStyle" type="title" name="title" placeholder="Title" id="title" innerRef={input => this.title = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label for='content' hidden>Name</Label>
                                <Input className="formStyle textarea" type="textarea" name="content" placeholder="Content" id="content" innerRef={input => this.content = input} />
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