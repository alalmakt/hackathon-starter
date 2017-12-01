import React from "react";
import "../stylesheets/main.scss";

import * as kendo from '@progress/kendo-ui';
/* Alternative approaches to load Kendo UI will be:
import '@progress/kendo-ui';
require("@progress/kendo-ui/js/kendo.all.js"); */
import '@progress/kendo-theme-default/dist/all.css';
import { Calendar } from '@progress/kendo-dateinputs-react-wrapper';

// app component
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        dateTime: new Date()
    };

    this.onchange = this.onchange.bind(this);
}

onchange(e) {
    this.setState({
        dateTime: e.sender.value()
    });
}
  render() {
    return (
      <div className="container">
        {this.props.children}
        <Calendar value={this.state.dateTime} change={this.onchange}/>
      </div>
    );
  }
}
