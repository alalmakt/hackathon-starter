import React, { PropTypes } from "react";
import { Link } from "react-router";
import { Button, Glyphicon } from "react-bootstrap";

// User List Element component
export default class UserListElement extends React.Component {
  // render
  render() {
    const {user, showDelete} = this.props;
    return (
      <tr>
      <Link to={"user-view/"+user.id}><td>{user.submitted}</td></Link>
        <td>{user.applicantName}</td>
      </tr>
    );
  }
}

// prop checks
UserListElement.propTypes = {
  user: PropTypes.object.isRequired,
  showDelete: PropTypes.func.isRequired,
}
