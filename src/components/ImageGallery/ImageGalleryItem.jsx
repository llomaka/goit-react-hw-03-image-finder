import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

export default class ImageGalleryItem extends Component {
  static propTypes = {
    image: PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  };

  render() {
    const { image: {id, webformatURL, largeImageURL, tags}, showModal } = this.props;
    return (
      <li
        id={id}
        className={styles.gallery__item}
      >
        <img
          className={styles.gallery__image}
          src={webformatURL}
          alt={tags}
          onClick={() => showModal({largeImageURL, tags})}
          />
      </li>
    )
  }
}
