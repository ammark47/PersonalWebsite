/**
 * Created by ammar on 1/3/2017.
 */
import React from 'react'
import './Jumbotron.css';
import Basketball from './Basketball';
import CustomDragLayer from './CustomDragLayer'




const ImageExampleCircular = () => (
    <div  className="ui stackable grid" >
        <div className="sixteen wide column background">
            <Basketball/>
            <CustomDragLayer isDragging=""/>
        </div>

    </div>
);


export default ImageExampleCircular