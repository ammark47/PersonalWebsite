/**
 * Created by ammar on 1/3/2017.
 */
import React from 'react'
import './Jumbotron.css';
import Basketball from './Basketball';
import CustomDragLayer from './CustomDragLayer'




class Jumbotron extends React.Component {


    render() {
        return (
            <div className="background">
                <div className="sixteen wide column jumbotopbuffer">
                </div>
                <div className="">
                    <div className="ui equal width grid">
                        <div className="ui equal width row ">
                            <div className="ui column"/>
                            <div className="ui column">
                                <Basketball/>
                                <CustomDragLayer isDragging=""/>
                            </div>
                            <div className="ui column"/>
                        </div>
                    </div>
                </div>
            </div>
        )
        ;
    }
}


export default Jumbotron