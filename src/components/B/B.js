import React, { Component } from "react";

import { connect } from "react-redux";

class B extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        message: "",
        formValues: {},
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
  }

  handleInputChange = (e) => {
    this.props.dispatch({
      type: "SET_FORMVALUES",
      payload: e.target.value,
    });
  };

  incrementParentCounter = () => {
    this.props.dispatch({ type: "INCREMENT_PARENT" });
  };

  render() {
    return (
      <div className="child-component">
        <div>Child Component 1</div>

        <input onChange={this.handleInputChange}></input>
        {/* <input onChange={this.incrementParentCounter}></input> */}
        {/* <button onClick={this.incrementParentCounter}>
              Increment Parent Counter
            </button> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  message: state.message,
});

export default connect(mapStateToProps)(B);
