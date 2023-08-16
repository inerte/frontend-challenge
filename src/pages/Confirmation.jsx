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

  return (
    <>
      <div className="container">
        <h1 className="title is-1">Confirmation</h1>
      </div>

      <section className="section">
        <div className="content">
          <ul>
            <li>First name: {state.name}</li>
            <li>Email: {state.email}</li>
            <li>
              Password: {"*".repeat(state.password && state.password.length)}
            </li>
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
                <button
                  className={
                    "button is-link" + (isSubmittingState ? " is-loading" : "")
                  }
                  type="submit"
                >
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
