import React from "react";
import { connect } from "react-redux";
// Not found page component
export class ApplicationList extends React.Component {
  // render
  render() {
  	console.clear();
  	console.log(this.props);
    return (
      <div className="page-not-found">
        <h4>Pasdfdsfdsund</h4>
      </div>
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