/**
 * Created by ammar on 1/10/2017.
 */
import React, { PropTypes } from 'react';
import {  Image } from 'semantic-ui-react'
import basketball_hoop from './images/basketball_hoop.jpeg'
import blue_basketball_hoop from './images/basketball_hoop_blue.gif'
import  ItemTypes  from './Constants/Constants';
import ReactDOM from 'react-dom';
import basketball_hoop_gif from './images/basketballgifbigger.gif'

import { DropTarget } from 'react-dnd';

const hoopTarget = {
    canDrop(props, monitor) {

        return {}
    },

    drop(props, monitor) {
        console.log(props.projectname);
        console.log(monitor.getClientOffset());
        console.log(this.state);
    }
};

function canDropOnHoop(mousePosition, componentPosition) {

}

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        currentOffset: monitor.getClientOffset(),
    };
}

class TargetHoop extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            hoopRect: {}
        }
    }


    componentDidMount() {
        this.setState({
            hoopRect: ReactDOM.findDOMNode(this.refs.hoop).getBoundingClientRect()
        });

    }

    render() {

        const {connectDropTarget, monitor, isOver} = this.props;

        // console.log(this.state.hoopRect);

        return connectDropTarget(
            <div>
                <div ref="hoop">
                 <Image src={basketball_hoop_gif}/>
                </div>
            </div>
        );
    }
}

TargetHoop.propTypes = {
    isOver: PropTypes.bool.isRequired,
    currentOffset: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
    }),
};

export default DropTarget(ItemTypes.BASKETBALL, hoopTarget, collect)(TargetHoop);