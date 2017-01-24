/**
 * Created by ammar on 1/8/2017.
 */
import React from 'react';
import { Card } from 'semantic-ui-react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import TargetHoop from './TargetHoop'
import ReactDOM from 'react-dom';

class Hoop extends React.Component {
    state = {
        rect: {}
    };

    componentDidMount() {

        const rect = ReactDOM
            .findDOMNode(this.targetHoopRef)
            .getBoundingClientRect();

        this.setState({ rect });

    }


    render() {
        const { projectname, projectdate, projecttools, projectdescript,
                droptargetname, projectbackground, projectgif, projecturl } = this.props;
        const { rect } = this.state;
        return (
                <Card className="column" id="hoop" ref="test" href={projecturl}>
                    <TargetHoop isOver=""
                                projectname={projectname}
                                droptargetname={droptargetname}
                                backgroundimage={{projectbackground}}
                                projectgif={{projectgif}}
                                projecturl={projecturl}
                                cardRect={rect}
                                ref={ref => this.targetHoopRef = ref} />
                    <Card.Content>
                        <Card.Header>
                            {projectname}
                        </Card.Header>
                        <Card.Meta>
                        <span className='date'>
                            {projectdate}
                        </span>
                        </Card.Meta>
                        <Card.Description>
                            {projectdescript}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>

                            {projecttools}

                    </Card.Content>
                </Card>
        );
    }
}

export default Hoop