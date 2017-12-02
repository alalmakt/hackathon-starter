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
import { connect } from 'react-redux'

// Home page component
export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
    this.onChange = this.onChange.bind(this);

    this.formSubmit = this.formSubmit.bind(this);
  }

  onChange(e) {
    kendoConsole.log("Value changed to: " + e.sender.value());

    this.setState({
      value: e.sender.raw()
    });
  }

  formSubmit(values) {
    this.props.dispatch({
      type: 'USERS_VERIFY'
    });
  }



  render() {

    var options = {
      filter: "startswith",
      dataTextField: "countryName",
      dataValueField: "countryValue",
      // dataSource: {
      //   type: "odata",
      //   serverFiltering: true,
      //   transport: {
      //     read: {
      //       url:
      //         "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products"
      //     }
      //   }
      // }
      dataSource: [
        { countryName: "Australia", countryValue: "AUS" },
        { countryName: "Brazil", countryValue: "BRA" },
        { countryName: "Canada", countryValue: "CAN" },
        { countryName: "China", countryValue: "CHN" },
        { countryName: "France", countryValue: "FRA" },
        { countryName: "Germany", countryValue: "DEU" },
        { countryName: "Hong Kong", countryValue: "HKG" },
        { countryName: "India", countryValue: "IND" },
        { countryName: "Indonesia", countryValue: "IDN" },
        { countryName: "Italy", countryValue: "ITA" },
        { countryName: "Japan", countryValue: "JPN" },
        { countryName: "Malaysia", countryValue: "MYS" },
        { countryName: "New Zealand", countryValue: "NZL" },
        { countryName: "Philippines", countryValue: "PHL" },
        { countryName: "Singapore", countryValue: "SGP" },
        { countryName: "South Korea", countryValue: "KOR" },
        { countryName: "Thailand", countryValue: "THA" },
        { countryName: "United Kingdom", countryValue: "GBR" },
        { countryName: "United States of America", countryValue: "USA" },
        { countryName: "Vietnam", countryValue: "VNM" }
      ]
    };

    return (
      <div className="page-home">
        <h1 className="myheader">Please provide required details.</h1>
          <div>
            <div class="form-group">
              <label>
                <span>Family name</span>
                <input type="text" placeholder="Family name" />
              </label>
            </div>
            <div class="form-group">
              <label>
                <span>Given name</span>
                <input type="text" placeholder="Given name" />
              </label>
            </div>
            <div class="form-group">
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
            <div class="form-group">
              <label>
                <span>Passport country</span>
              </label>
              <DropDownList {...options} />
            </div>
            <div class="form-group">
              <label>
                <span>Passport number</span>
                <input type="text" placeholder="Passport number" />
              </label>
            </div>
           <button>Submit</button>
          </div>
          <div className="form-group">
            <label>
              <span>Date of birth</span>
              <MaskedTextBox
                id="dateOfBirth"
                name="dateOfBirth"
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
            <DropDownList name="country" {...options} />
          </div>
          <div className="form-group">
            <label>
              <span>Passport number</span>
              <input name="passportNumber" type="text" placeholder="Passport number" />
            </label>
          </div>
          <button type="button" onClick={this.formSubmit}>Verify</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch
  }
}

const VisibleTodoList = connect(
  mapDispatchToProps
)(Home)


export default VisibleTodoList
