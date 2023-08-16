import React from "react";
import { useForm } from "react-hook-form";
import { navigate } from "wouter/use-location";
import { useAppState } from "../state";

function Confirmation() {
  const [state, setState] = useAppState();

  const [isSubmittingState, setIsSubmittingState] = React.useState(false);

  const { handleSubmit } = useForm({ defaultValues: state });

  const submitData = (data) => {
    setIsSubmittingState(true);
    fetch("http://localhost:3001/api/submit", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }).then((response) => {
      // For both success and error, there's a restart button, which should reset the state
      setState({});
      if (response && response.ok) {
        navigate("/success");
      } else {
        navigate("/error");
      }
    });
  };

  const buttonClassName = `button is-link ${
    isSubmittingState ? " is-loading" : ""
  }`;

  return (
    <>
      <div className="container">
        <h1 className="title is-1">Confirmation</h1>
      </div>

      <section className="section">
        <div className="content">
          <ul>
            <li>
              <span className="has-text-weight-semibold">First name:</span>{" "}
              {state.name}
            </li>
            <li>
              <span className="has-text-weight-semibold">Email:</span>{" "}
              {state.email}
            </li>
            <li>
              <span className="has-text-weight-semibold">Password:</span>{" "}
              {"*".repeat(state.password && state.password.length)}
            </li>
            <li>
              <span className="has-text-weight-semibold">Favorite color:</span>{" "}
              {state.color}
            </li>
            <li>
              <span className="has-text-weight-semibold">
                Terms and conditions:
              </span>
              {state.terms ? "Agreed" : "Not agreed"}
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
                <button className={buttonClassName} type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Confirmation;
