import React from 'react';
import basketball from './components/images/basketball.png'
import './App.css';
import HeaderExampleFloating from './components/Header';
import ImageExampleCircular from './components/Jumbotron';
import CardExampleGroups from './components/HoopColumn'
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';


class App extends React.Component {
  render() {
    return (
        <div>
          <HeaderExampleFloating className="Header"/>
          <ImageExampleCircular basketballimage={basketball}/>
          <div id="hoops">
            <CardExampleGroups/>
          </div>
        </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
