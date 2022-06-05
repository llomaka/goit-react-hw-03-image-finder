import React, { Component } from "react";
import PropTypes from "prop-types";
import { toast } from 'react-toastify';
import styles from "./Searchbar.module.css";

export default class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  static propTypes = {
    onSearchClick: PropTypes.func.isRequired,
  };

  onChange = (event) => {
    this.setState({ searchQuery: event.target.value })
  };

  onSubmit = (event) => {
    const { onSearchClick } = this.props;
    event.preventDefault();
    if (this.state.searchQuery.trim() === '') return toast.warning("Enter search query text!");
    onSearchClick(this.state.searchQuery);
    this.setState({ searchQuery: '' })
  };

  render() {
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
            onChange={this.onChange}
            value={this.state.searchQuery}
          />
        </form>
      </header>
    )
  };
}
