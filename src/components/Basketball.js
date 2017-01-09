/**
 * Created by ammar on 1/8/2017.
 */
import React from 'react'
import { Image } from 'semantic-ui-react'
import { PropTypes } from 'react';
import basketball from './images/basketball.png'
import { ItemTypes } from './Constants/Constants';
import { DragSource } from 'react-dnd';

const ballSource = {
    beginDrag(props) {
        return {}
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Basketball extends React.Component {
    render(){
        const { connectDragSource, isDragging } = this.props;
        return connectDragSource(
            <div>
                <Image src={basketball}  shape='circular'  centered/>
            </div>
        );
    }
}

Basketball.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
};

export default DragSource(ItemTypes.BASKETBALL, ballSource, collect)(Basketball);
