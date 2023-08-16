import { useForm } from "react-hook-form";
import React from "react";
import { navigate } from "wouter/use-location";
import { useAppState } from "./state";

function Root() {
  const [state, setState] = useAppState();

  const { handleSubmit, register } = useForm({
    defaultValues: state,
    mode: "onSubmit",
  });

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/more-info");
  };

  return (
    <div className="container">
      <h1 className="title is-1">Sign up</h1>

      <form onSubmit={handleSubmit(saveData)}>
        <div className="field">
          <div className="control">
            <label className="label" htmlFor="name">
              First name
              <input
                className="input"
                type="text"
                {...register("name")}
                name="name"
                placeholder="First name"
                required
              />
            </label>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="label" htmlFor="email">
              Email
              <input
                className="input"
                type="email"
                {...register("email")}
                name="email"
                id="email"
                placeholder="Email input"
                required
              />
            </label>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="label" htmlFor="password">
              Password
              <input
                className="input"
                type="password"
                {...register("password")}
                name="password"
                id="password"
                placeholder="Password"
                required
              />
            </label>
          </div>
        </div>

        <div className="control">
          <button className="button is-link" type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default Root;
