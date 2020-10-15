import React, {Component} from 'react';
import '../../App.css';
import '../styles/Contact.css';
import '../styles/Button.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import emailjs from 'emailjs-com';
import Clipboard from 'clipboard';

const clip = new Clipboard('.copy');
clip.on("success", function () {
    alert("Claire's email was copied to your clipboard!");
});
clip.on("error", function () {
    alert("Could not copy email address :(");
});

class Contact extends Component {

    
    state = {
        from_name: '',
        from_email: '',
        message: ''
    }

    handleSubmit(e) {
        e.preventDefault()

        const { from_name, from_email, message } = this.state

        let templateParams = {
            from_name: from_name,
            from_email: from_email,
            message: message
        }

        emailjs.send(
            'clairebogdan',
            'clairebogdan',
            templateParams,
            'user_jS6RUTjj8a1tc2Yozo8kf'
        ).then((response) => {
            alert("Your message was sent to Claire!");
        },
        (err) => {
            alert("Error: " + err.text);
        });

        this.resetForm()
    }

    resetForm() {
        this.setState({
            name: '',
            email: '',
            message: ''
        })
    }

    handleChange = (param, e) => {
        this.setState({[param]: e.target.value})
    }

    render() {
        return (
            <>
            <div className='contact-title'><h2>CONTACT ME</h2></div>
            
                <div className='grid-container'>
                    
                    <div className='grid-item'>
                        <div className='tooltip'>
                            <div className="copy" data-clipboard-text='bogdanclaire@gmail.com'>
                                <i class="fas fa-envelope"></i>
                            </div>
                            <span className='tooltiptext'>Copy my email!</span>
                        </div>
                    </div>
                    
                    <div className='grid-item'>
                        <div className='tooltip'>
                            <a className='LI-logo' href="https://www.linkedin.com/in/clairebogdan">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <span className='tooltiptext'>Message me on LinkedIn!</span>
                        </div>
                    </div>
            </div>
            
            <Form onSubmit={this.handleSubmit.bind(this)}>
                <FormGroup controlId='formBasicName'>
                    <Label for="from_name">Your name</Label><br/>
                    <Input 
                        type="text" 
                        name="from_name" 
                        id="name" 
                        value={this.state.name}
                        onChange={this.handleChange.bind(this, 'from_name')}/>
                </FormGroup>
                <br/>

                <FormGroup controlId='formBasicEmail'>
                    <Label for="from_email">Your email</Label><br/>
                    <Input 
                        type="email" 
                        name="from_email" 
                        id="email"
                        value={this.state.email}
                        onChange={this.handleChange.bind(this, 'from_email')} />
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