/**
 * Created by ammar on 1/3/2017.
 */
import React  from 'react';
import './Header.css';
import Mailto from 'react-mailto';

class HeaderContainer extends React.Component {
    render() {
        return (
            <div className="ui clearing segment" id="ceiling">
                <h3 className="ui left floated header" id="leftFloater">
                    Ammar Karim
                </h3>
                <h3 className="ui right floated header rightFloater" >

                    <a className="ui link" href="https://www.linkedin.com/in/ammarkarim">
                        <i className="linkedin square icon"></i>
                        LinkedIn
                    </a>
                </h3>
                <h3 className="ui right floated header rightFloater">
                    <Mailto email="me@ammarkarim.com" obfuscate={true}>
                        <i className="mail icon"></i>
                        Contact Me
                    </Mailto>
                </h3>
            </div>
        )
    }
}

export default HeaderContainer