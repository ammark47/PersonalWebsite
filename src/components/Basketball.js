/**
 * Created by ammar on 1/8/2017.
 */
/* eslint-disable */
import React from 'react'
import { Image } from 'semantic-ui-react'
import { PropTypes } from 'react';
import basketball from './images/basketball1.jpg'
import ItemTypes from './Constants/Constants';
import Scroll from 'react-scroll';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';


const ballSource = {
    beginDrag(props, monitor, component) {
        var Element = Scroll.Element;
        var scroll = Scroll.animateScroll;

        scroll.scrollTo(600, {
            duration: 1500,
            delay: 100,
            smooth: true,
        });

        component.test();
        return {};

    },
    isDragging(props, monitor){
        var Element = Scroll.Element;
        var scroller = Scroll.scroller;

        return true;
    },
    endDrag(props, monitor, component) {
        // console.log("end drag " + monitor.didDrop());
    }

};

function getStyles(props) {
    const { left, top, isDragging } = props;
    const transform = `translate3d(${left}px, ${top}px, 0)`;

    return {

        transform: transform,
        WebkitTransform: transform,
        // IE fallback: hide the real node using CSS when dragging
        // because IE will ignore our custom "empty image" drag preview.
        opacity: isDragging ? 0 : 1,
    };
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    }
}


 class Basketball extends React.Component {
    componentDidMount() {
        // Use empty image as a drag preview so browsers don't draw it
        // and we can draw whatever we want on the custom drag layer instead.
        this.props.connectDragPreview(getEmptyImage(), {
            // IE fallback: specify that we'd rather screenshot the node
            // when it already knows it's being dragged so we can hide it with CSS.
            captureDraggingState: true
        });
    }

    test(){

    }

    render(){
        const { connectDragSource, isDragging } = this.props;
        return connectDragSource(
            <div style={getStyles(this.props)}>
                <Image src={basketball}  size='medium' shape='circular'  centered/>
            </div>
        );
    }
}

Basketball.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired

};

export default DragSource(ItemTypes.BASKETBALL, ballSource, collect)(Basketball);
