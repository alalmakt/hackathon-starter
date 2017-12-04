import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import {
  KendoGridReactWrapper,
  Grid
} from "@progress/kendo-grid-react-wrapper";
// Not found page component
export class AgentApplicationList extends React.Component {
  // render
  render() {

    const gridOptions = {
      dataSource: {
        type: "odata",
        transport: {
          read:
          "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Orders"
        },
        schema: {
          model: {
            fields: {
              OrderID: { type: "number" },
              Freight: { type: "number" },
              ShipName: { type: "string" },
              OrderDate: { type: "date" },
              ShipCity: { type: "string" }
            }
          }
        },
        pageSize: 20,
        serverPaging: false,
        serverFiltering: false,
        serverSorting: false
      },
      height: 550,
      filterable: true,
      sortable: true,
      pageable: true,
      editable: "popup",
      columns: [
        {
          field: "OrderID",
          filterable: false
        },
        "Freight",
        {
          field: "OrderDate",
          title: "Order Date",
          format: "{0:MM/dd/yyyy}"
        },
        {
          field: "ShipName",
          title: "Ship Name"
        },
        {
          field: "ShipCity",
          title: "Ship City"
        },
        { command: ["edit", "destroy"], title: "&nbsp;", width: "250px" }
      ],
      toolbar: ["create"]
    };

    var applications = [{
      fundABN: "13140019340",
      sfn: "268336946",
      memberNumber: "10202020 ",
      spin:"CBU0100AU",
      employerName:"Apple"
    },
    {
      fundABN: "60905115063",
      sfn: "261041941",
      memberNumber: "9045230",
      spin:"QSU0101AU ",
      employerName:"Coles"
    },
    {
      fundABN: "98503137921",
      sfn: "968376936",
      memberNumber: "365722031",
      spin:"SSR0100AU",
      employerName:"BHP"
    },
    {
      fundABN: "65714394898",
      sfn: "268351945",
      memberNumber: "10202020 ",
      spin:"STA0100AU",
      employerName:"Coles"
    }];

    var people = [{
      firstName: "John",
      lastName: "Smith",
      email: "john.smith@telerik.com"
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@telerik.com"
    },
    {
      firstName: "Josh",
      lastName: "Davis",
      email: "josh.davis@telerik.com"
    },
    {
      firstName: "Cindy",
      lastName: "Jones",
      email: "cindy.jones@telerik.com"
    }];

    const gridOptions1 = {
      dataSource: new kendo.data.DataSource({
        schema: {
          model: {
            id: "email"
          }
        },
        transport: {
          read: function (e) {
            // on success
            e.success(applications);
            // on failure
            //e.error("XHR response", "status code", "error message");
          },
          create: function (e) {
            // batch is disabled
            // generate appropriate data item ID and save the new items to the original datasource
            // e.data.email = e.data.email;
            // ...

            // on success return the new data items with IDs (assuming schema.data is NOT SET)
            e.success(e.data);

            // if schema.data IS SET (for example to "foo"), use the following syntax instead
            // e.success({"foo": [e.data]});

            // on failure
            //e.error("XHR response", "status code", "error message");
          }
        }
      }
      ),
      height: 550,
      filterable: true,
      sortable: true,
      pageable: true,
      editable: "popup",
      columns: [
        {
          field: "fundABN",
          title: "Fund ABN"
        //   headerAttributes: {
        //     style: "white-space: normal"
        // }
        },
        {
          field: "sfn",
          title: "SFN"
        },
        {
          field: "memberNumber",
          title: "Member Number"
        },
        {
          field: "spin",
          title: "SPIN"
        },
        {
          field: "employerName",
          title: "Employer Name"
        },
        { command: ["edit", "destroy"], title: "&nbsp;", width: "250px" }
      ],
      toolbar: ["create"]
      
    };
    return (
      <div>
        <h1>Applications</h1>
        {/* <Grid {...gridOptions} /> */}
        <Grid {...gridOptions1} />
        <div>
          <Link to={"/receipt"}><button>Submit</button></Link>
        </div>
      </div>
    );
  }
}
// export the connected class
function mapStateToProps(state) {
  return {
    user: state.users
  };
}

export default connect(mapStateToProps)(AgentApplicationList);
