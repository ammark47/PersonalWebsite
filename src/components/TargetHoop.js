/**
 * Created by ammar on 1/10/2017.
 */
/* eslint-disable */
import React, { PropTypes } from 'react';
import {  Image } from 'semantic-ui-react'
import basketball_hoop from './images/basketball_hoop.jpeg'
// import blue_basketball_hoop from './images/basketball_hoop_blue.gif'
import  ItemTypes  from './Constants/Constants';
import basketball_hoop_gif from './images/basketballgifbigger.gif'

import { DropTarget } from 'react-dnd';

const hoopTarget = {
    canDrop(props, monitor) {
        const clientOffset = monitor.getClientOffset();
        const componentRect = props.cardRect;
        const hoopRectTop = props.cardRectTop;
        return canDropOnHoop(clientOffset, componentRect, hoopRectTop);
    },

    drop(props, monitor, component) {
        //this will fire if the ball goes through the hoop
        //transition to the appropriate link here
        // console.log("hello");
        const hoopImage = {basketball_hoop};
        component.setState({ hoopImage });
        component.forceUpdate();
        

        if (monitor.didDrop()){
            console.log("dropped");
            console.log(component);
            return true;
        }
    }
};


function canDropOnHoop(mousePosition, componentPosition, hoopRectTop) {
    const left = componentPosition.left;
    const right = componentPosition.right;

    const leftRim = (((right-left) / 4) + left) + 30;
    const rightRim = (right - ((right-left) / 4)) - 30;

    const middleRim = (componentPosition.top - componentPosition.bottom) / 2;

    const windowHeight = window.innerHeight ;
    const scrolled = window.scrollY;

    var rimTop = componentPosition.top;

    var rimBottom = (componentPosition.height  * .53) + rimTop;


    var modifiedMousePosition = mousePosition.y + scrolled;


    if (componentPosition.top < windowHeight){
        rimTop = windowHeight + (windowHeight * .05);
        modifiedMousePosition = mousePosition.y + scrolled;
        rimBottom = windowHeight * 1.5;

    }

    return (mousePosition.x > leftRim && mousePosition.x < rightRim &&
        modifiedMousePosition < rimBottom && modifiedMousePosition > rimTop);


}

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        currentOffset: monitor.getClientOffset(),
    };
}

class TargetHoop extends React.Component {
    state = {
        hoopImage : ""
    };

    componentDidMount() {
        const hoopImage = {basketball_hoop_gif};
        this.setState({ hoopImage })
    }

    render() {
        const { hoopImage } = this.state;
        const {connectDropTarget} = this.props;

        const basketballKey = hoopImage[Object.keys(hoopImage)[0]];
        return connectDropTarget(
            <div>
                <div>
                 <Image src={basketballKey}/>
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