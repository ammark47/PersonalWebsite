/**
 * Created by ammar on 1/23/2017.
 */
import React  from 'react';
import { Button, Header, Segment } from 'semantic-ui-react'
import './Header.css';
import ContactModal from './ContactModal'

class ImprovedHeader extends React.Component {

    handleClick = (e) => window.location.href = "https://www.linkedin.com/in/ammarkarim";

    render() {
        return (
            <Segment inverted id="segment">

                    <Header as='h1' floated="left" id="name">
                        Ammar Karim
                    </Header>
                    <Header floated="right" className="rightFloater" >
                        <Button inverted color='blue' onClick={this.handleClick}>
                            <i className="linkedin square icon"></i>
                            LinkedIn
                        </Button>
                    </Header>
                    <Header floated="right" className="rightFloater">
                        <ContactModal/>
                    </Header>

            </Segment>
        )
    }
}

export default ImprovedHeader