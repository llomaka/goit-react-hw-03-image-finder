import React, { Component } from "react";
import styles from "./Modal.module.css";

export default class Modal extends Component {
  componentDidMount() { }
  componentWillUnmount() { }

  render() {
    const { largeImageURL, tags , closeModal } = this.props;
    return (
      <div className={styles.backdrop} onClick={closeModal}>
        <div className={styles.modal}>
          <img
            src={largeImageURL}
            alt={tags}
          />
        </div>
      </div>
    )
  }
}
