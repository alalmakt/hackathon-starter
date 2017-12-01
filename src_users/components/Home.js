import React from "react";
import UserList from "./common/UserList";

// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
      	<p>Click on a link to view application.</p>
        <p><strong>Please note:</strong> If you select or view a new application it will no longer be shown as a new application</p>
        <UserList/>
      </div>
    );
  }
}