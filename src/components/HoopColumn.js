/**
 * Created by ammar on 1/8/2017.
 */
import React from 'react';
import {  Card } from 'semantic-ui-react'
import Hoop from './Hoop';
import  SquadStreamInfo  from './Constants/SquadStreamConstants/SquadStreamConstants';



class HoopColumn extends React.Component {
    render() {

        return (
            <div className="ui equal width grid" name="hoopColumns">
                <Card.Group className="equal width row">
                    <Hoop isOver=""
                          projectname={SquadStreamInfo.NAME}
                          projectdate={SquadStreamInfo.DATE}
                          projecttools={SquadStreamInfo.TOOLS}
                          projectdescript={SquadStreamInfo.DESCRIPT}
                          droptargetname="squadstream"
                    />
                    <Hoop isOver=""/>
                    <Hoop isOver=""/>
                </Card.Group>
            </div>
        );
    }
}


export default HoopColumn