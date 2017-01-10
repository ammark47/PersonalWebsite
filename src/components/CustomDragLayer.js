/**
 * Created by ammar on 1/9/2017.
 */
import React, { Component, PropTypes } from 'react';
import ItemTypes from './Constants/Constants';
import Basketball from './Basketball'
import { Image } from 'semantic-ui-react'
import { DragLayer } from 'react-dnd';
import dragged_basketball from './images/dragged_basketball1.jpeg'

const layerStyles = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 100,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
};


 class CustomDragLayer extends React.Component {
     static propTypes = {
         isDragging: PropTypes.bool.isRequired,
     };

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
                    {this.renderItem(itemType)}
            </div>
        );
    }
}


function collect(monitor) {
    return {
        item: monitor.getItem(),
        itemType: monitor.getItemType(),
        currentOffset: monitor.getSourceClientOffset(),
        isDragging: monitor.isDragging()
    };
}

export default DragLayer(collect)(CustomDragLayer);