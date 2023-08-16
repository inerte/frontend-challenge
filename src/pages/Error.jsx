import React from "react";
import { navigate } from "wouter/use-location";

function Success() {
  return (
    <div className="container">
      <h1 className="title is-1">Error</h1>

      <p className="content">
        <span className="has-text-danger">&#9447; </span>
        Uh oh, something went wrong. Please try again later.
      </p>

      <button
        type="button"
        className="button is-primary"
        onClick={() => navigate("/")}
      >
        Restart
      </button>
    </div>
  );
}

export default Success;
