/**
 * Created by ammar on 1/9/2017.
 */
import React, { PropTypes } from 'react';
import ItemTypes from './Constants/Constants';
import { Image } from 'semantic-ui-react'
import { DragLayer } from 'react-dnd';
import dragged_basketball from './images/dragged_basketbal2.png'

const layerStyles = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 100,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
};

function getItemStyles(props) {
    const { currentOffset } = props;
    if (!currentOffset) {
        return {
            display: 'none'
        };
    }

    const { x, y } = currentOffset;
    const transform = `translate(${x}px, ${y}px)`;
    return {
        transform: transform,
        WebkitTransform: transform
    };
}


 class CustomDragLayer extends React.Component {

    renderItem(type) {
        switch (type) {
            case ItemTypes.BASKETBALL:
                return (
                    <Image src={dragged_basketball} size="small" shape="circular"/>
                );
            default:
                return null;
        }
    }

    render() {
        const {itemType, isDragging } = this.props;
        if (!isDragging) {
            return null;
        }

        return (
            <div style={layerStyles}>
                <div style={getItemStyles(this.props)}>
                    {this.renderItem(itemType)}
                </div>
            </div>
        );
    }
}

CustomDragLayer.propTypes = {
    itemType: PropTypes.string,
    currentOffset: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
    }),
    isDragging: PropTypes.bool.isRequired
};



function collect(monitor) {
    return {
        item: monitor.getItem(),
        itemType: monitor.getItemType(),
        currentOffset: monitor.getSourceClientOffset(),
        isDragging: monitor.isDragging()
    };
}

export default DragLayer(collect)(CustomDragLayer);