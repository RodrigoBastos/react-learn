import ReactDOM from 'react-dom';
import React, {Component} from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contador: 0
    };
  };

  _somarContador () {
    this.setState({
      contador: this.state.contador + 1
    });
  };

  render () {
    return (
    <div>
        <p>A soma é {this.state.contador}</p>
        <button onClick={() => this._somarContador()}>SOMAR!</button>
    </div>
    );
  };
};

ReactDOM.render(<App />, document.getElementById('root'));