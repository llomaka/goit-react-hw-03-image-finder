import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

export default class ImageGalleryItem extends Component {
  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    showModal: PropTypes.func.isRequired,
  };

  render() {
    const { webformatURL, largeImageURL, tags, showModal } = this.props;
    return (
      <img
        className={styles.gallery__image}
        src={webformatURL}
        alt={tags}
        onClick={() => showModal({largeImageURL, tags})}
      />
    )
  };
}
