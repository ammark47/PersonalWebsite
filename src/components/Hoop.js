/**
 * Created by ammar on 1/8/2017.
 */
import React from 'react';
import { Card } from 'semantic-ui-react'
import TargetHoop from './TargetHoop'
import ReactDOM from 'react-dom';

class Hoop extends React.Component {
    state = {
        rect: {},
        offsetY: 0
    }

    componentDidMount() {

        const { documentElement, body } = document;

        //remember: window.innerHeight and window.pageYOffset are in the global
        //scope as innerHeight and pageYOffset anyway, because window is the global object.

        const scrollTop = pageYOffset || documentElement.scrollTop || body.scrollTop;

        const rect = ReactDOM
            .findDOMNode(this.targetHoopRef)
            .getBoundingClientRect();


        // const offsetY = rect.top + scrollTop + pageYOffset;
        const offsetY = 0;
        this.setState({ rect, offsetY });

    }

    componentDidUpdate() {
        const rect = ReactDOM
            .findDOMNode(this.targetHoopRef)
            .getBoundingClientRect();

        // console.log(rect);
    }



    render() {
        const { projectname, projectdate, projecttools, projectdescript, droptargetname } = this.props;
        const { rect, offsetY } = this.state;
        return (
                <Card className="column" id="hoop" ref="test">
                    <TargetHoop isOver=""
                                projectname={projectname}
                                droptargetname={droptargetname}
                                cardRect={rect}
                                offsetY={offsetY}
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
                        <a>
                            {projecttools}
                        </a>
                    </Card.Content>
                </Card>
        );
    }
}

export default Hoop