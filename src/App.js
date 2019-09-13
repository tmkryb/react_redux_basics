import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SimpleComponent } from './components/simpleComponent';
import SimpleContainer from './containers/simpleContainer';
import SimplePresenter from './containers/simpleContainerPresenter';

class App extends React.Component {

  constructor(){
    super();
    this.state = {};
  }


  render(){
    return (
      <div className="App">
        {/* <label>Text 1</label> <input onKeyUp={(e) => {this.setState({...this.state, text1: e.target.value})}} type="text"></input>
        <label>Text 2</label> <input onKeyUp={(e) => {this.setState({...this.state, text2: e.target.value})}} type="text"></input>
        <SimpleComponent prop1={this.state.text1} prop2={this.state.text2}></SimpleComponent> */}
        <SimpleContainer></SimpleContainer>
        <SimplePresenter></SimplePresenter>
      </div>
    );
  }
}

export default App;
