import React from 'react'
import LandingNav from './LandingNav'
// import InternalNav from './InternalNav'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'

export default class Contact extends React.Component{
    render(){
        return(
            <div>
                {/* Conditional Nav render needed */}
                <LandingNav />
                {/* <InternalNav /> */}
                <div className="container content">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                            <Form>
                                <FormGroup>
                                    <Label for='name' hidden>Name</Label>
                                    <Input className="formStyle" type="name" name="name" placeholder="Name" id="name" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for='email' hidden>Name</Label>
                                    <Input className="formStyle" type="email" name="email" placeholder="Email" id="email" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for='phonenumber' hidden>Name</Label>
                                    <Input className="formStyle" type="phonenumber" name="phonenumber" placeholder="Phone Number" id="phonenumber" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for='message' hidden>Name</Label>
                                    <Input className="formStyle textarea" type="textarea" name="message" placeholder="Message" id="message" />
                                </FormGroup>
                                <Button className='mybtn' color='primary'>Send</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}