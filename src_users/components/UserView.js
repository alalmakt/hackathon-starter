import React, { PropTypes } from "react";
import { connect } from "react-redux";
// User List Element component
export class UserView extends React.Component {
  // render
  render() {
    console.clear();
    console.log(this.props);
    return (
      <div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.users
  };
}

export default connect(mapStateToProps)(UserView);