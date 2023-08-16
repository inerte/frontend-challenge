import { useForm } from "react-hook-form";
import React from "react";
import { navigate } from "wouter/use-location";
import { useAppState } from "./state";

const Root = () => {
  const [state, setState] = useAppState();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/more-info");
  };

  return (
    <>
      <div className="container">
        <h1 className="title is-1">Sign up</h1>

        <form onSubmit={handleSubmit(saveData)}>
          <div className="field">
            <label className="label">First name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                {...register("name")}
                name="name"
                placeholder="First name"
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="email"
                {...register("email")}
                name="email"
                placeholder="Email input"
                required
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                {...register("password")}
                name="password"
                placeholder="Password"
                required
              />
            </div>
          </div>

          <div className="control">
            <button className="button is-link" type="submit">
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Root;
