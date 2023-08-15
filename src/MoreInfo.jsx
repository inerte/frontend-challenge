import { useForm } from "react-hook-form";
import React, { Component } from "react";
import { useAppState } from "./state";
import { navigate } from "wouter/use-location";

const MoreInfo = () => {
  const [state, setState] = useAppState();
  const { handleSubmit, register } = useForm({ defaultValues: state });

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/confirmation");
  };

  return (
    <div className="container">
      <h1 className="title is-1">Additional Info</h1>

      <form onSubmit={handleSubmit(saveData)}>
        <div className="field">
          <label className="label">Favorite color</label>
          <div className="control">
            <div className="select">
              <select {...register("favorite-color")}>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input type="checkbox" name="agree-to-terms" {...register("agree-to-terms")} />
              I agree to <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link is-light">Back</button>
          </div>
          <div className="control">
            <button className="button is-link">Next</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MoreInfo;
