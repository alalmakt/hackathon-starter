import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import Home from "./components/Home";
import UserEdit from "./components/UserEdit";
import UserView from "./components/UserView";
import NotFound from "./components/NotFound";
import ApplicationList from "./components/ApplicationList";
import AgentApplicationList from "./components/AgentApplicationList"

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="user-edit(/:id)" component={UserEdit} />
      <Route path="user-view(/:user)" component={UserView} />
      <Route path="application-list" component={ApplicationList} />
      <Route path="agent-application-list" component={AgentApplicationList} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

// export
export { router };
