import React from "react";
import { Router, Route } from "wouter";
import { AppProvider } from "./state";

import Confirmation from "./Confirmation";
import MoreInfo from "./MoreInfo";
import Root from "./Root";

function App() {
  return (
    <AppProvider>
      <Router>
        <Route path="/" component={Root} />
        <Route path="/more-info" component={MoreInfo} />
        <Route path="/confirmation" component={Confirmation} />
      </Router>
    </AppProvider>
  );
}

export default App;
