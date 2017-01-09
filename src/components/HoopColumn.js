/**
 * Created by ammar on 1/8/2017.
 */
import React, { Component, PropTypes } from 'react';
import basketball_hoop from './images/basketball_hoop.jpeg'
import { Button, Card, Image, Icon } from 'semantic-ui-react'
import { ItemTypes } from './Constants/Constants';
import { DropTarget } from 'react-dnd';
import Hoop from './Hoop';


class HoopColumn extends React.Component {
    render() {

        return (
            <div className="ui equal width grid">
                <Card.Group className="equal width row">
                    <Hoop isOver=""/>
                    <Hoop isOver=""/>
                    <Hoop isOver=""/>
                </Card.Group>
            </div>
        );
    }
}


export default HoopColumn