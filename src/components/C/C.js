import React, { Component } from "react";

import { connect } from "react-redux";

class C extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        formValues: " ",
      },
    };
  }

  componentDidMount() {
    this.setState({ formValues: this.props.formValues });
  }
  render() {
    return (
      <div className="child-component">
        <div>Child Component 2 </div>

        {/* <input value={this.props.formValues}></input> */}
        <div>
          This is the "c" component - [form values: {this.props.formValues}]
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  formValues: state.formValues,
});

export default connect(mapStateToProps)(C);
