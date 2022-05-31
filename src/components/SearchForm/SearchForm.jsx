import React, { Component } from "react";
import styles from "./SearchForm.module.css";

export default class SearchForm extends Component {
  state = {
    searchQuery: '',
  };

  onChange = (event) => {
    this.setState({searchQuery: event.target.value})
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form
        className={styles.form}
        onSubmit={this.onSubmit}
      >
        <input
          className={styles.input}
          type="text"
          name="searchQuery"
          autocomplete="off"
          placeholder="Search images..."
          onChange={this.onChange}
          value={this.state.searchQuery}
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
