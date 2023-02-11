import React, { Component } from 'react';

export default class CounterState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      title: '',
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}
