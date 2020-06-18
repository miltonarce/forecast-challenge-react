import React, { useState } from "react";
import PropTypes from "prop-types";
import { Input } from "./styles";

const SearchBar = ({ action }) => {
  const [value, setValue] = useState("");
  const handleForm = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <input className="c-checkbox" type="checkbox" id="checkbox" />
      <div className="c-formContainer">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            action(value);
          }}
          className="c-form"
          action="post"
        >
          <input
            className="c-form__input"
            placeholder="City"
            type="text"
            required
            onChange={handleForm}
          />
          <label className="c-form__buttonLabel">
            <button type="submit" className="c-form__button">
              Search
            </button>
          </label>
          <label
            className="c-form__toggle"
            htmlFor="checkbox"
            data-title="Search Forecast"
          ></label>
        </form>
      </div>
    </>
  );
};

SearchBar.propTypes = {
  action: PropTypes.func,
};

export default SearchBar;
