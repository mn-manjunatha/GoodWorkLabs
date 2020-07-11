import React, { Component } from 'react';
import './App.css';
import Flexi from './components/Flexi'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flexiConfig: []
    }
  }

  onFlexiSubmit = (newItem) => {
    this.setState({ flexiConfig: [...this.state.flexiConfig, newItem] })
  }

  componentDidMount() {
    this.setState({
      flexiConfig: [
        {
          "id": 0,
          "person_name": 'Ram',
          "states": "Maharashtra",
        },
        {
          "id": 1,
          "person_name": 'Gopal',
          "states": "Kerala",
        }
      ]
    })
  }

  render() {
    return (
      <>
        <Flexi onSubmit={this.onFlexiSubmit} config={this.state.flexiConfig} />
      </>
    );
  }
}

export default App;
