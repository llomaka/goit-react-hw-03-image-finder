import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Searchbar.module.css";

export default class Searchbar extends Component {
  static propTypes = {
    searchQuery: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.props.searchQuery);
  };

  render() {
    const { searchQuery, onChange } = this.props;
    return (
      <header className={styles.header}>
        <form
          className={styles.form}
          onSubmit={this.onSubmit}
        >
          <button type="submit" className={styles.button}>
            <span className={styles.label}>Search</span>
          </button>
          <input
            className={styles.input}
            type="text"
            name="searchQuery"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={onChange}
            value={searchQuery}
          />
        </form>
      </header>
    )
  };
}
