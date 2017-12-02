import React from "react";
import * as kendo from "@progress/kendo-ui";
/* Alternative approaches to load Kendo UI will be:
import '@progress/kendo-ui';
require("@progress/kendo-ui/js/kendo.all.js"); */
import "@progress/kendo-theme-default/dist/all.css";
import { MaskedTextBox } from "@progress/kendo-inputs-react-wrapper";
import { Button } from "@progress/kendo-buttons-react-wrapper";
import {
  KendoDropdownsReactWrapper,
  DropDownList
} from "@progress/kendo-dropdowns-react-wrapper";

// Home page component
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    kendoConsole.log("Value changed to: " + e.sender.value());

    this.setState({
      value: e.sender.raw()
    });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    var options = {
      filter: "startswith",
      dataTextField: "ProductName",
      dataValueField: "ProductID",
      dataSource: {
        type: "odata",
        serverFiltering: true,
        transport: {
          read: {
            url:
              "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products"
          }
        }
      }
    };

    return (
      <div className="page-home">
        <h1 className="myheader">Hello world!</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              <span>Family name</span>
              <input type="text" placeholder="Family name" />
            </label>
          </div>
          <div className="form-group">
            <label>
              <span>Given name</span>
              <input type="text" placeholder="Given name" />
            </label>
          </div>
          <div className="form-group">
            <label>
              <span>Date of birth</span>
              <MaskedTextBox
                id="exampleInputEmail1"
                value={this.state.value}
                mask={"00-00-0000"}
                change={this.onChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              <span>Passport country</span>
            </label>
            <DropDownList {...options} />
          </div>
          <div className="form-group">
            <label>
              <span>Passport number</span>
              <input type="text" placeholder="Passport number" />
            </label>
          </div>
          <input type="submit" value="Verify" />
        </form>
      </div>
    );
  }
}
