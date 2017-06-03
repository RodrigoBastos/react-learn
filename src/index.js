import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import Form from './Form';

class App extends Component {
  render () {
    return (
      <Form inputPlaceholder="Nome"/>
    );
  };
};

ReactDOM.render(<App />, document.getElementById('root'));