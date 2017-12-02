import React from "react";
import { connect } from "react-redux";
// Not found page component
export class ApplicationList extends React.Component {
  // render
  render() {



    return (

        <h1>Pasdfdsfdsund</h1>

    );
  }
}
// export the connected class
function mapStateToProps(state) {
  return {
    user: state.users,
  };
}

export default connect(mapStateToProps)(ApplicationList);
