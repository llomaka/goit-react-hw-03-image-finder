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
  }

  render() {
    const { id, largeImageURL, webformatURL, tags } = this.props;
    return (
      <li
        id={id}
        className={styles.gallery__item}
      >
        <a
          href={largeImageURL}
        >
          <img
            className={styles.gallery__image}
            src={webformatURL}
            alt={tags}
          />
        </a>
      </li>
    )
  }
}
