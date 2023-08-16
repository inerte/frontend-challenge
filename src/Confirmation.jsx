import React from "react";
import { useForm } from "react-hook-form";
import { navigate } from "wouter/use-location";
import { useAppState } from "./state";

function Confirmation() {
  const [state] = useAppState();
  const { handleSubmit } = useForm({ defaultValues: state });

  const submitData = (data) => {
    console.info(data);
  };

  console.log("state", state);

  return (
    <>
      <div className="container">
        <h1 className="title is-1">Confirmation</h1>
      </div>

      <ul>
        <li>First name: {state.firstName}</li>
        <li>Email: {state.email}</li>
        <li>Password: {"*".repeat(state.password.length)}</li>
        <li>Favorite color: {state.favoriteColor}</li>
        <li>
          Terms and conditions:{" "}
          {state.termsAndConditions ? "Agreed" : "Not agreed"}
        </li>
      </ul>

      <form onSubmit={handleSubmit(submitData)}>
        <div className="field is-grouped">
          <div className="control">
            <button
              type="button"
              className="button is-link is-light"
              onClick={() => navigate("/more-info")}
            >
              Back
            </button>
          </div>
          <div className="control">
            <button className="button is-link" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Confirmation;
