import React from "react";
import { Router, Route } from "wouter";
import { AppProvider } from "./state";

import Confirmation from "./pages/Confirmation";
import ErrorPage from "./pages/Error";
import MoreInfo from "./pages/MoreInfo";
import SignUp from "./pages/SignUp";
import Success from "./pages/Success";

function App() {
  return (
    <AppProvider>
      <Router>
        <Route path="/" component={SignUp} />
        <Route path="/more-info" component={MoreInfo} />
        <Route path="/confirmation" component={Confirmation} />
        <Route path="/success" component={Success} />
        <Route path="/error" component={ErrorPage} />
      </Router>
    </AppProvider>
  );
}

export default App;
