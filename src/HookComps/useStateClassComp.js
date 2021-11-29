import React, { Component } from "react";

class useStateClassComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <>
        <h2>Count {this.state.count}</h2>
        <button className="btn btn-primary" onClick={this.incrementCount}>
          +1
        </button>
      </>
    );
  }
}

export default useStateClassComp;
