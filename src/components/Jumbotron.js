/**
 * Created by ammar on 1/3/2017.
 */
import React from 'react'
import { Image } from 'semantic-ui-react'
import { PropTypes } from 'react'
import basketball from './images/basketball.png'
import gymbackground from './images/gym_background.jpg'
import './Jumbotron.css';
import Basketball from './Basketball';



const ImageExampleCircular = () => (
    <div  className="ui stackable grid" >
        <div className="sixteen wide column background">
            {/*<Image src={gymbackground} fluid/>*/}
            <div className="sixteen wide column"  id="back">

            </div>
            <Basketball />
        </div>

    </div>
);


export default ImageExampleCircular