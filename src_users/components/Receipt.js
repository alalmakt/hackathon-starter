import React from "react";
import * as kendo from "@progress/kendo-ui";
/* Alternative approaches to load Kendo UI will be:
import '@progress/kendo-ui';
require("@progress/kendo-ui/js/kendo.all.js"); */
import "@progress/kendo-theme-default/dist/all.css";
import { MaskedTextBox } from "@progress/kendo-inputs-react-wrapper";
import { Button } from "@progress/kendo-buttons-react-wrapper";
import { Alert } from "react-bootstrap";
import { Link } from "react-router";

import {
  KendoDropdownsReactWrapper,
  DropDownList
} from "@progress/kendo-dropdowns-react-wrapper";

// Home page component
export default class Receipt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
    this.onChange = this.onChange.bind(this);    
  }

  onChange(e) {
    kendoConsole.log("Value changed to: " + e.sender.value());

    this.setState({
      value: e.sender.raw()
    });
  }
  render() {    
    return (

      <div className="page-home">
        <h1 className="myheader">Apply for departing Australia superannuation payment: application complete</h1>
        <form>
          <div>
                <Alert bsStyle="success">Your application (Ref: 240000123456) for a departing Australia superannuation payment have now been forwarded to the superannuation provider(s).</Alert> <br />                
                <span><b>Next steps:</b></span><br />
                <span>Both you and the applicant will shortly receive an e-mail message summarising the details of these applications.</span> <br />                
                <span>Please click the 'Add another client' button to return to the Departing Australia Superannuation Payment home page.</span>            
          </div>
          <div>
          <Link to={"/"}><button>Add another client</button></Link>
          </div>
        </form>
      </div>
    );
  }
}
