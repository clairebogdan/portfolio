import React, {Component} from 'react';
import '../../App.css';
import '../styles/Contact.css';
import '../styles/Button.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import * as emailjs from 'emailjs-com';


class Contact extends Component {

    state = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }

    handleSubmit(e) {
        e.preventDefault()

        const { name, email, subject, message } = this.state

        let templateParams = {
            from_name: name,
            to_name: 'bogdanclaire@gmail.com',
            subject: subject,
            message_html: message
        }

        emailjs.send(
            'gmail',
            'template_ok4gegk',
            'templateParams',
            'user_jS6RUTjj8a1tc2Yozo8kf'
        ).then((response) => {
            console.log("Success!", response.status, response.text);
        },
        (err) => {
            console.log("failed...", err);
        });

        this.resetForm()
    }

    resetForm() {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
    }

    handleChange = (param, e) => {
        this.setState({[param]: e.target.value})
    }

    render() {
        return (
            <>
            <h1 className='contact'>CONTACT ME</h1>

            <Form onSubmit={this.handleSubmit.bind(this)}>

                <FormGroup controlId='formBasicName'>
                    <Label for="name">Your name</Label><br/>
                    <Input 
                        type="text" 
                        name="name" 
                        id="name" 
                        value={this.state.name}
                        onChange={this.handleChange.bind(this, 'name')}/>
                </FormGroup>
                <br/>

                <FormGroup controlId='formBasicEmail'>
                    <Label for="email">Your email</Label><br/>
                    <Input 
                        type="email" 
                        name="email" 
                        id="email"
                        value={this.state.email}
                        onChange={this.handleChange.bind(this, 'email')} />
                </FormGroup>
                <br/>

                <FormGroup controlId='formBasicSubject'>
                    <Label for="subject">Subject</Label><br/>
                    <Input 
                        type="text" 
                        name="subject" 
                        id="subject" 
                        value={this.state.subject}
                        onChange={this.handleChange.bind(this, 'subject')}/>
                </FormGroup>
                <br/>

                <FormGroup controlId='formBasicMessage'>
                    <Label for="message">Message</Label><br/>
                    <Input 
                        type="textarea" 
                        name="message" 
                        id="message"
                        value={this.state.message}
                        onChange={this.handleChange.bind(this, 'message')} />
                </FormGroup>
                <br/>

                <Button variant='primary' type='submit'>Send</Button>

            </Form>
            </>
        )
    }
}

export default Contact;