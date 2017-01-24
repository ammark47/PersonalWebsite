/**
 * Created by ammar on 1/23/2017.
 */
import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import ContactForm from './ContactForm'

const ContactModal = () => (
    <Modal trigger={<Button inverted color='blue'>
                        <i className="mail icon"></i>
                        Contact Me
                     </Button>}>
        <Modal.Header>Contact Form</Modal.Header>
        <Modal.Content >
            <ContactForm/>
        </Modal.Content>
    </Modal>
);

export default ContactModal