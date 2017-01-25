/**
 * Created by ammar on 1/24/2017.
 */
import React  from 'react'
import { Button, Form, Message, TextArea } from 'semantic-ui-react'


class ContactForm extends React.Component {
    state = { formData: {}, didSubmit: false}

    handleChange = (e, { value }) => {
        this.setState({ value })
    }

    handleSubmit = (e, { formData }) => {
        e.preventDefault()
        const didSubmit = true
        fetch('/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({formData})
        });
        this.setState({ formData, didSubmit })

    }

    render() {
        const { formData, value, didSubmit } = this.state
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Input name="First name" label='First name' placeholder='First name' required/>
                    <Form.Input name="Last name" label='Last name' placeholder='Last name' />
                </Form.Group>
                <Form.Group widths='2'>
                    <Form.Input name="Email" label='Email' placeholder='Email' required />
                </Form.Group>
                <Form.Group widths='2'>
                    <Form.Input name="Subject" label='Subject' placeholder='Subject' />
                </Form.Group>
                <Form.TextArea name='Message' label='Message' placeholder="How's life?" rows='3' required />

                <Button primary type='submit'>Submit</Button>

                { didSubmit ? (<Message> <pre>Submitted! I'll get back to you as soon as possible.</pre></Message>): (console.log(""))}

            </Form>
        )
    }
}

export default ContactForm