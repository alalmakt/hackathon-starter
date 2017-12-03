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
        serverPaging: true,
        serverFiltering: true,
        serverSorting: true
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
      ]
    };
    return (
      <div>
        <h1>Applications</h1>
        <Grid {...gridOptions} />
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
