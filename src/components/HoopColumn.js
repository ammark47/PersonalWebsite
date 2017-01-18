/**
 * Created by ammar on 1/8/2017.
 */
import React from 'react';
import {  Card } from 'semantic-ui-react'
import Hoop from './Hoop';
import  SquadStreamInfo  from './Constants/SquadStreamConstants';
import GithubInfo from './Constants/GithubConstants';
import ResumeInfo from './Constants/ResumeConstants'



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
                    <Hoop isOver=""
                          projectname={GithubInfo.NAME}
                          projectdate={GithubInfo.DATE}
                          projecttools={GithubInfo.TOOLS}
                          projectdescript={GithubInfo.DESCRIPT}
                          droptargetname="github"/>
                    <Hoop isOver=""
                          projectname={ResumeInfo.NAME}
                          projectdate={ResumeInfo.DATE}
                          projecttools={ResumeInfo.TOOLS}
                          projectdescript={ResumeInfo.DESCRIPT}
                          droptargetname="github"/>
                </Card.Group>
            </div>
        );
    }
}


export default HoopColumn