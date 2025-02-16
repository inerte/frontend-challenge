import React from "react";
import useSWR from "swr";
import { useForm } from "react-hook-form";
import { navigate } from "wouter/use-location";
import { useAppState } from "../state";

function MoreInfo() {
  const [state, setState] = useAppState();

  const { handleSubmit, register } = useForm({ defaultValues: state });

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data: colorOptions, isLoading } = useSWR(
    "http://localhost:3001/api/colors",
    fetcher,
  );

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/confirmation");
  };

  const selectClassName = `select ${isLoading ? "is-loading" : ""}`;

  return (
    <div className="container">
      <h1 className="title is-1">Additional Info</h1>

      <form onSubmit={handleSubmit(saveData)}>
        <div className="field">
          <div className="control">
            {/* eslint jsx-a11y/label-has-associated-control: "off" */}
            <label className="label" htmlFor="color">
              Favorite color
            </label>
            <div className={selectClassName}>
              <select name="color" id="color" {...register("color")}>
                <option value="">Select your favorite color</option>
                {colorOptions &&
                  colorOptions.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="checkbox" htmlFor="terms">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                {...register("terms")}
              />{" "}
              I agree to{" "}
              <a href="https://www.upgrade.com/funnel/borrower-documents/TERMS_OF_USE">
                terms and conditions
              </a>
            </label>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button
              type="button"
              className="button is-link is-light"
              onClick={() => navigate("/")}
            >
              Back
            </button>
          </div>
          <div className="control">
            <button className="button is-link" type="submit">
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MoreInfo;
