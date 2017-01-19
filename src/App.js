import React from 'react';
import basketball from './components/images/basketball.png'
import './App.css';
import HeaderContainer from './components/Header';
import Jumbotron from './components/Jumbotron';
import CardExampleGroups from './components/HoopColumn'
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';



class App extends React.Component {
    render() {
    return (
        <div>
          <HeaderContainer className="Header"/>
          <Jumbotron basketballimage={basketball}/>
          <div id="hoops">
            <CardExampleGroups/>
          </div>
        </div>
    );
    }
}

export default DragDropContext(HTML5Backend)(App);
