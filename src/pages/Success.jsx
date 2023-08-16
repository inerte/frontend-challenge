import React from "react";
import { navigate } from "wouter/use-location";

function Success() {
  return (
    <div className="container">
      <h1 className="title is-1">Success!</h1>

      <p className="content">
        <span className="has-text-success">&#10003; </span>
        You should receive a confirmation email soon.
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
