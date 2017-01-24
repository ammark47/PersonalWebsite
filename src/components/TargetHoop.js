/**
 * Created by ammar on 1/10/2017.
 */
/* eslint-disable */
import React, { PropTypes } from 'react';
import {  Image } from 'semantic-ui-react'
import  ItemTypes  from './Constants/Constants';
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
        console.log("hello");
        const basketballKey = props.projectgif[Object.keys(props.projectgif)[0]];
        const hoopImage = basketballKey;

        console.log("setting state");

        component.setState({ hoopImage });

        // switch (props.projectname) {
        //     case "Squad Stream" || "Github Profile":
        //         setTimeout(function() { window.location.href = props.projecturl; }.bind(component), 2000);
        //     case "Resume":
        //         setTimeout(function() { component.setState({isModalOpen: true}); }.bind(component), 2000);
        //         break;
        // }

        setTimeout(function() { window.location.href = props.projecturl; }.bind(component), 2000);

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

    var windowHeight = window.innerHeight ;
    const scrolled = window.scrollY;

    var rimTop = componentPosition.top;

    var rimBottom = (componentPosition.height  * .53) + rimTop;


    var modifiedMousePosition = mousePosition.y + scrolled;


    // if (componentPosition.top < windowHeight){
        rimTop = windowHeight + (windowHeight * .05);
        modifiedMousePosition = mousePosition.y + scrolled;
        rimBottom = windowHeight * 1.5;
        console.log("here")
    // }

    console.log("window height " + windowHeight)
    console.log("mouse " + modifiedMousePosition)
    console.log("rimbottom " + rimBottom);
    console.log("height " + componentPosition.height)
    console.log(componentPosition)
    // console.log(modifiedMousePosition > rimTop)
    // console.log(mousePosition.x > leftRim && mousePosition.x < rightRim &&
    //     modifiedMousePosition < rimBottom && modifiedMousePosition > rimTop)

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
        hoopImage : "",
        isModalOpen: false
    };

    componentDidMount() {

        const basketballKey = this.props.backgroundimage[Object.keys(this.props.backgroundimage)[0]];
        const hoopImage = basketballKey;

        this.setState({ hoopImage })
    }

    render() {
        const { hoopImage, isModalOpen } = this.state;
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