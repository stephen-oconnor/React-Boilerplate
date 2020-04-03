import React, { Component } from "react";
import { hot } from "react-hot-loader";

class App extends Component {
  state = {
    count: 0
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h3>React App</h3>
        <h4 className={count > 10 ? "warning" : null}>Count: {count}</h4>
        <button
          onClick={() => this.setState(state => ({ count: state.count + 1 }))}
        >
          +
        </button>
        <button
          onClick={() => this.setState(state => ({ count: state.count - 1 }))}
        >
          -
        </button>
      </div>
    );
  }
}

export default hot(module)(App);
