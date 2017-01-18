/**
 * Created by ammar on 1/3/2017.
 */
import React  from 'react';
import { Header, Segment } from 'semantic-ui-react'
import './Header.css';

class HeaderContainer extends React.Component {
    render() {
        return (
            <div className="ui clearing segment">
                <h3 className="ui left floated header" id="left">
                    Ammar Karim
                </h3>
                <h3 className="ui right floated header" id="right">
                    Right
                </h3>
            </div>
        )
    }
}

export default HeaderContainer