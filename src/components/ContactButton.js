/**
 * Created by ammar on 1/23/2017.
 */
import React  from 'react';
import { Button } from 'semantic-ui-react'
import './Header.css';

class ContactButton extends React.Component {
    render() {
        return (
                <h3 className="ui right floated header rightFloater">
                    <Button inverted color='blue'>
                        <i className="mail icon"></i>
                        Contact Me
                    </Button>
                </h3>
        )
    }
}

export default ContactButton