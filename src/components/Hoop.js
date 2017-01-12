/**
 * Created by ammar on 1/8/2017.
 */
import React from 'react';
import { Card, Icon } from 'semantic-ui-react'
import TargetHoop from './TargetHoop'

class Hoop extends React.Component {
    render() {
        const { projectname, projectdate, projecttools, projectdescript } = this.props;
        return (
                <Card className="column" id="hoop">
                    <TargetHoop isOver="" projectname={projectname}/>
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