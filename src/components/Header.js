/**
 * Created by ammar on 1/3/2017.
 */
import React  from 'react';
import { Header, Segment } from 'semantic-ui-react'
import './Header.css';

class HeaderContainer extends React.Component {
    render() {
        return (
        <Segment clearing>
            <Header as='h2' size="huge" textAlign="center">
                Ammar Karim
            </Header>
        </Segment>
        )
    }
}

export default HeaderContainer