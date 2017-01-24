/**
 * Created by ammar on 1/8/2017.
 */
import React from 'react';
import {  Card } from 'semantic-ui-react'
import Hoop from './Hoop';
import  SquadStreamInfo  from './Constants/SquadStreamConstants';
import GithubInfo from './Constants/GithubConstants';
import ResumeInfo from './Constants/ResumeConstants'

import squadstream_static_backboard from './images/squadstream_basketball_image.gif'
import squadstream_gif from './images/squadstreambasketballgif.gif'

import github_static_background from './images/github_static_background.gif'
import github_gif from './images/basketball_github.gif'

import resume_static from './images/resume_static_background.gif'
import resume_gif from './images/resume_gif.gif'


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
                          projectbackground={{squadstream_static_backboard}}
                          projectgif={{squadstream_gif}}
                          projecturl={SquadStreamInfo.URL}
                          droptargetname="squadstream"
                    />
                    <Hoop isOver=""
                          projectname={GithubInfo.NAME}
                          projectdate={GithubInfo.DATE}
                          projecttools={GithubInfo.TOOLS}
                          projectdescript={GithubInfo.DESCRIPT}
                          projectbackground={{github_static_background}}
                          projectgif={{github_gif}}
                          projecturl={GithubInfo.URL}
                          droptargetname="github"/>
                    <Hoop isOver=""
                          projectname={ResumeInfo.NAME}
                          projectdate={ResumeInfo.DATE}
                          projecttools={ResumeInfo.TOOLS}
                          projectdescript={ResumeInfo.DESCRIPT}
                          projectgif={{resume_gif}}
                          projectbackground={{resume_static}}
                          projecturl={ResumeInfo.URL}
                          droptargetname="github"/>
                </Card.Group>
            </div>
        );
    }
}


export default HoopColumn