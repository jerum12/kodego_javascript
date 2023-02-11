import React, { Component } from 'react';

export default class ComponentLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  componentDidMount() {
    console.log('Component Did Mount');
    //fetching api
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component Did Upadate');
    //
  }

  componentWillUnmount() {
    console.log('component will un mount');
  }

  render() {
    console.log('render');
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
}
