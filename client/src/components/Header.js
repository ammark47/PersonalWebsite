/**
 * Created by ammar on 1/3/2017.
 */
import React  from 'react';
import { Button, Header, Segment } from 'semantic-ui-react'
import './Header.css';
import Mailto from 'react-mailto';
import ContactButton from './ContactButton'
import ContactModal from './ContactModal'

class HeaderContainer extends React.Component {
    render() {
        return (
            <Segment >
                <Header className="" id="" inverted>
                    <h3 className="ui left floated header" id="leftFloater">
                        Ammar Karim
                    </h3>
                    <h3 className="ui right floated header rightFloater" >

                        <a className="ui link" href="https://www.linkedin.com/in/ammarkarim">
                            <i className="linkedin square icon"></i>
                            LinkedIn
                        </a>
                    </h3>
                    <h3 className="ui right floated header rightFloater">
                        <Button inverted color='blue'>
                            <i className="mail icon"></i>
                            Contact Me
                        </Button>
                    </h3>
                </Header>
            </Segment>
        )
    }
}

export default HeaderContainer