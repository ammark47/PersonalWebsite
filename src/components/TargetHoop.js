/**
 * Created by ammar on 1/10/2017.
 */
/* eslint-disable */
import React, { PropTypes } from 'react';
import {  Image } from 'semantic-ui-react'
// import basketball_hoop from './images/basketball_hoop.jpeg'
// import blue_basketball_hoop from './images/basketball_hoop_blue.gif'
import  ItemTypes  from './Constants/Constants';
import ReactDOM from 'react-dom';
import basketball_hoop_gif from './images/basketballgifbigger.gif'

import { DropTarget } from 'react-dnd';

const hoopTarget = {
    canDrop(props, monitor) {
        const clientOffset = monitor.getClientOffset();
        const componentRect = props.cardRect;
        const hoopRectTop = props.cardRectTop;
        return canDropOnHoop(clientOffset, componentRect, hoopRectTop);
    },

    drop(props, monitor) {
        //this will fire if the ball goes through the hoop
        //transition to the appropriate link here
    }
};


function canDropOnHoop(mousePosition, componentPosition, hoopRectTop) {
    const left = componentPosition.left;
    const right = componentPosition.right;

    const leftRim = (((right-left) / 4) + left) + 30;
    const rightRim = (right - ((right-left) / 4)) - 30;

    const middleRim = (componentPosition.top - componentPosition.bottom) / 2;
    // console.log("top " + componentPosition.top);
    // console.log("bottom " + componentPosition.bottom);

    const scrollTop = window.pageYOffset ;

    // console.log(mousePosition.y, scrollTop, componentPosition.top);
    // console.log(hoopRectTop);
    // console.log("target top " + componentPosition.top);
    // console.log("windowtop " + scrollTop);
    // console.log(componentPosition);

    if (mousePosition.x > leftRim && mousePosition.x < rightRim){
        return true;
    }
    // console.log("mouse " + mousePosition.x, "leftrim " + leftRim, "rightRim " + rightRim);
    return false;
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

        const {connectDropTarget} = this.props;

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