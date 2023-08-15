import React, { Component } from "react";
import { AppProvider } from "./state";
import { Router, Route } from "wouter";

import Confirmation from "./Confirmation";
import MoreInfo from "./MoreInfo";
import Root from "./Root";

const App = () => (
  <AppProvider>
    <Router>
      <Route path="/" component={Root} />
      <Route path="/more-info" component={MoreInfo} />
      <Route path="/confirmation" component={Confirmation} />
    </Router>
  </AppProvider>
);

export default App;
