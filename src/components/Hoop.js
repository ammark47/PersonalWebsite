/**
 * Created by ammar on 1/8/2017.
 */
import React from 'react';
import { Card } from 'semantic-ui-react'
import TargetHoop from './TargetHoop'
import ReactDOM from 'react-dom';

class Hoop extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            hoopRect: {}
        }
    }

    componentDidMount() {
        const scrollTop = window.pageYOffset;
        var hoopRect = ReactDOM.findDOMNode(this.refs.test).getBoundingClientRect();
        // console.log(hoopRect);
        this.setState({
            hoopRect: hoopRect,
            hoopRectTop: (ReactDOM.findDOMNode(this.refs.hoop).getBoundingClientRect().top + scrollTop)
        });

    }

    render() {
        const { projectname, projectdate, projecttools, projectdescript, droptargetname } = this.props;
        return (
                <Card className="column" id="hoop" ref="test">
                    <TargetHoop isOver=""
                                projectname={projectname}
                                droptargetname={droptargetname}
                                cardRect={this.state.hoopRect}
                                cardRectTop={this.state.hoopRectTop}
                                ref="hoop"/>
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