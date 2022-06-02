import React, { Component } from "react";
import styles from "./Modal.module.css";

export default class Modal extends Component {
  componentDidMount() { }
  componentWillUnmount() { }

  render() {
    const { children } = this.props;
    return (
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          {children}
        </div>
      </div>
    )
  }
}
