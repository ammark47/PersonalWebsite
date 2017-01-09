/**
 * Created by ammar on 1/8/2017.
 */
import React, { Component, PropTypes } from 'react';
import basketball_hoop from './images/basketball_hoop.jpeg'
import { Button, Card, Image, Icon } from 'semantic-ui-react'
import { ItemTypes } from './Constants/Constants';
import { DropTarget } from 'react-dnd';


const hoopTarget = {
    drop(props) {
        console.log("dropped here");
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}


class Hoop extends React.Component {
    render() {

        const { connectDropTarget, isOver } = this.props;
        return connectDropTarget(
            <div className="column">
                <Card >
                    <Image src={basketball_hoop}/>
                    <Card.Content>
                        <Card.Header>
                            Matthew
                        </Card.Header>
                        <Card.Meta>
                        <span className='date'>
                          Joined in 2015
                        </span>
                        </Card.Meta>
                        <Card.Description>
                            Matthew is a musician living in Nashville.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user'/>
                            22 Friends
                        </a>
                    </Card.Content>
                </Card>
            </div>
        );
    }
}

Hoop.propTypes = {
    isOver: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.BASKETBALL, hoopTarget, collect)(Hoop);