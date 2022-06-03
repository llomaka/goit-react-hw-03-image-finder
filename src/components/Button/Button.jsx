import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from './Button.module.css';

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
  };

  render() {
    const { text, handleClick } = this.props;
    return (
      <button
        className={styles.button}
        type="button"
        onClick={handleClick}
      >
        {text}
      </button>
    )
  }
}
