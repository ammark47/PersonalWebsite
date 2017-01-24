import React from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron';
import CardExampleGroups from './components/HoopColumn'
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import ImprovedHeader from './components/ImprovedHeader'


class App extends React.Component {
    render() {
    return (
        <div>
          <ImprovedHeader/>
          <Jumbotron />
          <div id="hoops">
            <CardExampleGroups/>
          </div>
        </div>
    );
    }
}

export default DragDropContext(HTML5Backend)(App);
