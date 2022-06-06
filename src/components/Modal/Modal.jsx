import React, { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  static propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeydown);
  };

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
  }

  handleKeydown = event => {
    if (event.code === "Escape") this.props.closeModal();
  };

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;
    return createPortal(
      <div className={styles.backdrop} id="backdrop" onClick={this.handleBackdropClick}>
        <div className={styles.modal}>
          <img
            src={largeImageURL}
            alt={tags}
          />
        </div>
      </div>,
      modalRoot
    );
  }
}
