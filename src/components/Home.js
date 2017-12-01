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
  }

  onChange(e) {
    kendoConsole.log("Value changed to: " + e.sender.value());

    this.setState({
      value: e.sender.raw()
    });
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
        <h4>Hello world!</h4>
        <form>
          <div className="row">
            <div className="col-sm-6">
              <div class="form-group">
                <label>
                  Family name
                  <input type="text" placeholder="Family name" />
                </label>
              </div>
              <div class="form-group">
                <label>
                  Given name
                  <input type="text" placeholder="Given name" />
                </label>
              </div>
              <div class="form-group">
                <label>
                  Date of birth
                  <MaskedTextBox
                    id="exampleInputEmail1"
                    value={this.state.value}
                    mask={"00-00-0000"}
                    change={this.onChange}
                  />
                </label>
              </div>
              <div class="form-group">
                <label>Passport country</label>
                <DropDownList {...options} />
              </div>
              <div class="form-group">
                <label>
                  Passport number
                  <input type="text" placeholder="Passport number" />
                </label>
              </div>
              <Button>Submit</Button>
              <Button enable={false} icon="cancel">
                Disabled Button
              </Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
