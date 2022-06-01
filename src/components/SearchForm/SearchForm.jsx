import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./SearchForm.module.css";

export default class SearchForm extends Component {
  static propTypes = {
    searchQuery: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    const { searchQuery, onChange } = this.props;
    return (
      <form
        className={styles.form}
        onSubmit={this.onSubmit}
      >
        <input
          className={styles.input}
          type="text"
          name="searchQuery"
          autoComplete="off"
          placeholder="Search images..."
          onChange={onChange}
          value={searchQuery}
        />
        <button
          className={styles.button}
          type="submit"
        >
          Search
        </button>
      </form>
    )
  };
}
